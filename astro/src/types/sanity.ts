/**
 * Type definitions for Sanity content models
 */

export interface Author {
  _id: string
  name: string
  image?: any
  bio?: string
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
