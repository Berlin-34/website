import { defineType, defineField } from 'sanity';

export const statItem = defineType({
  name: 'statItem',
  title: 'Stat Item',
  type: 'object',
  fields: [
    defineField({
      name: 'value',
      title: 'Value',
      type: 'string',
      description: 'e.g., "150+", "98%", "10M+"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      description: 'e.g., "Projects Delivered", "Client Satisfaction"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'suffix',
      title: 'Suffix',
      type: 'string',
      description: 'Optional suffix like "+", "%", etc.',
    }),
  ],
  preview: {
    select: {
      value: 'value',
      label: 'label',
    },
    prepare({ value, label }) {
      return {
        title: `${value} - ${label}`,
      };
    },
  },
});
