# KP INFOTECH Design System
## Dark Editorial â€” Refined Variation

**Version:** 1.0  
**Last Updated:** February 2025  
**Direction:** Bold, confident, premium, exclusive

---

## Brand Positioning

KP Infotech is a **UI/UX design consultancy** (not SaaS) serving startups and businesses seeking premium digital products. The design language should convey mastery, exclusivity, and meticulous craftsmanship â€” like a high-end architecture firm or luxury brand agency.

**Voice:** Confident but not arrogant. Minimal but not cold. Premium but accessible.

---

## Color Palette

### Primary Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--bg-primary` | `#0a0a0a` | Main background, deepest black |
| `--bg-secondary` | `#0f0f0f` | Card backgrounds, alternate sections |
| `--bg-tertiary` | `#161616` | Hover states, elevated surfaces |

### Text Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--text-primary` | `#ffffff` | Headlines, primary content |
| `--text-secondary` | `#6b6b6b` | Body text, descriptions |
| `--text-muted` | `#3a3a3a` | Subtle labels, decorative numbers |

### Accent Colors (Warm Gold)

| Token | Hex | Usage |
|-------|-----|-------|
| `--accent` | `#c9a87c` | Primary accent, CTAs, highlights |
| `--accent-light` | `#e4d4bc` | Hover states, gradients |
| `--accent-dim` | `#8b7355` | Subtle accents, decorative elements |

### Border Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--border` | `#1a1a1a` | Default borders, dividers |
| `--border-light` | `#2a2a2a` | Hover borders, emphasis |

### Utility Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--success` | `#4ade80` | Success states, confirmations |
| `--error` | `#f87171` | Error states, warnings |

---

## Typography

### Font Families

```css
--font-display: 'Playfair Display', serif;
--font-body: 'Outfit', sans-serif;
```

**Playfair Display** â€” Used for headlines, large display text, numbers in stats. Conveys editorial elegance and premium quality.

**Outfit** â€” Used for body text, navigation, labels, buttons. Clean geometric sans-serif that balances the serif's personality.

### Type Scale

| Element | Font | Size | Weight | Letter Spacing | Line Height |
|---------|------|------|--------|----------------|-------------|
| Hero H1 | Playfair | `clamp(3rem, 8vw, 5.5rem)` | 500 | `-0.02em` | `0.95` |
| Section H2 | Playfair | `clamp(2.5rem, 5vw, 4rem)` | 500 | `normal` | `1.1` |
| Card H3 | Playfair | `1.5rem - 2rem` | 400 | `normal` | `1.2` |
| Body Large | Outfit | `1.125rem - 1.25rem` | 300 | `normal` | `1.6` |
| Body | Outfit | `1rem` | 300 | `normal` | `1.6` |
| Label | Outfit | `0.6875rem` | 400 | `0.25em` | `1` |
| Nav Link | Outfit | `0.75rem` | 400 | `0.125em` | `1` |
| Button | Outfit | `0.75rem` | 400 | `0.1875em` | `1` |

### Text Treatments

**Section Labels** â€” All caps, letter-spacing `4px`, accent color, preceded by 40px horizontal line
```css
.section-label {
  display: inline-flex;
  align-items: center;
  gap: 16px;
  font-size: 11px;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: var(--accent);
}
.section-label::before {
  content: '';
  width: 40px;
  height: 1px;
  background: var(--accent);
}
```

**Muted Headlines** â€” Secondary headline text uses `--text-secondary` for hierarchy
```html
<h2 class="font-display">
  Services<br>
  <span class="text-secondary">& Expertise</span>
</h2>
```

---

## Spacing System

Based on 8px grid with key increments:

| Token | Value | Usage |
|-------|-------|-------|
| `xs` | `8px` | Tight gaps, inline spacing |
| `sm` | `12px` | Button gaps, tag padding |
| `md` | `16px` | Form padding, small margins |
| `lg` | `24px` | Section label margins, card gaps |
| `xl` | `32px` | Stat padding, medium sections |
| `2xl` | `48px` | Section padding (horizontal), nav gaps |
| `3xl` | `64px` | Large vertical rhythm |
| `4xl` | `128px` | Section padding (vertical: `py-32`) |

### Page Margins

```css
/* Mobile */
padding: 0 24px;

/* Tablet */
padding: 0 64px; /* md:px-16 */

/* Desktop */
padding: 0 96px; /* lg:px-24 */
```

### Max Content Width

```css
max-width: 1280px; /* max-w-7xl */
margin: 0 auto;
```

