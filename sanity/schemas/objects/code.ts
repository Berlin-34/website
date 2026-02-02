import { defineType, defineField } from 'sanity';

export const code = defineType({
  name: 'code',
  title: 'Code Block',
  type: 'object',
  fields: [
    defineField({
      name: 'language',
      title: 'Language',
      type: 'string',
      options: {
        list: [
          { title: 'JavaScript', value: 'javascript' },
          { title: 'TypeScript', value: 'typescript' },
          { title: 'HTML', value: 'html' },
          { title: 'CSS', value: 'css' },
          { title: 'JSON', value: 'json' },
          { title: 'Bash', value: 'bash' },
          { title: 'Python', value: 'python' },
          { title: 'PHP', value: 'php' },
          { title: 'SQL', value: 'sql' },
          { title: 'GROQ', value: 'groq' },
          { title: 'Plain Text', value: 'text' },
        ],
      },
      initialValue: 'javascript',
    }),
    defineField({
      name: 'filename',
      title: 'Filename',
      type: 'string',
      description: 'Optional filename to display',
    }),
    defineField({
      name: 'code',
      title: 'Code',
      type: 'text',
      rows: 10,
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      language: 'language',
      filename: 'filename',
    },
    prepare({ language, filename }) {
      return {
        title: filename || 'Code Block',
        subtitle: language,
      };
    },
  },
});
