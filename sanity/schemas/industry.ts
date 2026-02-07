import { defineType, defineField } from 'sanity';

export const industry = defineType({
  name: 'industry',
  title: 'Industry',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', title: 'Title', validation: (Rule) => Rule.required() }),
    defineField({ name: 'slug', type: 'slug', title: 'Slug', options: { source: 'title' }, validation: (Rule) => Rule.required() }),
    defineField({ name: 'tagline', type: 'string', title: 'Tagline' }),
    defineField({ name: 'excerpt', type: 'text', title: 'Excerpt', rows: 3 }),
    defineField({
      name: 'iconName',
      type: 'string',
      title: 'Icon Name (Lucide)',
      description: 'Lucide icon name, e.g., "heart", "shopping-cart", "factory". See lucide.dev/icons',
    }),
    defineField({
      name: 'iconCustom',
      type: 'image',
      title: 'Custom Icon (SVG)',
      description: 'Upload a custom SVG icon (overrides Lucide icon if both are set)',
      options: {
        accept: 'image/svg+xml,image/png,image/webp',
      },
    }),
    defineField({ name: 'heroImage', type: 'image', title: 'Hero Image', options: { hotspot: true } }),
    defineField({ name: 'challenges', type: 'array', title: 'Industry Challenges', of: [{ type: 'richText' }] }),
    defineField({ name: 'solutions', type: 'array', title: 'Our Solutions', of: [{ type: 'richText' }] }),
    defineField({ name: 'relatedWork', type: 'array', title: 'Related Work', of: [{ type: 'reference', to: [{ type: 'caseStudy' }] }] }),
    defineField({ name: 'relatedServices', type: 'array', title: 'Related Services', of: [{ type: 'reference', to: [{ type: 'service' }] }] }),
    defineField({ name: 'seoTitle', type: 'string', title: 'SEO Title' }),
    defineField({ name: 'seoDescription', type: 'text', title: 'SEO Description', rows: 2 }),
    defineField({ name: 'order', type: 'number', title: 'Display Order' }),
  ],
  preview: {
    select: { title: 'title', iconCustom: 'iconCustom', heroImage: 'heroImage' },
    prepare({ title, iconCustom, heroImage }) {
      return {
        title,
        media: iconCustom || heroImage,
      };
    },
  },
});
