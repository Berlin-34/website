'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDownIcon, ChevronRight, MenuIcon, XIcon } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

// Navigation items with mega menu content
const navItems = [
  {
    label: 'Home',
    href: '#home',
    hasMegaMenu: false,
    active: true, // Set Home as active by default
  },
  {
    label: 'Services',
    href: '#services',
    hasMegaMenu: true,
    megaMenuContent: [
      {
        title: 'Web Development',
        description: 'Custom websites built with modern technologies',
        href: '/services/web-development',
        icon: '🌐',
      },
      {
        title: 'Mobile Development',
        description: 'Native and cross-platform mobile apps',
        href: '/services/mobile-development',
        icon: '📱',
      },
      {
        title: 'UI/UX Design',
        description: 'User-centered design that converts',
        href: '/services/design',
        icon: '🎨',
      },
      {
        title: 'SEO Services',
        description: 'Improve your search engine rankings',
        href: '/services/seo',
        icon: '🔍',
      },
    ],
  },
  {
    label: 'Solutions',
    href: '#solutions',
    hasMegaMenu: true,
    megaMenuContent: [
      {
        title: 'E-commerce Platform',
        description: 'Full-featured online stores',
        href: '/solutions/ecommerce',
        icon: '🛒',
      },
      {
        title: 'CRM Solutions',
        description: 'Customer relationship management',
        href: '/solutions/crm',
        icon: '👥',
      },
      {
        title: 'Enterprise Software',
        description: 'Custom solutions for large businesses',
        href: '/solutions/enterprise',
        icon: '🏢',
      },
      {
        title: 'Digital Transformation',
        description: 'Modernize your business processes',
        href: '/solutions/digital-transformation',
        icon: '🚀',
      },
    ],
  },
  {
    label: 'About',
    href: '#about',
    hasMegaMenu: false,
  },
  {
    label: 'Blog',
    href: '/blog',
    hasMegaMenu: false,
  },
  {
    label: 'Contact',
    href: '#contact',
    hasMegaMenu: false,
  },
]

