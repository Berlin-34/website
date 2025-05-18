---
trigger: always_on
---

# React Usage Rules

- Use React **only when interactivity is required** (e.g. newsletter signup, modals, carousels).
- Always hydrate React components using `client:load`, `client:visible`, or `client:idle`.
- Prefer `client:idle` unless instant interaction is required.
- Name React components using **PascalCase** and place them in `src/components/react/`.

# UI Components

- Use **shadcn/ui** components for modals, buttons, forms, and interactive elements.
- Wrap shadcn components with your own for better control and styling consistency.
