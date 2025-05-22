import { motion, useMotionValue } from 'framer-motion'
import { useCallback, useEffect, useState } from 'react'
import cursorVariants from '@/lib/utils/cursor-variants'

type CursorVariant = 'default' | 'hover' | 'button' | 'link'

/**
 * CustomCursor component that replaces the native cursor with a custom styled one.
 * Respects user's prefers-reduced-motion setting.
 * @returns A custom cursor that follows the mouse and changes style based on context
 */
export default function CustomCursor() {
  const [cursorVariant, setCursorVariant] = useState<CursorVariant>('default')
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Check if user prefers reduced motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  // If user prefers reduced motion, don't show custom cursor
  if (prefersReducedMotion) {
    return null
  }

  // Event handler factory functions - more efficient than creating new functions on each render
  const handleMouseEnter = useCallback((variant: CursorVariant) => {
    return () => setCursorVariant(variant)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setCursorVariant('default')
  }, [])

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      // Use requestAnimationFrame for performance
      requestAnimationFrame(() => {
        x.set(e.clientX)
        y.set(e.clientY)
      })
    }

    // Create handler instances once
    const linkEnterHandler = handleMouseEnter('link')
    const buttonEnterHandler = handleMouseEnter('button')
    const hoverEnterHandler = handleMouseEnter('hover')

    // Track mouse position
    window.addEventListener('mousemove', onMouseMove, { passive: true })

    // Auto-detect interactive elements
    const links = document.querySelectorAll('a, [role="link"]')
    const buttons = document.querySelectorAll('button, [role="button"], .btn, input[type="submit"], input[type="button"]')
    
    // Handle explicit data-cursor elements
    const hoverElements = document.querySelectorAll('[data-cursor="hover"]')
    
    // Add event listeners
    links.forEach(el => {
      el.addEventListener('mouseenter', linkEnterHandler)
      el.addEventListener('mouseleave', handleMouseLeave)
    })
    
    buttons.forEach(el => {
      el.addEventListener('mouseenter', buttonEnterHandler)
      el.addEventListener('mouseleave', handleMouseLeave)
    })
    
    hoverElements.forEach(el => {
      el.addEventListener('mouseenter', hoverEnterHandler)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      
      links.forEach(el => {
        el.removeEventListener('mouseenter', linkEnterHandler)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
      
      buttons.forEach(el => {
        el.removeEventListener('mouseenter', buttonEnterHandler)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
      
      hoverElements.forEach(el => {
        el.removeEventListener('mouseenter', hoverEnterHandler)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [x, y, handleMouseEnter, handleMouseLeave])

  return (
    <motion.div
      className="cursor pointer-events-none fixed z-[9999] rounded-full mix-blend-difference"
      style={{
        x,
        y,
        translateX: '-50%',
        translateY: '-50%',
      }}
      variants={cursorVariants}
      animate={cursorVariant}
      aria-hidden="true" // Hide from screen readers
    />
  )
}
