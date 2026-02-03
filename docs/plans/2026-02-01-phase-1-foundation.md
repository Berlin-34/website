# Phase 1: Foundation Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Establish the complete Astro + Sanity + Tailwind foundation with base layout components, deployed to Vercel.

**Architecture:** Astro 4.x static site with embedded Sanity Studio at `/studio`. Tailwind configured with CSS custom properties for the dark editorial design system. Layout components (Navigation, Footer, SEO) wrap all pages. Sanity client fetches content at build time.

**Tech Stack:** Astro 4.x, Sanity v3, Tailwind CSS 3.x, TypeScript, Vercel, @fontsource (Playfair Display, Outfit)

---

## Task 1: Initialize Astro Project

**Files:**
- Create: `package.json`
- Create: `astro.config.mjs`
- Create: `tsconfig.json`
- Create: `src/pages/index.astro`

**Step 1: Create Astro project**

Run:
```bash
npm create astro@latest . -- --template minimal --typescript strict --install --git
```

When prompted, accept defaults. This creates the base Astro structure.

**Step 2: Verify dev server starts**

Run:
```bash
npm run dev
```

Expected: Server running at `http://localhost:4321`, shows welcome page.

**Step 3: Commit**

```bash
git add -A
git commit -m "feat: initialize Astro project with TypeScript"
```

---

## Task 2: Add Astro Integrations

**Files:**
- Modify: `package.json`
- Modify: `astro.config.mjs`

**Step 1: Install integrations**

Run:
```bash
npm install @astrojs/tailwind @astrojs/sitemap @astrojs/vercel
```

**Step 2: Configure integrations in astro.config.mjs**

Replace contents of `astro.config.mjs`:

```javascript
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://kpinfo.tech',
  output: 'static',
  adapter: vercel(),
  integrations: [
    tailwind(),
    sitemap(),
  ],
});
```

**Step 3: Verify build works**

Run:
```bash
npm run build
```

Expected: Build succeeds, outputs to `dist/` folder.

**Step 4: Commit**

```bash
git add package.json package-lock.json astro.config.mjs
git commit -m "feat: add Tailwind, Sitemap, and Vercel integrations"
```

---

## Task 3: Configure Tailwind Design System

**Files:**
- Create: `tailwind.config.mjs`
- Create: `src/styles/global.css`

**Step 1: Create global.css with CSS variables**

Create `src/styles/global.css`:

```css
@import "tailwindcss";

:root {
  /* Backgrounds */
  --bg-primary: #0a0a0a;
  --bg-secondary: #0f0f0f;
  --bg-tertiary: #161616;

  /* Text */
  --text-primary: #ffffff;
  --text-secondary: #6b6b6b;
  --text-muted: #3a3a3a;

  /* Accent (Warm Gold) */
  --accent: #c9a87c;
  --accent-light: #e4d4bc;
  --accent-dim: #8b7355;

  /* Borders */
  --border: #1a1a1a;
  --border-light: #2a2a2a;

  /* Utility */
  --success: #4ade80;
  --error: #f87171;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background-color: var(--bg-primary);
  color: var(--text-primary);
  font-family: 'Outfit', sans-serif;
  font-weight: 300;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Playfair Display', serif;
  font-weight: 500;
  line-height: 1.1;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  max-width: 100%;
  height: auto;
}

/* Section Label Pattern */
.section-label {
  display: inline-flex;
  align-items: center;
  gap: 16px;
  font-family: 'Outfit', sans-serif;
  font-size: 11px;
  font-weight: 400;
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

**Step 2: Create tailwind.config.mjs**

Create `tailwind.config.mjs`:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: 'var(--bg-primary)',
          secondary: 'var(--bg-secondary)',
          tertiary: 'var(--bg-tertiary)',
        },
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          muted: 'var(--text-muted)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          light: 'var(--accent-light)',
          dim: 'var(--accent-dim)',
        },
        border: {
          DEFAULT: 'var(--border)',
          light: 'var(--border-light)',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Outfit', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [],
};
```

**Step 3: Verify Tailwind works**

Update `src/pages/index.astro`:

```astro
---
import '../styles/global.css';
---

<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>KP Infotech</title>
  </head>
  <body>
    <div class="min-h-screen flex items-center justify-center">
      <div class="text-center">
        <span class="section-label">UI/UX Design Consultancy</span>
        <h1 class="font-display text-5xl mt-6 text-text-primary">KP Infotech</h1>
        <p class="text-text-secondary mt-4">Foundation setup in progress...</p>
        <div class="mt-8 inline-block px-8 py-4 border border-accent text-accent">
          Design System Working
        </div>
      </div>
    </div>
  </body>
</html>
```

Run:
```bash
npm run dev
```

Expected: Page shows styled content with dark background, gold accent, correct fonts placeholder (fonts added next task).

**Step 4: Commit**

```bash
git add tailwind.config.mjs src/styles/global.css src/pages/index.astro
git commit -m "feat: configure Tailwind with design system tokens"
```

---

## Task 4: Install Self-Hosted Fonts

**Files:**
- Modify: `package.json`
- Modify: `src/styles/global.css`

**Step 1: Install font packages**

Run:
```bash
npm install @fontsource/playfair-display @fontsource/outfit
```

**Step 2: Import fonts in global.css**

Add at the top of `src/styles/global.css` (before the @tailwind directives):

```css
/* Fonts */
@import '@fontsource/playfair-display/400.css';
@import '@fontsource/playfair-display/500.css';
@import '@fontsource/outfit/300.css';
@import '@fontsource/outfit/400.css';

@import "tailwindcss";

/* ... rest of file ... */
```

**Step 3: Verify fonts load**

Run:
```bash
npm run dev
```

Expected: Page shows Playfair Display for heading, Outfit for body text. Check in browser DevTools > Elements > Computed that correct font-family is applied.

**Step 4: Commit**

```bash
git add package.json package-lock.json src/styles/global.css
git commit -m "feat: add self-hosted Playfair Display and Outfit fonts"
```

---

## Task 5: Initialize Sanity Studio