---

## Components

### Buttons

**Primary Button** â€” Ghost style with accent border, fills on hover
```css
.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 18px 36px;
  background: transparent;
  border: 1px solid var(--accent);
  color: var(--text-primary);
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 3px;
  text-transform: uppercase;
}

/* Hover: accent background slides in from left */
.btn-primary:hover {
  background: var(--accent);
  color: var(--bg-primary);
}
```

**Secondary Button** â€” Solid accent fill
```css
.btn-secondary {
  /* Same structure, but: */
  background: var(--accent);
  color: var(--bg-primary);
}
```

**Text Link** â€” Minimal, arrow follows on hover
```css
.text-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--text-secondary);
  font-size: 13px;
  letter-spacing: 1px;
}
.text-link:hover {
  color: var(--accent);
}
.text-link:hover svg {
  transform: translateX(4px);
}
```

### Cards

**Service Card**
- Background: `--bg-secondary`
- Border: `1px solid var(--border)`
- Padding: `56px 48px` (desktop), `40px 32px` (mobile)
- Left accent line appears on hover (3px wide, `--accent`)
- Large muted number (`01`, `02`) in Playfair, `64px`, `--border-light`

**Work/Project Card**
- Image with reveal animation
- Gradient overlay on hover (bottom to top)
- Title in Playfair, year in accent color
- Tags below in uppercase, bordered pills

### Form Elements

**Text Input** â€” Underline style
```css
.form-input {
  width: 100%;
  padding: 16px 0;
  background: transparent;
  border: none;
  border-bottom: 1px solid var(--border-light);
  color: var(--text-primary);
  font-size: 16px;
}
.form-input:focus {
  border-color: var(--accent);
}
```

**Textarea** â€” Boxed style
```css
.form-textarea {
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  padding: 16px;
  min-height: 150px;
}
```

### Tags/Pills

```css
.tag {
  display: inline-block;
  padding: 6px 12px;
  font-size: 11px;
  letter-spacing: 1px;
  text-transform: uppercase;
  border: 1px solid var(--border);
  color: var(--text-secondary);
}
.tag:hover {
  border-color: var(--accent-dim);
  color: var(--accent);
}
```

### Stats

```css
.stat-number {
  font-family: 'Playfair Display', serif;
  font-size: clamp(48px, 5vw, 64px);
  font-weight: 400;
  color: var(--accent);
  line-height: 1;
}
.stat-label {
  font-size: 13px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--text-secondary);
  margin-top: 12px;
}
```

---

## Navigation

**Fixed header** â€” Transparent initially, gains backdrop blur on scroll

```css
nav {
  position: fixed;
  padding: 28px 48px;
  transition: all 0.4s ease;
}

nav.scrolled {
  padding: 20px 48px;
  background: rgba(10, 10, 10, 0.9);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border);
}
```

**Nav Links** â€” Underline grows from left on hover
```css
.nav-link {
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 2px;
  text-transform: uppercase;
}
.nav-link::after {
  /* 1px line, grows width 0 â†’ 100% on hover */
}
```

---

## Animation Principles

### Core Easing

```javascript
// Primary easing â€” smooth, premium feel
'power3.out'      // Most animations
'power3.inOut'    // Image reveals

// Elastic â€” magnetic button return
'elastic.out(1, 0.5)'

// Linear â€” scroll-linked animations
'none'
```

### Animation Patterns

**Text Reveal** â€” Characters/words slide up from below
```javascript
// Initial: translateY(100%), rotate(3deg)
// Final: translateY(0), rotate(0)
// Stagger: 0.08s between elements
// Duration: 1s
```

**Fade Up** â€” Standard entrance for sections
```javascript
// Initial: opacity(0), y(60px)
// Final: opacity(1), y(0)
// Duration: 0.8s
// Trigger: element enters 80% of viewport
```

**Image Reveal** â€” Overlay slides away
```javascript
// Overlay scaleX: 1 â†’ 0
// Transform-origin: right (reveals left to right)
// Duration: 1.2s
```

**Counter Animation** â€” Stats count up
```javascript
// Duration: 2s
// Easing: power2.out
// Snap to integers
```

**Magnetic Buttons** â€” Follow cursor slightly
```javascript
// On mousemove: translate toward cursor by 15%
// On mouseleave: elastic return to origin
```

### Scroll Progress

Thin horizontal line at top of viewport, accent gradient, grows with scroll.

### Custom Cursor

