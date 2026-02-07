import { defineType, defineField } from 'sanity';

export const challengeItem = defineType({
  name: 'challengeItem',
  title: 'Challenge Item',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
  ],
  preview: {
    select: { title: 'title' },
  },
});
