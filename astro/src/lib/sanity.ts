/**
 * Sanity client using @sanity/astro integration
 * This provides type-safe querying with GROQ
 */
import type { SanityAssetDocument } from '@sanity/client'
import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

// Create a Sanity client instance
export const sanityClient = createClient({
  projectId: '5o2htsvf',
  dataset: 'production',
  apiVersion: '2023-10-22', // Use a UTC date string
  useCdn: import.meta.env.PROD, // `false` for development, `true` for production
})

// Set up image URL builder
const builder = imageUrlBuilder(sanityClient)

/**
 * Helper function to generate image URLs from Sanity image references
 */
export function urlFor(source: SanityAssetDocument | undefined) {
  if (!source) return ''
  return builder.image(source)
}

/**
 * Types for Sanity content models
 */
export interface Author {
  _id: string
  name: string
  image?: any
  bio?: any
}

export interface Category {
  _id: string
  title: string
  description?: string
}

export interface Post {
  _id: string
  title: string
  slug: { current: string }
  excerpt?: string
  mainImage?: any
  body?: any
  publishedAt: string
  author?: Author
  categories?: Category[]
}

/**
 * Get all blog posts
 */
export async function getAllPosts(): Promise<Post[]> {
  try {
    return await sanityClient.fetch(`
      *[_type == "post"] | order(publishedAt desc) {
        _id,
        title,
        slug,
        excerpt,
        mainImage,
        publishedAt,
        "author": author->{_id, name, image},
        "categories": categories[]->{ _id, title }
      }
    `)
  } catch (error) {
    console.error('Failed to fetch all posts:', error)
    return []
  }
}

/**
 * Get a single blog post by slug
 */
export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    // Fetch a single post with detailed query including body content
    const post = await sanityClient.fetch(
      `
      *[_type == "post" && defined(slug.current)] {
        _id,
        title,
        slug,
        excerpt,
        mainImage,
        body[] {  // Fetch all blocks in the Portable Text array
          ...,   // Spread to get all properties of each block
          _type == "image" => {
            "asset": asset->
          },
          markDefs[] {  // Properly handle mark definitions for rich text
            ...,
            _type == "internalLink" => {
              "slug": @.reference->slug
            }
          }
        },
        content[] {  // Also try to fetch 'content' field if it exists instead of body
          ...,
          _type == "image" => {
            "asset": asset->
          }
        },
        publishedAt,
        "author": author->{ _id, name, image, bio },
        "categories": categories[]->{ _id, title },
        "params": {
          "slug": ${slug.current}
        }
      }
        `
    )

    // If post exists but body is undefined, check if content field exists and use that instead
    if (post && !post.body && post.content) {
      console.log('Using content field instead of body field')
      post.body = post.content
    }

    return post || null
  } catch (error) {
    console.error(`Failed to fetch post with slug ${slug}:`, error)
    return null
  }
}

/**
 * Get all categories
 */
export async function getAllCategories(): Promise<Category[]> {
  try {
    return await sanityClient.fetch(`
      *[_type == "category"] {
        _id,
        title,
        description
      }
    `)
  } catch (error) {
    console.error('Failed to fetch categories:', error)
    return []
  }
}
