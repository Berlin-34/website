# Prompt for 404 Page Design Exploration

Copy everything below this line and paste into a new Claude session:

---

Create an interactive HTML playground for exploring 404 error page designs.

## Context

KP Infotech (kpinfo.tech) - premium digital product studio. Dark editorial design style. The 404 page should feel intentional and on-brand, not like an afterthought.

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
```

## What I Need

Single HTML file (self-contained CSS/JS) that:
1. Shows 4 different 404 page design variations
2. Toggle between variations
3. Selection tracker to note preferred design

## Variations to Create

### Variation A: Minimal Typography
- Large "404" in Playfair Display (accent color or muted)
- "Page not found" subheading
- Brief message: "The page you're looking for doesn't exist or has been moved."
- "Back to Home" button
- Clean, lots of whitespace

### Variation B: Editorial/Creative
- "404" integrated into a creative layout
- Witty or brand-appropriate message (e.g., "Looks like this page took a different path")
- Navigation hints: links to Home, Work, Services, Contact
- Subtle decorative element (line, shape)

### Variation C: Helpful Navigation
- Standard 404 message
- Search bar placeholder
- Quick links grid: Home, Services, Work, Insights, Contact
- "Or contact us if you need help"

### Variation D: Animated/Interactive
- Subtle animation on the "404" (CSS only, no heavy JS)
- Could be: fade in, slight float, letter spacing animation
- Otherwise minimal design
- Single CTA back to home

## Requirements

- Use Google Fonts: Playfair Display (500 weight) and Outfit (300, 400 weights)
- Full viewport height, vertically centered
- Mobile-responsive
- Should feel premium and intentional, not generic
- Clear labels (A, B, C, D) for each variation
- Checkboxes or notes section to track selection

Create as a single HTML file I can open in browser.