**Files:**
- Create: `sanity.config.ts`
- Create: `sanity.cli.ts`
- Create: `sanity/schema.ts`
- Create: `src/pages/studio/[...index].astro`
- Modify: `package.json`
- Modify: `astro.config.mjs`

**Step 1: Install Sanity packages**

Run:
```bash
npm install sanity @sanity/astro @sanity/vision @sanity/client @sanity/image-url
```

**Step 2: Create Sanity project**

Run:
```bash
npx sanity@latest init --env .env.local --create-project "KP Infotech" --dataset production
```

When prompted:
- Project output path: `.` (current directory)
- Select project template: Clean project with no predefined schemas
- TypeScript: Yes
- Package manager: npm

This creates `sanity.config.ts`, `sanity.cli.ts`, and adds env vars to `.env.local`.

**Step 3: Create base schema file**

Create `sanity/schema.ts`:

```typescript
import { type SchemaTypeDefinition } from 'sanity';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [],
};
```

**Step 4: Update sanity.config.ts**

Replace contents of `sanity.config.ts`:

```typescript
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schema } from './sanity/schema';

const projectId = process.env.PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.PUBLIC_SANITY_DATASET || 'production';

export default defineConfig({
  name: 'kp-infotech',
  title: 'KP Infotech',
  projectId,
  dataset,
  plugins: [structureTool(), visionTool()],
  schema,
});
```

**Step 5: Add Sanity integration to Astro**

Update `astro.config.mjs`:

```javascript
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import sanity from '@sanity/astro';

export default defineConfig({
  site: 'https://kpinfo.tech',
  output: 'static',
  adapter: vercel(),
  integrations: [
    tailwind(),
    sitemap(),
    sanity({
      projectId: process.env.PUBLIC_SANITY_PROJECT_ID,
      dataset: process.env.PUBLIC_SANITY_DATASET || 'production',
      useCdn: false,
      studioBasePath: '/studio',
    }),
  ],
});
```

**Step 6: Create .env.example**

Create `.env.example`:

```bash
# Sanity
PUBLIC_SANITY_PROJECT_ID=
PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=

# HubSpot (Phase 2)
PUBLIC_HUBSPOT_PORTAL_ID=
PUBLIC_HUBSPOT_FORM_ID=

# Analytics (Phase 8)
PUBLIC_GA_MEASUREMENT_ID=
```

**Step 7: Add .env.local to .gitignore**

Ensure `.gitignore` includes:

```
.env
.env.local
.env.*.local
```

**Step 8: Add Sanity scripts to package.json**

Add to `scripts` in `package.json`:

```json
{
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "sanity:dev": "sanity dev",
    "sanity:deploy": "sanity deploy",
    "sanity:build": "sanity build"
  }
}
```

**Step 9: Verify Studio loads**

Run:
```bash
npm run dev
```

Navigate to `http://localhost:4321/studio`

Expected: Sanity Studio loads with empty schema (no document types yet).

**Step 10: Commit**

```bash
git add -A
git commit -m "feat: initialize Sanity Studio with Astro integration"
```

---

## Task 6: Create Sanity Document Schemas

**Files:**
- Create: `sanity/schemas/service.ts`
- Create: `sanity/schemas/industry.ts`
- Create: `sanity/schemas/caseStudy.ts`
- Create: `sanity/schemas/blogPost.ts`
- Create: `sanity/schemas/blogCategory.ts`
- Create: `sanity/schemas/testimonial.ts`
- Create: `sanity/schemas/teamMember.ts`
- Create: `sanity/schemas/jobListing.ts`
- Create: `sanity/schemas/siteSettings.ts`
- Modify: `sanity/schema.ts`

**Step 1: Create service schema**

Create `sanity/schemas/service.ts`:

```typescript
import { defineType, defineField } from 'sanity';

export const service = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', title: 'Title', validation: (Rule) => Rule.required() }),
    defineField({ name: 'slug', type: 'slug', title: 'Slug', options: { source: 'title' }, validation: (Rule) => Rule.required() }),
    defineField({ name: 'tagline', type: 'string', title: 'Tagline' }),
    defineField({ name: 'excerpt', type: 'text', title: 'Excerpt', rows: 3 }),
    defineField({ name: 'icon', type: 'string', title: 'Icon Name', description: 'Icon identifier for the service' }),
    defineField({ name: 'heroImage', type: 'image', title: 'Hero Image', options: { hotspot: true } }),
    defineField({ name: 'content', type: 'array', title: 'Content', of: [{ type: 'block' }, { type: 'image', options: { hotspot: true } }] }),
    defineField({ name: 'process', type: 'array', title: 'Process Steps', of: [{ type: 'processStep' }] }),
    defineField({ name: 'technologies', type: 'array', title: 'Technologies', of: [{ type: 'string' }] }),
    defineField({ name: 'faqs', type: 'array', title: 'FAQs', of: [{ type: 'faqItem' }] }),
    defineField({ name: 'relatedWork', type: 'array', title: 'Related Work', of: [{ type: 'reference', to: [{ type: 'caseStudy' }] }] }),
    defineField({ name: 'seoTitle', type: 'string', title: 'SEO Title' }),
    defineField({ name: 'seoDescription', type: 'text', title: 'SEO Description', rows: 2 }),
    defineField({ name: 'order', type: 'number', title: 'Display Order' }),
  ],
  preview: {
    select: { title: 'title', media: 'heroImage' },
  },
});
```

**Step 2: Create industry schema**

Create `sanity/schemas/industry.ts`:

