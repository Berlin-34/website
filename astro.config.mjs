import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import react from '@astrojs/react';
import sanity from '@sanity/astro';

// Load environment variables - default to 'production' for Vercel builds
const env = loadEnv(
  process.env.NODE_ENV ?? 'production',
  process.cwd(),
  ''
);

const PUBLIC_SANITY_PROJECT_ID = env.PUBLIC_SANITY_PROJECT_ID;
const PUBLIC_SANITY_DATASET = env.PUBLIC_SANITY_DATASET || 'production';

// Validate required environment variables
if (!PUBLIC_SANITY_PROJECT_ID) {
  throw new Error(
    'PUBLIC_SANITY_PROJECT_ID is not defined. ' +
    'Ensure it is set in your .env file locally or in Vercel project settings for the Production environment.'
  );
}

export default defineConfig({
  site: 'https://kpinfo.tech',
  output: 'static',
  adapter: vercel(),
  integrations: [
    sitemap(),
    react(),
    sanity({
      projectId: PUBLIC_SANITY_PROJECT_ID,
      dataset: PUBLIC_SANITY_DATASET || 'production',
      useCdn: false,
      studioBasePath: '/studio',
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
