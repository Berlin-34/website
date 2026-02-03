# Homepage Design Exploration Brief

**Purpose:** Explore visual variations for each homepage section before implementation.

---

## Design System Reference

```css
/* Colors */
--bg-primary: #0a0a0a;
--bg-secondary: #0f0f0f;
--text-primary: #ffffff;
--text-secondary: #6b6b6b;
--accent: #c9a87c;
--border: #1a1a1a;

/* Fonts */
Display: Playfair Display (headlines)
Body: Outfit (text, buttons)
```

---

## Sections to Explore

### 1. Hero
- Full viewport intro section
- Content: Section label, H1 headline, description, 2 CTAs
- Explore: Layout (left-aligned vs centered), image treatment (side vs background vs none), typography scale

### 2. Services Marquee
- Auto-scrolling horizontal text
- Content: Service names separated by bullets/dashes
- Explore: Speed, size, opacity, with/without gradient fade edges

### 3. Featured Work (with empty state)
- Case study cards grid
- Content: Thumbnail, title, client, tags (empty state for now)
- Explore: Card layouts, hover effects, empty state messaging

### 4. Services Grid
- Numbered service cards
- Content: Number, title, description, link
- Explore: Grid columns, card styles, numbering treatment

### 5. Stats
- 4 key metrics display
- Content: Large numbers with labels
- Explore: Layout arrangements, number styling, animations (noted for later)

### 6. Industries
- Industry cards/list
- Content: Icon, title, brief description
- Explore: Card vs list vs horizontal scroll

### 7. Testimonial
- Featured client quote
- Content: Quote, name, role, company
- Explore: Quote styling, layout, photo inclusion

### 8. CTA Section
- Final conversion prompt
- Content: Headline, button
- Explore: Background treatment, sizing, urgency level

---

## Output Expected

For each section, provide 2-3 HTML/CSS variations that can be toggled in a single interactive playground file.

User will select preferred variations, then return to implementation session.