```typescript
import { defineType, defineField } from 'sanity';

export const industry = defineType({
  name: 'industry',
  title: 'Industry',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', title: 'Title', validation: (Rule) => Rule.required() }),
    defineField({ name: 'slug', type: 'slug', title: 'Slug', options: { source: 'title' }, validation: (Rule) => Rule.required() }),
    defineField({ name: 'tagline', type: 'string', title: 'Tagline' }),
    defineField({ name: 'excerpt', type: 'text', title: 'Excerpt', rows: 3 }),
    defineField({ name: 'icon', type: 'string', title: 'Icon Name' }),
    defineField({ name: 'heroImage', type: 'image', title: 'Hero Image', options: { hotspot: true } }),
    defineField({ name: 'challenges', type: 'array', title: 'Industry Challenges', of: [{ type: 'block' }] }),
    defineField({ name: 'solutions', type: 'array', title: 'Our Solutions', of: [{ type: 'block' }] }),
    defineField({ name: 'relatedWork', type: 'array', title: 'Related Work', of: [{ type: 'reference', to: [{ type: 'caseStudy' }] }] }),
    defineField({ name: 'relatedServices', type: 'array', title: 'Related Services', of: [{ type: 'reference', to: [{ type: 'service' }] }] }),
    defineField({ name: 'seoTitle', type: 'string', title: 'SEO Title' }),
    defineField({ name: 'seoDescription', type: 'text', title: 'SEO Description', rows: 2 }),
    defineField({ name: 'order', type: 'number', title: 'Display Order' }),
  ],
  preview: {
    select: { title: 'title', media: 'heroImage' },
  },
});
```

**Step 3: Create caseStudy schema**

Create `sanity/schemas/caseStudy.ts`:

```typescript
import { defineType, defineField } from 'sanity';

export const caseStudy = defineType({
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', title: 'Project Title', validation: (Rule) => Rule.required() }),
    defineField({ name: 'slug', type: 'slug', title: 'Slug', options: { source: 'title' }, validation: (Rule) => Rule.required() }),
    defineField({ name: 'client', type: 'string', title: 'Client Name' }),
    defineField({ name: 'year', type: 'string', title: 'Year' }),
    defineField({ name: 'featured', type: 'boolean', title: 'Featured on Homepage', initialValue: false }),
    defineField({ name: 'heroImage', type: 'image', title: 'Hero Image', options: { hotspot: true } }),
    defineField({ name: 'thumbnailImage', type: 'image', title: 'Thumbnail Image', options: { hotspot: true } }),
    defineField({ name: 'excerpt', type: 'text', title: 'Excerpt', rows: 3 }),
    defineField({ name: 'challenge', type: 'array', title: 'Challenge', of: [{ type: 'block' }] }),
    defineField({ name: 'approach', type: 'array', title: 'Approach', of: [{ type: 'block' }] }),
    defineField({ name: 'content', type: 'array', title: 'Full Content', of: [{ type: 'block' }, { type: 'image', options: { hotspot: true } }] }),
    defineField({ name: 'results', type: 'array', title: 'Results', of: [{ type: 'resultMetric' }] }),
    defineField({ name: 'testimonial', type: 'reference', title: 'Testimonial', to: [{ type: 'testimonial' }] }),
    defineField({ name: 'services', type: 'array', title: 'Services', of: [{ type: 'reference', to: [{ type: 'service' }] }] }),
    defineField({ name: 'industries', type: 'array', title: 'Industries', of: [{ type: 'reference', to: [{ type: 'industry' }] }] }),
    defineField({ name: 'seoTitle', type: 'string', title: 'SEO Title' }),
    defineField({ name: 'seoDescription', type: 'text', title: 'SEO Description', rows: 2 }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'client', media: 'thumbnailImage' },
  },
});
```

**Step 4: Create blogCategory schema**

Create `sanity/schemas/blogCategory.ts`:

```typescript
import { defineType, defineField } from 'sanity';

export const blogCategory = defineType({
  name: 'blogCategory',
  title: 'Blog Category',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', title: 'Title', validation: (Rule) => Rule.required() }),
    defineField({ name: 'slug', type: 'slug', title: 'Slug', options: { source: 'title' }, validation: (Rule) => Rule.required() }),
    defineField({ name: 'description', type: 'text', title: 'Description', rows: 2 }),
  ],
});
```

**Step 5: Create blogPost schema**

Create `sanity/schemas/blogPost.ts`:

```typescript
import { defineType, defineField } from 'sanity';

export const blogPost = defineType({
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', title: 'Title', validation: (Rule) => Rule.required() }),
    defineField({ name: 'slug', type: 'slug', title: 'Slug', options: { source: 'title' }, validation: (Rule) => Rule.required() }),
    defineField({ name: 'category', type: 'reference', title: 'Category', to: [{ type: 'blogCategory' }] }),
    defineField({ name: 'author', type: 'reference', title: 'Author', to: [{ type: 'teamMember' }] }),
    defineField({ name: 'publishedAt', type: 'datetime', title: 'Published At' }),
    defineField({ name: 'featuredImage', type: 'image', title: 'Featured Image', options: { hotspot: true } }),
    defineField({ name: 'excerpt', type: 'text', title: 'Excerpt', rows: 3 }),
    defineField({ name: 'content', type: 'array', title: 'Content', of: [
      { type: 'block' },
      { type: 'image', options: { hotspot: true } },
      { type: 'code' },
    ] }),
    defineField({ name: 'relatedPosts', type: 'array', title: 'Related Posts', of: [{ type: 'reference', to: [{ type: 'blogPost' }] }] }),
    defineField({ name: 'seoTitle', type: 'string', title: 'SEO Title' }),
    defineField({ name: 'seoDescription', type: 'text', title: 'SEO Description', rows: 2 }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'category.title', media: 'featuredImage' },
  },
  orderings: [
    { title: 'Published Date, New', name: 'publishedAtDesc', by: [{ field: 'publishedAt', direction: 'desc' }] },
  ],
});
```

**Step 6: Create testimonial schema**

Create `sanity/schemas/testimonial.ts`:

```typescript
import { defineType, defineField } from 'sanity';

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({ name: 'quote', type: 'text', title: 'Quote', rows: 4, validation: (Rule) => Rule.required() }),
    defineField({ name: 'authorName', type: 'string', title: 'Author Name', validation: (Rule) => Rule.required() }),
    defineField({ name: 'authorRole', type: 'string', title: 'Author Role' }),
    defineField({ name: 'company', type: 'string', title: 'Company' }),
    defineField({ name: 'companyLogo', type: 'image', title: 'Company Logo' }),
    defineField({ name: 'authorPhoto', type: 'image', title: 'Author Photo', options: { hotspot: true } }),
    defineField({ name: 'featured', type: 'boolean', title: 'Featured on Homepage', initialValue: false }),
  ],
  preview: {
    select: { title: 'authorName', subtitle: 'company' },
  },
});
```

