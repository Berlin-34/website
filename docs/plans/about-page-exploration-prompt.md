# Prompt for About Page Design Exploration

Copy everything below this line and paste into a new Claude session:

---

Create an interactive HTML playground for exploring About page section designs.

## Context

KP Infotech (kpinfo.tech) - premium digital product studio based in Ahmedabad, India. Founded by Poojan & Krupa. Dark editorial design style.

## Design System

```css
:root {
  --bg-primary: #0a0a0a;
  --bg-secondary: #0f0f0f;
  --bg-tertiary: #161616;
  --text-primary: #ffffff;
  --text-secondary: #6b6b6b;
  --text-muted: #3a3a3a;
  --accent: #c9a87c;
  --border: #1a1a1a;
  --border-light: #2a2a2a;
}

/* Fonts: Playfair Display (headlines), Outfit (body) */
/* Section labels: 11px uppercase, letter-spacing 4px, accent color with 40px line prefix */
```

## What I Need

Single HTML file (self-contained CSS/JS) that:
1. Shows 6 About page sections, one at a time
2. Each section has 2-3 visual variations to toggle between
3. Navigation to move between sections
4. Selection tracker to note preferred variations

## Sections to Create Variations For

### 1. Hero
- Content: Section label "About Us", H1 "Who We Are" or similar, intro paragraph about the company
- Variations: centered minimal, left-aligned with decorative element, split layout with image placeholder

### 2. Our Story
- Content: Founders journey narrative - started in Ahmedabad, grew from small team, focus on craft and quality
- Variations: timeline format, two-column narrative, single column with pull quotes

### 3. Values
- Content: 4 core values (e.g., Craft, Partnership, Innovation, Integrity) with short descriptions
- Variations: 2x2 grid, horizontal cards, vertical list with icons

### 4. Team (Hidden by Default)
- Content: Team member cards with photo placeholder, name, role
- Note: Will be hidden initially, but design the section
- Variations: grid layout, horizontal scroll, minimal list

### 5. Certifications/Partners
- Content: Odoo partner badge, any other certifications or partnerships
- Variations: logo grid, featured badge with description, subtle footer-style

### 6. CTA
- Content: "Ready to work together?" or similar, "Start a Project" button
- Variations: minimal centered, bold full-width, with background accent pattern

## Requirements

- Use Google Fonts: Playfair Display (500 weight) and Outfit (300, 400 weights)
- Mobile-responsive preview
- Clear labels (A, B, C) for each variation
- Checkboxes or notes section to track selections

Create as a single HTML file I can open in browser.
