import { defineType, defineField } from 'sanity';

export const blogCategory = defineType({
  name: 'blogCategory',
  title: 'Blog Category',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', title: 'Title', validation: (Rule) => Rule.required() }),
    defineField({ name: 'slug', type: 'slug', title: 'Slug', options: { source: 'title' }, validation: (Rule) => Rule.required() }),
    defineField({ name: 'description', type: 'text', title: 'Description', rows: 2 }),
  ],
});
