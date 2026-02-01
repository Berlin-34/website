import { defineType, defineField } from 'sanity';

export const caseStudy = defineType({
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', title: 'Project Title', validation: (Rule) => Rule.required() }),
    defineField({ name: 'slug', type: 'slug', title: 'Slug', options: { source: 'title' }, validation: (Rule) => Rule.required() }),
    defineField({ name: 'client', type: 'string', title: 'Client Name' }),
    defineField({ name: 'year', type: 'string', title: 'Year' }),
    defineField({ name: 'featured', type: 'boolean', title: 'Featured on Homepage', initialValue: false }),
    defineField({ name: 'heroImage', type: 'image', title: 'Hero Image', options: { hotspot: true } }),
    defineField({ name: 'thumbnailImage', type: 'image', title: 'Thumbnail Image', options: { hotspot: true } }),
    defineField({ name: 'excerpt', type: 'text', title: 'Excerpt', rows: 3 }),
    defineField({ name: 'challenge', type: 'array', title: 'Challenge', of: [{ type: 'block' }] }),
    defineField({ name: 'approach', type: 'array', title: 'Approach', of: [{ type: 'block' }] }),
    defineField({ name: 'content', type: 'array', title: 'Full Content', of: [{ type: 'block' }, { type: 'image', options: { hotspot: true } }] }),
    defineField({ name: 'results', type: 'array', title: 'Results', of: [{ type: 'resultMetric' }] }),
    defineField({ name: 'testimonial', type: 'reference', title: 'Testimonial', to: [{ type: 'testimonial' }] }),
    defineField({ name: 'services', type: 'array', title: 'Services', of: [{ type: 'reference', to: [{ type: 'service' }] }] }),
    defineField({ name: 'industries', type: 'array', title: 'Industries', of: [{ type: 'reference', to: [{ type: 'industry' }] }] }),
    defineField({ name: 'seoTitle', type: 'string', title: 'SEO Title' }),
    defineField({ name: 'seoDescription', type: 'text', title: 'SEO Description', rows: 2 }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'client', media: 'thumbnailImage' },
  },
});
