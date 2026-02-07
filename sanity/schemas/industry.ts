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
    defineField({
      name: 'iconName',
      type: 'string',
      title: 'Icon Name (Lucide)',
      description: 'Lucide icon name, e.g., "heart", "shopping-cart", "factory". See lucide.dev/icons',
    }),
    defineField({
      name: 'iconCustom',
      type: 'image',
      title: 'Custom Icon (SVG)',
      description: 'Upload a custom SVG icon (overrides Lucide icon if both are set)',
      options: {
        accept: 'image/svg+xml,image/png,image/webp',
      },
    }),
    defineField({ name: 'heroImage', type: 'image', title: 'Hero Image', options: { hotspot: true } }),

    // Challenges section
    defineField({
      name: 'challengesHeading',
      type: 'string',
      title: 'Challenges Heading',
      description: 'Use *asterisks* for highlighted words',
      group: 'challenges',
    }),
    defineField({
      name: 'challengeQuote',
      type: 'text',
      title: 'Challenge Quote',
      description: 'Atmospheric quote displayed on the left side of the Tension Map',
      rows: 3,
      group: 'challenges',
    }),
    defineField({
      name: 'challenges',
      type: 'array',
      title: 'Industry Challenges',
      of: [{ type: 'challengeItem' }],
      group: 'challenges',
    }),

    // Solutions section
    defineField({
      name: 'solutionsHeading',
      type: 'string',
      title: 'Solutions Heading',
      description: 'Use *asterisks* for highlighted words',
      group: 'solutions',
    }),
    defineField({
      name: 'solutionStatement',
      type: 'text',
      title: 'Solution Statement',
      description: 'Central mission statement for the Orbit layout',
      rows: 3,
      group: 'solutions',
    }),
    defineField({
      name: 'solutions',
      type: 'array',
      title: 'Our Solutions',
      of: [{ type: 'solutionItem' }],
      group: 'solutions',
    }),

    // Related content
    defineField({
      name: 'servicesHeading',
      type: 'string',
      title: 'Services Heading',
      description: 'Use *asterisks* for highlighted words',
      group: 'related',
    }),
    defineField({
      name: 'workHeading',
      type: 'string',
      title: 'Work Heading',
      description: 'Use *asterisks* for highlighted words',
      group: 'related',
    }),
    defineField({ name: 'relatedWork', type: 'array', title: 'Related Work', of: [{ type: 'reference', to: [{ type: 'caseStudy' }] }], group: 'related' }),
    defineField({ name: 'relatedServices', type: 'array', title: 'Related Services', of: [{ type: 'reference', to: [{ type: 'service' }] }], group: 'related' }),

    // SEO
    defineField({ name: 'seoTitle', type: 'string', title: 'SEO Title', group: 'seo' }),
    defineField({ name: 'seoDescription', type: 'text', title: 'SEO Description', rows: 2, group: 'seo' }),
    defineField({ name: 'order', type: 'number', title: 'Display Order' }),
  ],
  groups: [
    { name: 'challenges', title: 'Challenges' },
    { name: 'solutions', title: 'Solutions' },
    { name: 'related', title: 'Related Content' },
    { name: 'seo', title: 'SEO' },
  ],
  preview: {
    select: { title: 'title', iconCustom: 'iconCustom', heroImage: 'heroImage' },
    prepare({ title, iconCustom, heroImage }) {
      return {
        title,
        media: iconCustom || heroImage,
      };
    },
  },
});
