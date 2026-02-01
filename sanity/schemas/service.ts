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
    defineField({ name: 'icon', type: 'string', title: 'Icon Name', description: 'Icon identifier for the service' }),
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