**Step 7: Create teamMember schema**

Create `sanity/schemas/teamMember.ts`:

```typescript
import { defineType, defineField } from 'sanity';

export const teamMember = defineType({
  name: 'teamMember',
  title: 'Team Member',
  type: 'document',
  fields: [
    defineField({ name: 'name', type: 'string', title: 'Name', validation: (Rule) => Rule.required() }),
    defineField({ name: 'role', type: 'string', title: 'Role' }),
    defineField({ name: 'photo', type: 'image', title: 'Photo', options: { hotspot: true } }),
    defineField({ name: 'bio', type: 'text', title: 'Bio', rows: 3 }),
    defineField({ name: 'linkedin', type: 'url', title: 'LinkedIn URL' }),
    defineField({ name: 'twitter', type: 'url', title: 'Twitter URL' }),
    defineField({ name: 'visible', type: 'boolean', title: 'Visible on Site', initialValue: false }),
    defineField({ name: 'order', type: 'number', title: 'Display Order' }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'role', media: 'photo' },
  },
});
```

**Step 8: Create jobListing schema**

Create `sanity/schemas/jobListing.ts`:

```typescript
import { defineType, defineField } from 'sanity';

export const jobListing = defineType({
  name: 'jobListing',
  title: 'Job Listing',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', title: 'Job Title', validation: (Rule) => Rule.required() }),
    defineField({ name: 'slug', type: 'slug', title: 'Slug', options: { source: 'title' }, validation: (Rule) => Rule.required() }),
    defineField({
      name: 'type',
      type: 'string',
      title: 'Employment Type',
      options: { list: ['Full-time', 'Part-time', 'Contract', 'Remote'] },
    }),
    defineField({ name: 'location', type: 'string', title: 'Location' }),
    defineField({ name: 'department', type: 'string', title: 'Department' }),
    defineField({ name: 'description', type: 'array', title: 'Description', of: [{ type: 'block' }] }),
    defineField({ name: 'requirements', type: 'array', title: 'Requirements', of: [{ type: 'string' }] }),
    defineField({ name: 'applicationUrl', type: 'url', title: 'Application URL' }),
    defineField({ name: 'active', type: 'boolean', title: 'Active', initialValue: true }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'type' },
  },
});
```

**Step 9: Create siteSettings schema (singleton)**

Create `sanity/schemas/siteSettings.ts`:

```typescript
import { defineType, defineField } from 'sanity';

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'siteName', type: 'string', title: 'Site Name', initialValue: 'KP Infotech' }),
    defineField({ name: 'siteTagline', type: 'string', title: 'Site Tagline' }),
    defineField({ name: 'logo', type: 'image', title: 'Logo' }),
    defineField({ name: 'logoLight', type: 'image', title: 'Logo (Light Version)' }),
    defineField({ name: 'contactEmail', type: 'string', title: 'Contact Email' }),
    defineField({ name: 'contactPhone', type: 'string', title: 'Contact Phone' }),
    defineField({ name: 'address', type: 'text', title: 'Address', rows: 3 }),
    defineField({
      name: 'socialLinks',
      type: 'object',
      title: 'Social Links',
      fields: [
        defineField({ name: 'linkedin', type: 'url', title: 'LinkedIn' }),
        defineField({ name: 'twitter', type: 'url', title: 'Twitter' }),
        defineField({ name: 'instagram', type: 'url', title: 'Instagram' }),
        defineField({ name: 'dribbble', type: 'url', title: 'Dribbble' }),
      ],
    }),
    defineField({ name: 'stats', type: 'array', title: 'Homepage Stats', of: [{ type: 'statItem' }] }),
    defineField({ name: 'footerText', type: 'text', title: 'Footer Description', rows: 2 }),
    defineField({ name: 'defaultSeoTitle', type: 'string', title: 'Default SEO Title' }),
    defineField({ name: 'defaultSeoDescription', type: 'text', title: 'Default SEO Description', rows: 2 }),
    defineField({ name: 'defaultOgImage', type: 'image', title: 'Default OG Image' }),
  ],
  preview: {
    prepare() {
      return { title: 'Site Settings' };
    },
  },
});
```

**Step 10: Commit document schemas**

```bash
git add sanity/schemas/
git commit -m "feat: add all Sanity document schemas"
```

---

## Task 7: Create Sanity Object Schemas

**Files:**
- Create: `sanity/schemas/objects/processStep.ts`
- Create: `sanity/schemas/objects/faqItem.ts`
- Create: `sanity/schemas/objects/resultMetric.ts`
- Create: `sanity/schemas/objects/statItem.ts`
- Modify: `sanity/schema.ts`

**Step 1: Create processStep object**

Create `sanity/schemas/objects/processStep.ts`:

```typescript
import { defineType, defineField } from 'sanity';

export const processStep = defineType({
  name: 'processStep',
  title: 'Process Step',
  type: 'object',
  fields: [
    defineField({ name: 'number', type: 'string', title: 'Step Number' }),
    defineField({ name: 'title', type: 'string', title: 'Title' }),
    defineField({ name: 'description', type: 'text', title: 'Description', rows: 2 }),
  ],
  preview: {
    select: { title: 'title', number: 'number' },
    prepare({ title, number }) {
      return { title: `${number}. ${title}` };
    },
  },
});
```

**Step 2: Create faqItem object**

Create `sanity/schemas/objects/faqItem.ts`:

```typescript
import { defineType, defineField } from 'sanity';

export const faqItem = defineType({
  name: 'faqItem',
  title: 'FAQ Item',
  type: 'object',
  fields: [
    defineField({ name: 'question', type: 'string', title: 'Question' }),
    defineField({ name: 'answer', type: 'array', title: 'Answer', of: [{ type: 'block' }] }),
  ],
  preview: {
    select: { title: 'question' },
  },
});
```

**Step 3: Create resultMetric object**

Create `sanity/schemas/objects/resultMetric.ts`:

