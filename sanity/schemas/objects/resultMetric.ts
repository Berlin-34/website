import { defineType, defineField } from 'sanity';

export const resultMetric = defineType({
  name: 'resultMetric',
  title: 'Result Metric',
  type: 'object',
  fields: [
    defineField({
      name: 'metric',
      title: 'Metric Value',
      type: 'string',
      description: 'e.g., "45%", "3x", "$2M"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      description: 'e.g., "Increase in Conversions", "Revenue Growth"',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      metric: 'metric',
      label: 'label',
    },
    prepare({ metric, label }) {
      return {
        title: `${metric} - ${label}`,
      };
    },
  },
});
