# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

KP Infotech website rebuild: WordPress + Elementor → Astro + Sanity CMS. Premium UI/UX design consultancy positioning with dark editorial design language.

**Domain:** kpinfo.tech
**Target Performance:** 90+ Lighthouse scores, <2.5s LCP

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | Astro 4.x with partial hydration |
| CMS | Sanity v3 (headless) |
| Styling | Tailwind CSS 3.x with CSS custom properties |
| Animations | GSAP + ScrollTrigger |
| Forms | HubSpot Forms API |
| Hosting | Vercel |

## Commands

```bash
# Development
npm run dev              # Start Astro dev server
npm run sanity:dev       # Start Sanity Studio

# Build & Deploy
npm run build            # Production build
npm run preview          # Preview production build

# Sanity
npm run sanity:deploy    # Deploy Sanity Studio
```

## Project Structure

```
src/
├── layouts/Layout.astro           # Base HTML wrapper, SEO component
├── components/
│   ├── Navigation.astro           # Fixed header, mobile menu
│   ├── Footer.astro
│   ├── SEO.astro                  # Meta tags, OG, JSON-LD schema
│   ├── ui/                        # Button, Tag, Input, SectionLabel
│   ├── cards/                     # ServiceCard, WorkCard, BlogCard, etc.
│   ├── sections/                  # Hero, ServicesGrid, StatsSection, etc.
│   └── effects/                   # GSAP animations: FadeUp, TextReveal, Counter
├── pages/
│   ├── work/[slug].astro          # Case study dynamic routes
│   ├── services/[slug].astro      # Service detail pages
│   ├── industries/[slug].astro    # Industry detail pages
│   └── insights/[slug].astro      # Blog post pages
├── lib/
│   ├── sanity.ts                  # Sanity client configuration
│   └── queries.ts                 # GROQ queries
└── styles/global.css              # CSS variables, base styles

sanity/
├── schemas/                       # Document types: service, industry, caseStudy, blogPost
└── schemas/objects/               # portableText, processStep, faqItem, resultMetric
```

## Design System

### Colors (CSS Variables)

```css
--bg-primary: #0a0a0a      /* Main background */
--bg-secondary: #0f0f0f    /* Card backgrounds */
--text-primary: #ffffff    /* Headlines */
--text-secondary: #6b6b6b  /* Body text */
--accent: #c9a87c          /* Warm gold - CTAs, highlights */
--border: #1a1a1a          /* Default borders */
```

### Typography

- **Display:** Playfair Display (headlines, stats) - self-hosted via @fontsource
- **Body:** Outfit (body text, navigation, buttons) - self-hosted via @fontsource
- Hero H1: `clamp(3rem, 8vw, 5.5rem)`, weight 500
- Section labels: 11px uppercase, letter-spacing 4px, accent color with 40px line prefix

### Animation Standards

Use GSAP with these patterns:
- **Fade Up:** `opacity: 0→1, y: 60→0`, duration 0.8s, trigger at 80% viewport
- **Text Reveal:** `translateY: 100%→0, rotate: 3→0`, stagger 0.08s
- **Image Reveal:** Overlay `scaleX: 1→0`, duration 1.2s
- **Easing:** `power3.out` (primary), `power3.inOut` (images)
- **Reduced motion:** Always check `prefers-reduced-motion: reduce`

## Sanity CMS Patterns

### Document Types

Primary content types: `service`, `industry`, `caseStudy`, `blogPost`, `testimonial`, `teamMember`, `jobListing`, `siteSettings` (singleton)

### GROQ Query Patterns

```groq
// Fetch featured case studies for homepage
*[_type == "caseStudy" && featured == true] | order(_createdAt desc)[0...4]

// Fetch service with related work
*[_type == "service" && slug.current == $slug][0] {
  ...,
  relatedWork[]->{ title, slug, thumbnailImage }
}

// Blog posts with category
*[_type == "blogPost"] | order(publishedAt desc) {
  ...,
  category->{ title, slug }
}
```

### Image Handling

Use `@sanity/image-url` for responsive images:
```typescript
import imageUrlBuilder from '@sanity/image-url';
const builder = imageUrlBuilder(client);
const imageUrl = builder.image(source).width(800).format('webp').url();
```

## Content Architecture

### URL Patterns

| Content Type | Pattern | Example |
|--------------|---------|---------|
| Service | `/services/[slug]/` | /services/ui-ux-design/ |
| Industry | `/industries/[slug]/` | /industries/healthcare/ |
| Case Study | `/work/[slug]/` | /work/fintech-mobile-app/ |
| Blog Post | `/insights/[slug]/` | /insights/node-js-frameworks/ |
| Blog Category | `/insights/category/[slug]/` | /insights/category/development/ |

### Services (5 total)

`ui-ux-design`, `web-development`, `mobile-apps`, `erp-solutions`, `digital-marketing`

### Industries (6 total)

`healthcare`, `retail-ecommerce`, `manufacturing`, `logistics`, `finance`, `startups`

## SEO Requirements

### Schema Markup by Page Type

| Page | Schema |
|------|--------|
| Homepage | Organization, WebSite |
| Service | Service |
| Case Study | CreativeWork |
| Blog Post | Article |
| Contact | ContactPage |
| FAQ sections | FAQPage |

### Title Pattern

`{Page Title} — KP Infotech`

### Critical Redirects

Old WordPress URLs must redirect to new structure:
- `/services/website-design/` → `/services/web-development/`
- `/services/graphics-design/` → `/services/ui-ux-design/`
- `/services/erp-software/` → `/services/erp-solutions/`
- `/blogs/` → `/insights/`
- Blog posts move from root to `/insights/[slug]/`

## Component Conventions

### Section Labels

Always use consistent section label pattern:
```astro
<span class="section-label">
  <span class="line"></span>
  Services
</span>
```

### Button Variants

- `primary`: Ghost with accent border, fills on hover
- `secondary`: Solid accent fill
- `text`: Minimal with arrow icon

### Cards

All cards use `--bg-secondary` background with `1px solid var(--border)`. Hover states add left accent line (3px, `--accent`).

## Environment Variables

```bash
PUBLIC_SANITY_PROJECT_ID=     # Sanity project ID
PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=             # For preview/draft mode
PUBLIC_HUBSPOT_PORTAL_ID=     # HubSpot form embed
PUBLIC_HUBSPOT_FORM_ID=
PUBLIC_GA_MEASUREMENT_ID=     # GA4 tracking
```

## Integration Notes

### HubSpot Forms

Use API submission (not embed) for full styling control:
```typescript
await fetch(`https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ fields: [...] })
});
```

### Vercel Deployment

- Production: Push to `main`
- Preview: PR deployments
- Rebuild trigger: Sanity webhook to Vercel deploy hook

## Accessibility

- Minimum 4.5:1 contrast for body text
- `--text-secondary` on `--bg-primary` = ~4.7:1 contrast
- All interactive elements need visible focus states
- Disable GSAP animations when `prefers-reduced-motion: reduce`