```typescript
import { defineType, defineField } from 'sanity';

export const resultMetric = defineType({
  name: 'resultMetric',
  title: 'Result Metric',
  type: 'object',
  fields: [
    defineField({ name: 'value', type: 'string', title: 'Value', description: 'e.g., "70%"' }),
    defineField({ name: 'label', type: 'string', title: 'Label', description: 'e.g., "Cost Reduction"' }),
  ],
  preview: {
    select: { value: 'value', label: 'label' },
    prepare({ value, label }) {
      return { title: `${value} — ${label}` };
    },
  },
});
```

**Step 4: Create statItem object**

Create `sanity/schemas/objects/statItem.ts`:

```typescript
import { defineType, defineField } from 'sanity';

export const statItem = defineType({
  name: 'statItem',
  title: 'Stat Item',
  type: 'object',
  fields: [
    defineField({ name: 'number', type: 'string', title: 'Number', description: 'e.g., "150+"' }),
    defineField({ name: 'label', type: 'string', title: 'Label' }),
  ],
  preview: {
    select: { number: 'number', label: 'label' },
    prepare({ number, label }) {
      return { title: `${number} — ${label}` };
    },
  },
});
```

**Step 5: Update schema.ts to include all schemas**

Replace contents of `sanity/schema.ts`:

```typescript
import { type SchemaTypeDefinition } from 'sanity';

// Document schemas
import { service } from './schemas/service';
import { industry } from './schemas/industry';
import { caseStudy } from './schemas/caseStudy';
import { blogPost } from './schemas/blogPost';
import { blogCategory } from './schemas/blogCategory';
import { testimonial } from './schemas/testimonial';
import { teamMember } from './schemas/teamMember';
import { jobListing } from './schemas/jobListing';
import { siteSettings } from './schemas/siteSettings';

// Object schemas
import { processStep } from './schemas/objects/processStep';
import { faqItem } from './schemas/objects/faqItem';
import { resultMetric } from './schemas/objects/resultMetric';
import { statItem } from './schemas/objects/statItem';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Documents
    service,
    industry,
    caseStudy,
    blogPost,
    blogCategory,
    testimonial,
    teamMember,
    jobListing,
    siteSettings,
    // Objects
    processStep,
    faqItem,
    resultMetric,
    statItem,
  ],
};
```

**Step 6: Verify all schemas load in Studio**

Run:
```bash
npm run dev
```

Navigate to `http://localhost:4321/studio`

Expected: All 9 document types visible in sidebar. Can create new documents of each type.

**Step 7: Commit**

```bash
git add sanity/
git commit -m "feat: add object schemas and wire up all Sanity schemas"
```

---

## Task 8: Create Sanity Client and Helpers

**Files:**
- Create: `src/lib/sanity.ts`
- Create: `src/lib/queries.ts`

**Step 1: Create Sanity client**

Create `src/lib/sanity.ts`:

```typescript
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

export const client = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

export async function sanityFetch<T>(query: string, params = {}): Promise<T> {
  return client.fetch<T>(query, params);
}
```

**Step 2: Create initial queries**

Create `src/lib/queries.ts`:

```typescript
import { sanityFetch } from './sanity';

// Site Settings
export async function getSiteSettings() {
  return sanityFetch(`
    *[_type == "siteSettings"][0] {
      siteName,
      siteTagline,
      logo,
      logoLight,
      contactEmail,
      contactPhone,
      address,
      socialLinks,
      stats,
      footerText,
      defaultSeoTitle,
      defaultSeoDescription,
      defaultOgImage
    }
  `);
}

// Services
export async function getAllServices() {
  return sanityFetch(`
    *[_type == "service"] | order(order asc) {
      _id,
      title,
      slug,
      tagline,
      excerpt,
      icon,
      heroImage
    }
  `);
}

// Industries
export async function getAllIndustries() {
  return sanityFetch(`
    *[_type == "industry"] | order(order asc) {
      _id,
      title,
      slug,
      tagline,
      excerpt,
      icon,
      heroImage
    }
  `);
}

// Case Studies
export async function getFeaturedCaseStudies() {
  return sanityFetch(`
    *[_type == "caseStudy" && featured == true] | order(_createdAt desc)[0...4] {
      _id,
      title,
      slug,
      client,
      year,
      thumbnailImage,
      excerpt,
      services[]->{ title, slug }
    }
  `);
}

// Testimonials
export async function getFeaturedTestimonial() {
  return sanityFetch(`
    *[_type == "testimonial" && featured == true][0] {
      quote,
      authorName,
      authorRole,
      company,
      companyLogo,
      authorPhoto
    }
  `);
}
```

**Step 3: Commit**

```bash
git add src/lib/
git commit -m "feat: add Sanity client and initial GROQ queries"
```

---

## Task 9: Create SEO Component

**Files:**
- Create: `src/components/SEO.astro`

**Step 1: Create SEO component**

Create `src/components/SEO.astro`:

```astro
---
import { getSiteSettings } from '../lib/queries';
import { urlFor } from '../lib/sanity';

interface Props {
  title?: string;
  description?: string;
  image?: any;
  canonicalUrl?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  noindex?: boolean;
}

const settings = await getSiteSettings();

const {
  title,
  description = settings?.defaultSeoDescription || '',
  image = settings?.defaultOgImage,
  canonicalUrl = Astro.url.href,
  type = 'website',
  publishedTime,
  modifiedTime,
  author,
  noindex = false,
} = Astro.props;

const siteName = settings?.siteName || 'KP Infotech';
const fullTitle = title ? `${title} — ${siteName}` : settings?.defaultSeoTitle || siteName;
const ogImage = image ? urlFor(image).width(1200).height(630).url() : '';
---

<!-- Primary Meta Tags -->
<title>{fullTitle}</title>
<meta name="title" content={fullTitle} />
<meta name="description" content={description} />
<link rel="canonical" href={canonicalUrl} />

{noindex && <meta name="robots" content="noindex, nofollow" />}

<!-- Open Graph / Facebook -->
<meta property="og:type" content={type} />
<meta property="og:url" content={canonicalUrl} />
<meta property="og:title" content={fullTitle} />
<meta property="og:description" content={description} />
<meta property="og:site_name" content={siteName} />
{ogImage && <meta property="og:image" content={ogImage} />}

{type === 'article' && publishedTime && (
  <meta property="article:published_time" content={publishedTime} />
)}
{type === 'article' && modifiedTime && (
  <meta property="article:modified_time" content={modifiedTime} />
)}
{type === 'article' && author && (
  <meta property="article:author" content={author} />
)}

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:url" content={canonicalUrl} />
<meta name="twitter:title" content={fullTitle} />
<meta name="twitter:description" content={description} />
{ogImage && <meta name="twitter:image" content={ogImage} />}

<!-- JSON-LD slot for page-specific schema -->
<slot />
```

