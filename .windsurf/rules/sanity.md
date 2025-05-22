---
trigger: always_on
---

{
  "framework": "Sanity",
  "packageManager": "npm",
  "language": "TypeScript",
  "structure": {
    "schemas": "schemas",
    "config": "sanity.config.ts"
  },
  "schemas": {
    "post": {
      "fields": ["title", "slug", "excerpt", "content", "publishedAt", "author"]
    },
    "author": {
      "fields": ["name", "email", "avatar"]
    }
  },
  "validation": {
    "title": "required",
    "slug": "required",
    "content": "required"
  },
  "plugins": ["deskTool"],
  "deployment": {
    "hosting": "Sanity Studio Hosting",
    "deployCommand": "sanity deploy"
  }
}