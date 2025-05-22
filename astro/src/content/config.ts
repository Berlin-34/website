import { defineCollection, z } from 'astro:content';

// Define the schema for blog posts from Sanity
export const blogCollection = defineCollection({
  type: 'data',
  schema: z.object({
    _id: z.string(),
    title: z.string(),
    slug: z.object({
      current: z.string()
    }),
    publishedAt: z.string().transform(str => new Date(str)).optional(),
    excerpt: z.string().optional(),
    // Note: body is handled separately via Portable Text
    // We don't validate it here as it's complex structured content
    body: z.any().optional(),
    mainImage: z.any().optional(),
    author: z.object({
      _id: z.string().optional(),
      name: z.string().optional(),
      image: z.any().optional(),
      bio: z.any().optional()
    }).optional(),
    categories: z.array(
      z.object({
        _id: z.string(),
        title: z.string(),
        description: z.string().optional()
      })
    ).optional(),
  })
});

// Export collections
export const collections = {
  'blog': blogCollection
};

// Note: For Sanity content, we're primarily using the direct API client
// rather than Astro's content collections, but this config remains for
// compatibility with any existing code that may still use collections.
