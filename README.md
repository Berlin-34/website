# KP Infotech Website

Premium Design and Technology studio website built with Astro and Sanity CMS.

**Live Site:** [kpinfo.tech](https://kpinfo.tech)
**Repository:** [github.com/kp-infotech/website](https://github.com/kp-infotech/website)

## Tech Stack

- **Frontend:** Astro 5.x (static site generation)
- **CMS:** Sanity v5 (embedded studio at `/studio`)
- **Styling:** Tailwind CSS 4.x
- **Icons:** Lucide via `@lucide/astro`
- **Animations:** GSAP + ScrollTrigger
- **Forms:** HubSpot Forms API
- **Hosting:** Cloudflare Pages

## Project Structure

```
src/
├── layouts/Layout.astro           # Base HTML wrapper
├── components/
│   ├── Navigation.astro           # Header navigation
│   ├── Footer.astro
│   ├── SEO.astro                  # Meta tags, OG, JSON-LD
│   ├── ui/                        # Button, Tag, Input, etc.
│   ├── cards/                     # ServiceCard, WorkCard, BlogCard
│   ├── sections/                  # Hero, Grid, Stats sections
│   └── effects/                   # GSAP animations
├── pages/
│   ├── work/[slug].astro          # Case studies
│   ├── services/[slug].astro      # Service pages
│   ├── industries/[slug].astro    # Industry pages
│   └── insights/[slug].astro      # Blog posts
├── lib/
│   ├── sanity.ts                  # Sanity client
│   └── queries.ts                 # GROQ queries
└── styles/global.css

sanity/
└── schemas/                       # Content models
```

## Development

```bash
# Install dependencies
npm install

# Start Astro dev server
npm run dev

# Start Sanity Studio
npm run sanity:dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

**Cloudflare Pages** (automatic deployment)
- Push to `main` → production deploy
- PR branches → preview deploys

**Manual deployment:**
```bash
npm run deploy              # Deploy to production
npm run deploy:preview      # Deploy as preview branch
```

**Sanity Studio deployment:**
```bash
npm run sanity:deploy
```

## Environment Variables

Create `.env.local` for local development:

```bash
PUBLIC_SANITY_PROJECT_ID=your_project_id
PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_token
PUBLIC_HUBSPOT_PORTAL_ID=your_portal_id
PUBLIC_HUBSPOT_FORM_ID=your_form_id
PUBLIC_GA_MEASUREMENT_ID=your_ga_id
```

For Cloudflare Pages, set these in **Settings → Environment Variables**.

## Content Management

**Sanity Studio:** Access at `/studio` route when running dev server or live at `kpinfo.tech/studio`

**Content Types:**
- Services (5 pages)
- Industries (6 pages)
- Case Studies (portfolio work)
- Blog Posts (insights)
- Testimonials
- Team Members
- Job Listings
- Site Settings (singleton)

## Design System

See `docs/context/design-system.md` for:
- Color palette
- Typography scale
- Spacing system
- Animation standards
- Component patterns

**Key principles:**
- Dark editorial aesthetic
- Warm gold accent color (`#c9a87c`)
- Premium positioning
- Performance-first (target: 90+ Lighthouse)

## Documentation

- `CLAUDE.md` — Development guidelines for Claude Code
- `docs/PRD.md` — Product requirements document
- `docs/context/design-system.md` — Design system specifications
- `docs/context/content-audit.md` — Content migration notes

## Performance

**Target metrics:**
- Lighthouse score: 90+
- LCP: <2.5s
- FID: <100ms
- CLS: <0.1

**Optimization:**
- Build-time image optimization via Astro
- AVIF → WebP → JPG fallback chain
- GSAP animations with `prefers-reduced-motion` support
- Self-hosted fonts (@fontsource)

## License

Proprietary - © 2024 KP Infotech
