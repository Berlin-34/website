import { defineType, defineField } from 'sanity';

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({ name: 'quote', type: 'text', title: 'Quote', rows: 4, validation: (Rule) => Rule.required() }),
    defineField({ name: 'authorName', type: 'string', title: 'Author Name', validation: (Rule) => Rule.required() }),
    defineField({ name: 'authorRole', type: 'string', title: 'Author Role' }),
    defineField({ name: 'company', type: 'string', title: 'Company' }),
    defineField({ name: 'companyLogo', type: 'image', title: 'Company Logo' }),
    defineField({ name: 'authorPhoto', type: 'image', title: 'Author Photo', options: { hotspot: true } }),
    defineField({ name: 'featured', type: 'boolean', title: 'Featured on Homepage', initialValue: false }),
  ],
  preview: {
    select: { title: 'authorName', subtitle: 'company' },
  },
});
