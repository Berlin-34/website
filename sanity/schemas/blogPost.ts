import { defineType, defineField } from 'sanity';

export const blogPost = defineType({
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', title: 'Title', validation: (Rule) => Rule.required() }),
    defineField({ name: 'slug', type: 'slug', title: 'Slug', options: { source: 'title' }, validation: (Rule) => Rule.required() }),
    defineField({ name: 'category', type: 'reference', title: 'Category', to: [{ type: 'blogCategory' }] }),
    defineField({ name: 'author', type: 'reference', title: 'Author', to: [{ type: 'teamMember' }] }),
    defineField({ name: 'publishedAt', type: 'datetime', title: 'Published At' }),
    defineField({ name: 'featuredImage', type: 'image', title: 'Featured Image', options: { hotspot: true } }),
    defineField({ name: 'excerpt', type: 'text', title: 'Excerpt', rows: 3 }),
    defineField({ name: 'content', type: 'array', title: 'Content', of: [
      { type: 'block' },
      { type: 'image', options: { hotspot: true } },
      { type: 'code' },
    ] }),
    defineField({ name: 'relatedPosts', type: 'array', title: 'Related Posts', of: [{ type: 'reference', to: [{ type: 'blogPost' }] }] }),
    defineField({ name: 'seoTitle', type: 'string', title: 'SEO Title' }),
    defineField({ name: 'seoDescription', type: 'text', title: 'SEO Description', rows: 2 }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'category.title', media: 'featuredImage' },
  },
  orderings: [
    { title: 'Published Date, New', name: 'publishedAtDesc', by: [{ field: 'publishedAt', direction: 'desc' }] },
  ],
});