**Step 2: Commit**

```bash
git add src/components/SEO.astro
git commit -m "feat: add SEO component with OG tags and JSON-LD slot"
```

---

## Task 10: Create Base Layout

**Files:**
- Create: `src/layouts/Layout.astro`

**Step 1: Create Layout component**

Create `src/layouts/Layout.astro`:

```astro
---
import '../styles/global.css';
import SEO from '../components/SEO.astro';

interface Props {
  title?: string;
  description?: string;
  image?: any;
  canonicalUrl?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  noindex?: boolean;
}

const props = Astro.props;
---

<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <SEO {...props} />
  </head>
  <body class="bg-bg-primary text-text-primary font-body antialiased">
    <!-- Navigation will be added here -->

    <main>
      <slot />
    </main>

    <!-- Footer will be added here -->
  </body>
</html>
```

**Step 2: Update index.astro to use Layout**

Replace contents of `src/pages/index.astro`:

```astro
---
import Layout from '../layouts/Layout.astro';
---

<Layout title="UI/UX Design Consultancy">
  <div class="min-h-screen flex items-center justify-center px-6">
    <div class="text-center max-w-2xl">
      <span class="section-label">UI/UX Design Consultancy</span>
      <h1 class="font-display text-4xl md:text-6xl mt-6 text-text-primary leading-tight">
        We craft digital<br />experiences
      </h1>
      <p class="text-text-secondary text-lg mt-6 max-w-md mx-auto">
        Transforming ambitious ideas into exceptional digital products through strategic design and development.
      </p>
      <div class="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="/contact"
          class="inline-flex items-center justify-center gap-3 px-8 py-4 border border-accent text-text-primary text-xs tracking-widest uppercase hover:bg-accent hover:text-bg-primary transition-colors"
        >
          Start a Project
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
        <a
          href="/work"
          class="inline-flex items-center justify-center gap-2 text-text-secondary text-sm hover:text-accent transition-colors"
        >
          View our work
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</Layout>
```

**Step 3: Verify layout works**

Run:
```bash
npm run dev
```

Expected: Homepage shows with proper styling, SEO meta tags visible in view-source.

**Step 4: Commit**

```bash
git add src/layouts/Layout.astro src/pages/index.astro
git commit -m "feat: add base Layout with SEO integration"
```

---

## Task 11: Create Navigation Component

**Files:**
- Create: `src/components/Navigation.astro`
- Modify: `src/layouts/Layout.astro`

**Step 1: Create Navigation component**

Create `src/components/Navigation.astro`:

```astro
---
const navLinks = [
  { label: 'Work', href: '/work' },
  { label: 'Services', href: '/services' },
  { label: 'Industries', href: '/industries' },
  { label: 'About', href: '/about' },
  { label: 'Insights', href: '/insights' },
];
---

<header
  id="nav-header"
  class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
>
  <nav class="flex items-center justify-between px-6 md:px-12 lg:px-24 py-7">
    <!-- Logo -->
    <a href="/" class="text-text-primary font-display text-xl tracking-wide">
      KP Infotech
    </a>

    <!-- Desktop Navigation -->
    <div class="hidden md:flex items-center gap-12">
      {navLinks.map((link) => (
        <a
          href={link.href}
          class="nav-link text-xs font-body tracking-widest uppercase text-text-secondary hover:text-text-primary transition-colors relative"
        >
          {link.label}
        </a>
      ))}
    </div>

    <!-- CTA Button -->
    <a
      href="/contact"
      class="hidden md:inline-flex items-center gap-2 px-6 py-3 border border-accent text-text-primary text-xs tracking-widest uppercase hover:bg-accent hover:text-bg-primary transition-colors"
    >
      Contact
    </a>

    <!-- Mobile Menu Button -->
    <button
      id="mobile-menu-btn"
      class="md:hidden flex flex-col gap-1.5 p-2"
      aria-label="Toggle menu"
    >
      <span class="block w-6 h-px bg-text-primary transition-transform"></span>
      <span class="block w-6 h-px bg-text-primary transition-opacity"></span>
      <span class="block w-6 h-px bg-text-primary transition-transform"></span>
    </button>
  </nav>

  <!-- Mobile Menu -->
  <div
    id="mobile-menu"
    class="fixed inset-0 bg-bg-primary z-40 transform translate-x-full transition-transform duration-300 md:hidden"
  >
    <div class="flex flex-col items-center justify-center h-full gap-8">
      {navLinks.map((link) => (
        <a
          href={link.href}
          class="text-2xl font-display text-text-primary hover:text-accent transition-colors"
        >
          {link.label}
        </a>
      ))}
      <a
        href="/contact"
        class="mt-8 px-8 py-4 border border-accent text-text-primary text-sm tracking-widest uppercase"
      >
        Contact
      </a>
    </div>
  </div>
</header>

<script>
  // Scroll behavior - add background on scroll
  const header = document.getElementById('nav-header');

  function handleScroll() {
    if (window.scrollY > 50) {
      header?.classList.add('bg-bg-primary/90', 'backdrop-blur-lg', 'border-b', 'border-border');
      header?.classList.remove('py-7');
      header?.querySelector('nav')?.classList.add('py-5');
      header?.querySelector('nav')?.classList.remove('py-7');
    } else {
      header?.classList.remove('bg-bg-primary/90', 'backdrop-blur-lg', 'border-b', 'border-border');
      header?.querySelector('nav')?.classList.remove('py-5');
      header?.querySelector('nav')?.classList.add('py-7');
    }
  }

  window.addEventListener('scroll', handleScroll);
  handleScroll();

  // Mobile menu toggle
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuSpans = menuBtn?.querySelectorAll('span');
  let isOpen = false;

  menuBtn?.addEventListener('click', () => {
    isOpen = !isOpen;

    if (isOpen) {
      mobileMenu?.classList.remove('translate-x-full');
      document.body.style.overflow = 'hidden';
      // Animate hamburger to X
      if (menuSpans) {
        menuSpans[0].classList.add('rotate-45', 'translate-y-2');
        menuSpans[1].classList.add('opacity-0');
        menuSpans[2].classList.add('-rotate-45', '-translate-y-2');
      }
    } else {
      mobileMenu?.classList.add('translate-x-full');
      document.body.style.overflow = '';
      // Reset hamburger
      if (menuSpans) {
        menuSpans[0].classList.remove('rotate-45', 'translate-y-2');
        menuSpans[1].classList.remove('opacity-0');
        menuSpans[2].classList.remove('-rotate-45', '-translate-y-2');
      }
    }
  });

  // Close menu on link click
  mobileMenu?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu?.classList.add('translate-x-full');
      document.body.style.overflow = '';
      isOpen = false;
    });
  });
</script>

<style>
  .nav-link::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 1px;
    background: var(--accent);
    transition: width 0.3s ease;
  }

  .nav-link:hover::after {
    width: 100%;
  }
</style>
```

