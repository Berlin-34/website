---
trigger: always_on
---

# Content Handling Rules

- Blog content is fetched from **WordPress REST API** at build time.
- Keep a fallback for when WP API fails (e.g. "Blog unavailable" component).
- Format blog dates using localized formatting (`toLocaleDateString` or dayjs).
- Summary/excerpt should be displayed on blog listing pages.
- Avoid inline scripts inside blog posts; sanitize if needed.

# Future Flexibility

- Consider migrating blog content to Markdown with a CMS like TinaCMS if moving away from WP.
