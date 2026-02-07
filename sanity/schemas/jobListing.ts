import { defineType, defineField } from 'sanity';

export const jobListing = defineType({
  name: 'jobListing',
  title: 'Job Listing',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', title: 'Job Title', validation: (Rule) => Rule.required() }),
    defineField({ name: 'slug', type: 'slug', title: 'Slug', options: { source: 'title' }, validation: (Rule) => Rule.required() }),
    defineField({
      name: 'type',
      type: 'string',
      title: 'Employment Type',
      options: { list: ['Full-time', 'Part-time', 'Contract', 'Remote'] },
    }),
    defineField({ name: 'location', type: 'string', title: 'Location' }),
    defineField({ name: 'department', type: 'string', title: 'Department' }),
    defineField({ name: 'description', type: 'array', title: 'Description', of: [{ type: 'richText' }] }),
    defineField({ name: 'requirements', type: 'array', title: 'Requirements', of: [{ type: 'string' }] }),
    defineField({ name: 'applicationUrl', type: 'url', title: 'Application URL' }),
    defineField({ name: 'active', type: 'boolean', title: 'Active', initialValue: true }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'type' },
  },
});