**Step 2: Add Navigation to Layout**

Update `src/layouts/Layout.astro`:

```astro
---
import '../styles/global.css';
import SEO from '../components/SEO.astro';
import Navigation from '../components/Navigation.astro';

interface Props {
  title?: string;
  description?: string;
  image?: any;
  canonicalUrl?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  noindex?: boolean;
}

const props = Astro.props;
---

<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <SEO {...props} />
  </head>
  <body class="bg-bg-primary text-text-primary font-body antialiased">
    <Navigation />

    <main>
      <slot />
    </main>

    <!-- Footer will be added here -->
  </body>
</html>
```

**Step 3: Verify navigation works**

Run:
```bash
npm run dev
```

Expected:
- Navigation visible at top
- Scroll down - background appears with blur
- On mobile viewport - hamburger shows, click opens full-screen menu

**Step 4: Commit**

```bash
git add src/components/Navigation.astro src/layouts/Layout.astro
git commit -m "feat: add Navigation component with mobile menu"
```

---

## Task 12: Create Footer Component

**Files:**
- Create: `src/components/Footer.astro`
- Modify: `src/layouts/Layout.astro`

**Step 1: Create Footer component**

Create `src/components/Footer.astro`:

```astro
---
import { getSiteSettings } from '../lib/queries';

const settings = await getSiteSettings();

const quickLinks = [
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Insights', href: '/insights' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
];

const serviceLinks = [
  { label: 'UI/UX Design', href: '/services/ui-ux-design' },
  { label: 'Web Development', href: '/services/web-development' },
  { label: 'Mobile Apps', href: '/services/mobile-apps' },
  { label: 'ERP Solutions', href: '/services/erp-solutions' },
  { label: 'Digital Marketing', href: '/services/digital-marketing' },
];

const currentYear = new Date().getFullYear();
---

<footer class="bg-bg-secondary border-t border-border">
  <div class="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-24">
    <!-- Main Footer Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
      <!-- About Column -->
      <div class="lg:col-span-1">
        <a href="/" class="text-text-primary font-display text-xl tracking-wide">
          KP Infotech
        </a>
        <p class="mt-4 text-text-secondary text-sm leading-relaxed">
          {settings?.footerText || 'We craft digital experiences that transform ambitious ideas into exceptional products.'}
        </p>

        <!-- Social Links -->
        <div class="flex gap-4 mt-6">
          {settings?.socialLinks?.linkedin && (
            <a
              href={settings.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              class="text-text-secondary hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          )}
          {settings?.socialLinks?.twitter && (
            <a
              href={settings.socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              class="text-text-secondary hover:text-accent transition-colors"
              aria-label="Twitter"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          )}
          {settings?.socialLinks?.instagram && (
            <a
              href={settings.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              class="text-text-secondary hover:text-accent transition-colors"
              aria-label="Instagram"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          )}
          {settings?.socialLinks?.dribbble && (
            <a
              href={settings.socialLinks.dribbble}
              target="_blank"
              rel="noopener noreferrer"
              class="text-text-secondary hover:text-accent transition-colors"
              aria-label="Dribbble"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.628 0-12 5.373-12 12s5.372 12 12 12 12-5.373 12-12-5.372-12-12-12zm9.885 11.441c-2.575-.422-4.943-.445-7.103-.073-.244-.563-.497-1.125-.767-1.68 2.31-1 4.165-2.358 5.548-4.082 1.35 1.594 2.197 3.619 2.322 5.835zm-3.842-7.282c-1.205 1.554-2.868 2.783-4.986 3.68-1.016-1.861-2.178-3.676-3.488-5.438.779-.197 1.591-.314 2.431-.314 2.275 0 4.368.779 6.043 2.072zm-10.516-.993c1.331 1.742 2.511 3.538 3.537 5.381-2.43.715-5.331 1.082-8.684 1.105.692-2.835 2.601-5.193 5.147-6.486zm-5.44 8.834l.013-.256c3.849-.005 7.169-.448 9.95-1.322.233.475.456.952.67 1.432-3.38 1.057-6.165 3.222-8.337 6.48-1.432-1.719-2.296-3.927-2.296-6.334zm3.829 7.81c1.969-3.088 4.482-5.098 7.598-6.027.928 2.42 1.609 4.91 2.043 7.46-3.349 1.291-6.953.666-9.641-1.433zm11.586.43c-.438-2.353-1.08-4.653-1.92-6.897 1.876-.265 3.94-.196 6.199.196-.437 2.786-2.028 5.192-4.279 6.701z"/>
              </svg>
            </a>
          )}
        </div>
      </div>

      <!-- Quick Links -->
      <div>
        <h4 class="text-text-primary text-xs tracking-widest uppercase mb-6">Quick Links</h4>
        <ul class="space-y-3">
          {quickLinks.map((link) => (
            <li>
              <a
                href={link.href}
                class="text-text-secondary text-sm hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <!-- Services -->
      <div>
        <h4 class="text-text-primary text-xs tracking-widest uppercase mb-6">Services</h4>
        <ul class="space-y-3">
          {serviceLinks.map((link) => (
            <li>
              <a
                href={link.href}
                class="text-text-secondary text-sm hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <!-- Contact Info -->
      <div>
        <h4 class="text-text-primary text-xs tracking-widest uppercase mb-6">Contact</h4>
        <ul class="space-y-3 text-text-secondary text-sm">
          {settings?.contactEmail && (
            <li>
              <a href={`mailto:${settings.contactEmail}`} class="hover:text-accent transition-colors">
                {settings.contactEmail}
              </a>
            </li>
          )}
          {settings?.contactPhone && (
            <li>
              <a href={`tel:${settings.contactPhone.replace(/\s/g, '')}`} class="hover:text-accent transition-colors">
                {settings.contactPhone}
              </a>
            </li>
          )}
          {settings?.address && (
            <li class="whitespace-pre-line">
              {settings.address}
            </li>
          )}
        </ul>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
      <p class="text-text-muted text-sm">
        &copy; {currentYear} KP Infotech. All rights reserved.
      </p>
      <div class="flex gap-6">
        <a href="/privacy-policy" class="text-text-muted text-sm hover:text-text-secondary transition-colors">
          Privacy Policy
        </a>
        <a href="/terms-of-service" class="text-text-muted text-sm hover:text-text-secondary transition-colors">
          Terms of Service
        </a>
      </div>
    </div>
  </div>
</footer>
```

