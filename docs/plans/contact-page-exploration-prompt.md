# Prompt for Contact Page Design Exploration

Copy everything below this line and paste into a new Claude session:

---

Create an interactive HTML playground for exploring Contact page section designs.

## Context

KP Infotech (kpinfo.tech) - premium digital product studio based in Ahmedabad, India. Dark editorial design style.

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
1. Shows 4 Contact page sections, one at a time
2. Each section has 2-3 visual variations to toggle between
3. Navigation to move between sections
4. Selection tracker to note preferred variations

## Sections to Create Variations For

### 1. Hero
- Content: Section label "Get In Touch", H1 "Let's Build Something Great", short intro text
- Variations: minimal centered, left-aligned with decorative accent, split with contact preview

### 2. Contact Form
- Content: Name, Email, Company (optional), Project Type dropdown, Budget Range dropdown, Message textarea, Submit button
- Variations: single column form, two-column layout, stepped/wizard style
- Note: Form should feel premium, not generic

### 3. Contact Information
- Content: Email (info@kpinfo.tech), Phone (+91 86182 79004), Address (Ahmedabad, Gujarat, India), Office hours
- Variations: sidebar alongside form, cards below form, minimal inline

### 4. Social Links & Map
- Content: LinkedIn, Twitter/X, Instagram links + optional map placeholder
- Variations: icon row with map, full-width map with overlay, no map (social only)

## Requirements

- Use Google Fonts: Playfair Display (500 weight) and Outfit (300, 400 weights)
- Form inputs should have dark styling matching the theme
- Mobile-responsive preview
- Clear labels (A, B, C) for each variation
- Checkboxes or notes section to track selections

Create as a single HTML file I can open in browser.
