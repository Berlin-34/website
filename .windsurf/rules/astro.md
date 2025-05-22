---
trigger: manual
---

{
  "framework": "Astro",
  "packageManager": "bun",
  "language": "TypeScript",
  "integrations": ["@astrojs/react", "@astrojs/tailwind"],
  "env": {
    "SANITY_PROJECT_ID": "string",
    "SANITY_DATASET": "string",
    "SANITY_API_VERSION": "string"
  },
  "structure": "check ../../.windsurf/rules/project-structure.md"
  },
  "styling": {
    "cssFramework": "Tailwind CSS",
    "typography": "tailwind-typography"
  },
  "routing": {
    "dynamicRoutes": ["[slug].astro"]
  },
  "dataFetching": {
    "client": "@sanity/client",
    "queries": "GROQ"
  },
  "rendering": {
    "richText": "@portabletext/react"
  }
}