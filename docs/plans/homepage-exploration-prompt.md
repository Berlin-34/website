# Prompt for Homepage Design Exploration Session

Copy everything below this line and paste into a new Claude session:

---

I need you to create an interactive HTML playground for exploring homepage section designs.

## Context

I'm building a website for KP Infotech (kpinfo.tech) - a premium digital product studio. The design is dark editorial style.

## Design System

```css
:root {
  --bg-primary: #0a0a0a;
  --bg-secondary: #0f0f0f;
  --bg-tertiary: #161616;
  --text-primary: #ffffff;
  --text-secondary: #6b6b6b;
  --accent: #c9a87c;
  --border: #1a1a1a;
}

/* Fonts: Playfair Display for headlines, Outfit for body */
```

## What I Need

Create a single HTML file (self-contained with inline CSS/JS) that:

1. Shows 8 homepage sections, one at a time
2. Each section has 2-3 visual variations I can toggle between
3. Has navigation to move between sections
4. Has a "selection tracker" where I can note which variation I prefer

## Sections to Create Variations For

### 1. Hero
- Content: Label "Digital Product Studio", H1 "We craft digital experiences that drive growth", description text, "Start a Project" button, "View Our Work" link
- Create variations: left-aligned layout, centered layout, split with image placeholder

### 2. Services Marquee
- Content: "UI/UX Design • Web Development • Mobile Apps • ERP Solutions • Digital Marketing"
- Create variations: different sizes, speeds, with/without fade edges

### 3. Featured Work
- Content: Empty state (no case studies yet)
- Create variations: different empty state treatments

### 4. Services Grid
- Content: 5 numbered service cards with titles and short descriptions
- Create variations: different grid layouts, card styles

### 5. Stats
- Content: 4 stats (e.g., "150+" Projects, "50+" Clients, "8+" Years, "98%" Satisfaction)
- Create variations: different layouts and number styling

### 6. Industries
- Content: 6 industry cards (Healthcare, Retail, Manufacturing, Logistics, Finance, Startups)
- Create variations: grid vs horizontal scroll vs list

### 7. Testimonial
- Content: A quote with client name, role, company
- Create variations: different quote styling and layouts

### 8. CTA Section
- Content: "Ready to elevate your digital presence?" with "Start a Project" button
- Create variations: minimal vs bold vs with background accent

## Requirements

- Use Google Fonts links for Playfair Display and Outfit
- Make it mobile-responsive enough to preview on different screens
- Include clear labels for each variation (A, B, C)
- Add a simple way to track my selections (could be checkboxes or a notes section)

Create this as a single HTML file I can open in my browser.
