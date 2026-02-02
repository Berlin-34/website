import { defineType, defineField } from 'sanity';

export const service = defineType({
  name: 'service',
  title: 'Service',
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
      description: 'Lucide icon name, e.g., "pen-tool", "code", "smartphone". See lucide.dev/icons',
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
    defineField({ name: 'content', type: 'array', title: 'Content', of: [{ type: 'block' }, { type: 'image', options: { hotspot: true } }] }),
    defineField({ name: 'process', type: 'array', title: 'Process Steps', of: [{ type: 'processStep' }] }),
    defineField({ name: 'technologies', type: 'array', title: 'Technologies', of: [{ type: 'string' }] }),
    defineField({ name: 'faqs', type: 'array', title: 'FAQs', of: [{ type: 'faqItem' }] }),
    defineField({ name: 'relatedWork', type: 'array', title: 'Related Work', of: [{ type: 'reference', to: [{ type: 'caseStudy' }] }] }),
    defineField({ name: 'seoTitle', type: 'string', title: 'SEO Title' }),
    defineField({ name: 'seoDescription', type: 'text', title: 'SEO Description', rows: 2 }),
    defineField({ name: 'order', type: 'number', title: 'Display Order' }),
  ],
  preview: {
    select: { title: 'title', media: 'heroImage' },
  },
});
