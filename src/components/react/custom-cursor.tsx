import { motion, useMotionValue } from 'framer-motion'
import { useEffect, useState } from 'react'
import cursorVariants from '@/lib/utils/cursor-variants'

type CursorVariant = 'default' | 'hover' | 'button' | 'link'

export default function CustomCursor() {
  const [cursorVariant, setCursorVariant] = useState<CursorVariant>('default')
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }

    const setVariant = (variant: CursorVariant) => () => setCursorVariant(variant)

    // Track mouse position
    window.addEventListener('mousemove', onMouseMove)

    // Auto-detect interactive elements
    const links = document.querySelectorAll('a, [role="link"]')
    const buttons = document.querySelectorAll('button, [role="button"], .btn, input[type="submit"], input[type="button"]')
    
    // Handle explicit data-cursor elements
    const hoverElements = document.querySelectorAll('[data-cursor="hover"]')
    
    // Add event listeners
    links.forEach(el => {
      el.addEventListener('mouseenter', setVariant('link'))
      el.addEventListener('mouseleave', setVariant('default'))
    })
    
    buttons.forEach(el => {
      el.addEventListener('mouseenter', setVariant('button'))
      el.addEventListener('mouseleave', setVariant('default'))
    })
    
    hoverElements.forEach(el => {
      el.addEventListener('mouseenter', setVariant('hover'))
      el.addEventListener('mouseleave', setVariant('default'))
    })

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      
      links.forEach(el => {
        el.removeEventListener('mouseenter', setVariant('link'))
        el.removeEventListener('mouseleave', setVariant('default'))
      })
      
      buttons.forEach(el => {
        el.removeEventListener('mouseenter', setVariant('button'))
        el.removeEventListener('mouseleave', setVariant('default'))
      })
      
      hoverElements.forEach(el => {
        el.removeEventListener('mouseenter', setVariant('hover'))
        el.removeEventListener('mouseleave', setVariant('default'))
      })
    }
  }, [x, y])

  return (
    <motion.div
      className="cursor pointer-events-none fixed top-0 left-0 z-[9999] rounded-full mix-blend-difference"
      style={{
        translateX: x,
        translateY: y,
        transform: 'translate(-50%, -50%)',
      }}
      variants={cursorVariants}
      animate={cursorVariant}
    />
  )
}