export function MegaNavMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [hoveredMenuIndex, setHoveredMenuIndex] = useState<number | null>(null)
  const [focusedMenuIndex, setFocusedMenuIndex] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<Array<HTMLAnchorElement | HTMLButtonElement | null>>(
    []
  )
  const firstItemRef = useRef<HTMLAnchorElement | HTMLButtonElement | null>(
    null
  )

  // Active mega menu is either the hovered one or the focused one
  const activeMegaMenu =
    hoveredMenuIndex !== null ? hoveredMenuIndex : focusedMenuIndex

  // Handle outside click for mega menu
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setHoveredMenuIndex(null)
        setFocusedMenuIndex(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Toggle menu open/close
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
    if (isMenuOpen) {
      setHoveredMenuIndex(null)
      setFocusedMenuIndex(null)
    }
  }

  // Focus first menu item when menu opens
  useEffect(() => {
    if (isMenuOpen && itemRefs.current[0]) {
      // Slight delay to ensure menu is rendered
      const timer = setTimeout(() => {
        itemRefs.current[0]?.focus()
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [isMenuOpen])

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    const currentIndex = itemRefs.current.findIndex(
      (el) => el === document.activeElement
    )

    if (currentIndex === -1) return

    if (e.key === 'ArrowRight') {
      e.preventDefault()
      const next = (currentIndex + 1) % navItems.length
      itemRefs.current[next]?.focus()
      setFocusedMenuIndex(null)
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault()
      const prev = (currentIndex - 1 + navItems.length) % navItems.length
      itemRefs.current[prev]?.focus()
      setFocusedMenuIndex(null)
    } else if (e.key === 'Escape') {
      if (focusedMenuIndex !== null) {
        setFocusedMenuIndex(null)
      } else if (isMenuOpen) {
        setIsMenuOpen(false)
      }
    } else if (e.key === 'ArrowDown' && navItems[currentIndex]?.hasMegaMenu) {
      e.preventDefault()
      setFocusedMenuIndex(currentIndex)
    } else if (e.key === 'ArrowUp' && focusedMenuIndex !== null) {
      e.preventDefault()
      setFocusedMenuIndex(null)
    }
  }

  // Animation variants with will-change optimization
  const megaMenuVariants = {
    hidden: {
      opacity: 0,
      y: -5,
      scaleY: 0.98,
      transformOrigin: 'top',
      transition: {
        duration: 0.08,
        ease: 'easeInOut',
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      scaleY: 1,
      transformOrigin: 'top',
      transition: {
        type: 'spring',
        stiffness: 500,
        damping: 30,
        mass: 0.8,
      },
    },
    exit: {
      opacity: 0,
      y: -5,
      scaleY: 0.98,
      transformOrigin: 'top',
      transition: {
        duration: 0.08,
        ease: 'easeInOut',
      },
    },
  }

  const megaMenuItemVariants = {
    hidden: { opacity: 0, y: 3 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.12,
        delay: custom * 0.025, // Faster staggering
        ease: 'easeOut',
      },
    }),
    exit: {
      opacity: 0,
      y: 3,
      transition: {
        duration: 0.08,
      },
    },
  }

  // Variants for menu items (horizontal navigation)
  const menuItemVariants = {
    hidden: { opacity: 0, x: 15 },
    visible: (custom: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 30,
        delay: custom * 0.04,
        ease: 'easeOut',
      },
    }),
    exit: {
      opacity: 0,
      x: 15,
      transition: {
        duration: 0.1,
        ease: 'easeIn',
      },
    },
  }

  return (
    <nav
      className="relative flex items-center justify-end"
      ref={containerRef}
      onKeyDown={handleKeyDown}
      role="navigation"
      aria-label="Main navigation"
    >
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="absolute top-0 right-0 flex items-center gap-8 pr-30"
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{ willChange: 'transform, opacity', zIndex: 10 }}
          >
            {navItems.map((item, idx) => (
              <motion.div
                key={item.label}
                className="relative"
                custom={idx}
                variants={menuItemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onMouseEnter={() =>
                  item.hasMegaMenu && setHoveredMenuIndex(idx)
                }
                onMouseLeave={() =>
                  item.hasMegaMenu && setHoveredMenuIndex(null)
                }
              >
                {item.hasMegaMenu ? (
                  <button
                    ref={(el) => {
                      itemRefs.current[idx] = el
                      if (idx === 0) firstItemRef.current = el
                    }}
                    onFocus={() => item.hasMegaMenu && setFocusedMenuIndex(idx)}
                    onBlur={() => setFocusedMenuIndex(null)}
                    onMouseEnter={() =>
                      item.hasMegaMenu && setHoveredMenuIndex(idx)
                    }
                    onMouseLeave={() => setHoveredMenuIndex(null)}
                    role="menuitem"
                    aria-haspopup="true"
                    aria-expanded={activeMegaMenu === idx}
                    tabIndex={0}
                    className={`flex cursor-none items-center gap-1 rounded px-2 py-1 hover:text-yellow-400 focus:ring-2 focus:ring-yellow-400 focus:outline-none ${item.active ? 'text-yellow-400' : 'text-white'}`}
                    data-cursor-hover
                  >
                    {item.label}
                    <ChevronDownIcon
                      className={`h-4 w-4 transition-transform ${activeMegaMenu === idx ? 'rotate-180 transform' : ''}`}
                    />
                  </button>
                ) : (
                  <a
                    href={item.href}
                    ref={(el) => {
                      itemRefs.current[idx] = el
                      if (idx === 0) firstItemRef.current = el
                    }}
                    role="menuitem"
                    tabIndex={0}
                    onMouseEnter={() => setHoveredMenuIndex(null)}
                    onMouseLeave={() => setHoveredMenuIndex(null)}
                    className={`cursor-none rounded px-2 py-1 transition-colors hover:text-yellow-400 focus:ring-2 focus:ring-yellow-400 focus:outline-none ${idx === 0 ? 'rounded-md border border-yellow-400 px-3 py-1 font-medium text-yellow-400' : 'text-white'}`}
                    data-cursor-hover
                  >
                    {item.label}
                  </a>
                )}

                {item.hasMegaMenu && (
                  <AnimatePresence>
                    {activeMegaMenu === idx && (
                      <motion.div
                        className="absolute left-1/2 z-50 mt-2 w-[500px] -translate-x-1/2 overflow-hidden rounded-xl border border-white/10 bg-black/80 text-white shadow-lg backdrop-blur-md"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={megaMenuVariants}
                        style={{
                          willChange: 'transform, opacity',
                        }}
                      >
                        <div className="grid grid-cols-2 gap-3 p-4">
                          {item.megaMenuContent?.map((menuItem, i) => (
                            <motion.a
                              key={menuItem.title}
                              href={menuItem.href}
                              custom={i}
                              variants={megaMenuItemVariants}
                              className="block cursor-none space-y-1 rounded-lg p-3 transition-colors hover:bg-white/10 focus:bg-white/10 focus:ring-2 focus:ring-white/20 focus:outline-none"
                            >
                              <div className="mb-1 flex items-center gap-3">
                                <span className="text-xl">{menuItem.icon}</span>
                                <div className="text-sm font-medium">
                                  {menuItem.title}
                                </div>
                              </div>
                              <p className="line-clamp-2 text-xs leading-snug text-gray-300">
                                {menuItem.description}
                              </p>
                            </motion.a>
                          ))}
                        </div>
                        <div className="border-t border-white/10 bg-white/5 p-3">
                          <a
                            href={item.href}
                            className="group flex cursor-none items-center gap-1 text-xs text-white/80 transition-colors hover:text-white"
                          >
                            View all {item.label.toLowerCase()}
                            <ChevronRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={toggleMenu}
        className="relative z-20 flex cursor-none items-center gap-1 px-2 py-1 font-medium text-white transition-colors hover:text-white/80"
        aria-expanded={isMenuOpen}
        aria-controls="main-navigation"
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        data-cursor-hover
        whileTap={{ scale: 0.95 }}
      >
        <span className="mr-1 leading-6">{isMenuOpen ? 'Close' : 'Menu'}</span>

        <AnimatePresence mode="wait">
          <motion.div
            key={isMenuOpen ? 'close' : 'menu'}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.15 }}
          >
            {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </motion.div>
        </AnimatePresence>
      </motion.button>
    </nav>
  )
}
