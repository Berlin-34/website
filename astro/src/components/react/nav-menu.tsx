'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { CgMenuLeft } from 'react-icons/cg'
import { RiCloseLargeLine } from 'react-icons/ri'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'About', href: '#about' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export function NavMenu() {
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const firstItemRef = useRef<HTMLAnchorElement>(null)
  const itemRefs = useRef<Array<HTMLAnchorElement | null>>([])

  // Handle outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Focus first menu item on open
  useEffect(() => {
    if (open && firstItemRef.current) {
      firstItemRef.current.focus()
    }
  }, [open])

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    const currentIndex = itemRefs.current.findIndex(
      (el) => el === document.activeElement
    )

    if (e.key === 'ArrowRight') {
      e.preventDefault()
      const next = (currentIndex + 1) % navItems.length
      itemRefs.current[next]?.focus()
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault()
      const prev = (currentIndex - 1 + navItems.length) % navItems.length
      itemRefs.current[prev]?.focus()
    } else if (e.key === 'Escape') {
      setOpen(false)
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 },
  }

  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
    hidden: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  }

  return (
    <nav
      className="flex w-full items-center justify-end px-4 py-4"
      role="navigation"
      aria-label="Main navigation"
      ref={containerRef}
    >
      <AnimatePresence>
        {open && (
          <motion.ul
            className="mr-2 flex cursor-none items-center gap-4 text-white"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={containerVariants}
            role="menubar"
            aria-hidden={!open}
            onKeyDown={handleKeyDown}
          >
            {navItems.map(({ label, href }, idx) => (
              <motion.li key={label} variants={itemVariants} role="none">
                <a
                  href={href}
                  ref={(el) => {
                    itemRefs.current[idx] = el
                    if (idx === 0) firstItemRef.current = el
                  }}
                  role="menuitem"
                  tabIndex={0}
                  className="cursor-none rounded px-2 py-1 hover:underline focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                >
                  {label}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen((prev) => !prev)}
        className="text-md cursor-none rounded px-3 py-2 font-semibold text-white"
        aria-expanded={open}
        aria-controls="main-nav"
        aria-label={open ? 'Close menu' : 'Open menu'}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={open ? 'close' : 'menu'}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-2"
          >
            {open ? (
              <>
                <RiCloseLargeLine size={20} />
                <span>Close</span>
              </>
            ) : (
              <>
                <CgMenuLeft size={20} />
                <span>Menu</span>
              </>
            )}
          </motion.span>
        </AnimatePresence>
      </motion.button>
    </nav>
  )
}