**Step 2: Add Footer to Layout**

Update `src/layouts/Layout.astro`:

```astro
---
import '../styles/global.css';
import SEO from '../components/SEO.astro';
import Navigation from '../components/Navigation.astro';
import Footer from '../components/Footer.astro';

interface Props {
  title?: string;
  description?: string;
  image?: any;
  canonicalUrl?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  noindex?: boolean;
}

const props = Astro.props;
---

<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <SEO {...props} />
  </head>
  <body class="bg-bg-primary text-text-primary font-body antialiased">
    <Navigation />

    <main>
      <slot />
    </main>

    <Footer />
  </body>
</html>
```

**Step 3: Verify footer works**

Run:
```bash
npm run dev
```

Expected: Footer visible at bottom with 4-column layout on desktop, stacked on mobile. Links are visible (social links will be empty until siteSettings is populated in Sanity).

**Step 4: Commit**

```bash
git add src/components/Footer.astro src/layouts/Layout.astro
git commit -m "feat: add Footer component with dynamic content from Sanity"
```

---

## Task 13: Create Favicon and Static Assets

**Files:**
- Create: `public/favicon.svg`
- Create: `public/robots.txt`

**Step 1: Create favicon**

Create `public/favicon.svg`:

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <rect width="32" height="32" fill="#0a0a0a"/>
  <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle" fill="#c9a87c" font-family="serif" font-size="18" font-weight="500">K</text>
</svg>
```

**Step 2: Create robots.txt**

Create `public/robots.txt`:

```
User-agent: *
Allow: /

Sitemap: https://kpinfo.tech/sitemap-index.xml
```

**Step 3: Commit**

```bash
git add public/
git commit -m "feat: add favicon and robots.txt"
```

---

## Task 14: Deploy to Vercel

**Step 1: Push to remote**

```bash
git push origin main
```

**Step 2: Connect to Vercel**

1. Go to vercel.com and sign in
2. Click "Add New Project"
3. Import your GitHub repository
4. Configure environment variables:
   - `PUBLIC_SANITY_PROJECT_ID` = (your project ID from .env.local)
   - `PUBLIC_SANITY_DATASET` = `production`
5. Click Deploy

**Step 3: Verify deployment**

Expected:
- Build succeeds
- Site accessible at Vercel preview URL
- `/studio` route opens Sanity Studio
- Navigation and footer render correctly

**Step 4: Test Sanity Studio in production**

Navigate to `https://your-vercel-url.vercel.app/studio`

Expected: Sanity Studio loads, can log in, all document types visible.

---

## Task 15: Seed Initial Content in Sanity

**Step 1: Create Site Settings**

In Sanity Studio:
1. Click "Site Settings" in sidebar
2. Create new document with:
   - Site Name: "KP Infotech"
   - Site Tagline: "UI/UX Design Consultancy"
   - Contact Email: "info@kpinfo.tech"
   - Contact Phone: "+91 86182 79004"
   - Address: "Ahmedabad, Gujarat, India"
   - Footer Text: "We craft digital experiences that transform ambitious ideas into exceptional products."
   - Default SEO Title: "KP Infotech — Design and Technology Studio"
   - Default SEO Description: "Premium Design and Technology studio helping startups and businesses create exceptional digital products."
3. Publish

**Step 2: Verify footer updates**

Trigger a rebuild (push empty commit or use Vercel dashboard).

```bash
git commit --allow-empty -m "chore: trigger rebuild for Sanity content"
git push origin main
```

Expected: Footer now shows contact info from Sanity.

---

## Phase 1 Complete Checklist

- [ ] Astro project initialized with TypeScript
- [ ] Tailwind configured with design system tokens
- [ ] Fonts (Playfair Display, Outfit) loading correctly
- [ ] Sanity Studio accessible at `/studio`
- [ ] All 9 document schemas created
- [ ] All 4 object schemas created
- [ ] Sanity client and queries set up
- [ ] SEO component with OG tags
- [ ] Layout component wrapping pages
- [ ] Navigation with mobile menu
- [ ] Footer with dynamic Sanity content
- [ ] Deployed to Vercel
- [ ] Site Settings populated in Sanity

---

**Next Phase:** Phase 2 — Core Pages (Homepage, About, Contact, 404)
