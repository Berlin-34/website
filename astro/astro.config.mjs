// @ts-check
import sitemap from '@astrojs/sitemap'
import sanityIntegration from '@sanity/astro'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'

import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    react(),
    sitemap(),
    sanityIntegration({
      projectId: '5o2htsvf',
      dataset: 'production',
      useCdn: import.meta.env.PROD, // false for development, true for production
    }),
  ],
  site: 'https://kpinfo.tech',
})
