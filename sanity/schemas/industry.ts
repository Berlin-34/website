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
    defineField({ name: 'icon', type: 'string', title: 'Icon Name' }),
    defineField({ name: 'heroImage', type: 'image', title: 'Hero Image', options: { hotspot: true } }),
    defineField({ name: 'challenges', type: 'array', title: 'Industry Challenges', of: [{ type: 'block' }] }),
    defineField({ name: 'solutions', type: 'array', title: 'Our Solutions', of: [{ type: 'block' }] }),
    defineField({ name: 'relatedWork', type: 'array', title: 'Related Work', of: [{ type: 'reference', to: [{ type: 'caseStudy' }] }] }),
    defineField({ name: 'relatedServices', type: 'array', title: 'Related Services', of: [{ type: 'reference', to: [{ type: 'service' }] }] }),
    defineField({ name: 'seoTitle', type: 'string', title: 'SEO Title' }),
    defineField({ name: 'seoDescription', type: 'text', title: 'SEO Description', rows: 2 }),
    defineField({ name: 'order', type: 'number', title: 'Display Order' }),
  ],
  preview: {
    select: { title: 'title', media: 'heroImage' },
  },
});