- Outer ring: 40px, 1px border, `rgba(201, 168, 124, 0.4)`
- Inner dot: 6px solid accent, mix-blend-mode difference
- Ring expands to 60px on interactive element hover

---

## Decorative Elements

**Grain Overlay** â€” Subtle texture across entire viewport
```css
.grain {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 9998;
  opacity: 0.025;
  /* SVG noise pattern */
}
```

**Decorative Circle** â€” Large border-only circle, positioned off-canvas
```css
.deco-circle {
  width: 200px;
  height: 200px;
  border: 1px solid var(--border);
  border-radius: 50%;
  position: absolute;
}
```

**Decorative Line** â€” Vertical gradient line
```css
.deco-line {
  width: 1px;
  height: 120px;
  background: linear-gradient(to bottom, var(--accent), transparent);
}
```

---

## Layout Patterns

### Hero Section

```
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚  [Logo]                    Work  Services  About    â”‚
â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤
â”‚                                                     â”‚
â”‚  â”€â”€ UI/UX Design Consultancy                        â”‚
â”‚                                                     â”‚
â”‚  We craft                          â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”  â”‚
â”‚  digital                           â”‚             â”‚  â”‚
â”‚  experiences                       â”‚   [Image]   â”‚  â”‚
â”‚                                    â”‚             â”‚  â”‚
â”‚  Transforming ambitious...         â”‚  â”Œâ”€â”€â”€â”€â”€â”€â”€â”  â”‚  â”‚
â”‚                                    â””â”€â”€â”‚ 150+  â”‚â”€â”€â”˜  â”‚
â”‚  [ Start a Project â†’ ]                â””â”€â”€â”€â”€â”€â”€â”€â”˜     â”‚
â”‚  View our work â†’                                    â”‚
â”‚                                                     â”‚
â”‚                    Scroll                           â”‚
â”‚                      |                              â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
```

Grid: 12 columns, content spans 7, image spans 5

### Services Grid

2-column grid, equal width cards, 6px gap

### Work/Portfolio Grid

2-column grid, staggered heights acceptable, larger gaps (8px horizontal, 16px vertical)

---

## Responsive Breakpoints

| Breakpoint | Width | Key Changes |
|------------|-------|-------------|
| Mobile | `< 768px` | Stack all grids, reduce padding to 24px, hide hero image, hamburger nav |
| Tablet | `768px - 1024px` | 2-column grids, 64px padding |
| Desktop | `> 1024px` | Full layouts, 96px padding, all animations |

---

## Accessibility Notes

- Maintain minimum 4.5:1 contrast for body text
- `--text-secondary` (#6b6b6b) on `--bg-primary` (#0a0a0a) = ~4.7:1 âœ“
- `--accent` (#c9a87c) should only be used for non-essential decorative text
- All interactive elements need visible focus states
- Reduced motion: disable GSAP animations when `prefers-reduced-motion: reduce`

---

## File Naming Conventions

```
/components
  /ui
    Button.astro
    Card.astro
    Tag.astro
    Input.astro
  /sections
    Hero.astro
    Services.astro
    Work.astro
    Stats.astro
    Testimonial.astro
    Contact.astro
    Footer.astro
  /layout
    Navigation.astro
    Layout.astro

/styles
  /base
    reset.css
    typography.css
    variables.css
  /utilities
    animations.css
```

---

## Implementation Notes

### For Astro + Headless WordPress

1. **CSS Variables** â€” Define in `global.css`, use throughout components
2. **Fonts** â€” Self-host via `@fontsource/playfair-display` and `@fontsource/outfit` for performance
3. **GSAP** â€” Import in client-side scripts, use `client:load` directive on interactive components
4. **Tailwind** â€” Extend theme with CSS variable references
5. **WordPress** â€” Restrict Gutenberg to brand colors only via `theme.json`

### Tailwind Config Extension

```javascript
theme: {
  extend: {
    colors: {
      bg: {
        primary: 'var(--bg-primary)',
        secondary: 'var(--bg-secondary)',
        tertiary: 'var(--bg-tertiary)',
      },
      accent: {
        DEFAULT: 'var(--accent)',
        light: 'var(--accent-light)',
        dim: 'var(--accent-dim)',
      },
      // ... etc
    },
    fontFamily: {
      display: ['Playfair Display', 'serif'],
      body: ['Outfit', 'sans-serif'],
    },
  },
}
```

---

*This document serves as the single source of truth for the KP Infotech redesign. All components and pages should reference these specifications.*