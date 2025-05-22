---
trigger: model_decision
description: only applies to astro
---

{
  "project": "kp-website",
  "structure": {
    "type": "monorepo",
    "packages": {
      "astro": {
        "type": "frontend",
        "language": "TypeScript",
        "packageManager": "bun",
        "framework": "Astro",
        "integrations": ["@astrojs/react", "@astrojs/tailwind"],
        "env": ".env",
        "src": "- All static content pages should use .astro components under src/pages/.
- Blog content should be rendered in src/pages/blog/ using dynamic routes.
- React components go in src/components/react/.
- Shared UI components should live in src/components/common/.
- Layouts like Navbar/Footer go in src/components/layout/.
- Fetch logic should be placed in src/lib/api/.
- Keep Tailwind and Shadcn-specific styling in their respective component files.
"
      },
      "studio": {
        "type": "cms",
        "language": "TypeScript",
        "packageManager": "npm",
        "framework": "Sanity",
        "env": ".env",
        "schemas": "schemas",
        "config": "sanity.config.ts"
      }
    }
  }
}