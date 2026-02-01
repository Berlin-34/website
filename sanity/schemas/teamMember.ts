import { defineType, defineField } from 'sanity';

export const teamMember = defineType({
  name: 'teamMember',
  title: 'Team Member',
  type: 'document',
  fields: [
    defineField({ name: 'name', type: 'string', title: 'Name', validation: (Rule) => Rule.required() }),
    defineField({ name: 'role', type: 'string', title: 'Role' }),
    defineField({ name: 'photo', type: 'image', title: 'Photo', options: { hotspot: true } }),
    defineField({ name: 'bio', type: 'text', title: 'Bio', rows: 3 }),
    defineField({ name: 'linkedin', type: 'url', title: 'LinkedIn URL' }),
    defineField({ name: 'twitter', type: 'url', title: 'Twitter URL' }),
    defineField({ name: 'visible', type: 'boolean', title: 'Visible on Site', initialValue: false }),
    defineField({ name: 'order', type: 'number', title: 'Display Order' }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'role', media: 'photo' },
  },
});
