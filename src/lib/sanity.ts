import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID;
const dataset = import.meta.env.PUBLIC_SANITY_DATASET || 'production';

if (!projectId) {
  throw new Error(
    'PUBLIC_SANITY_PROJECT_ID is not defined. ' +
    'Ensure environment variables are set in Vercel for the Production environment.'
  );
}

export const client = createClient({
  projectId,
  dataset,
  useCdn: import.meta.env.PROD,
  apiVersion: '2024-01-01',
});

// Image URL builder
const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

// Helper to get responsive image URL
export function getImageUrl(
  source: SanityImageSource,
  width: number,
  format: 'webp' | 'jpg' | 'png' = 'webp'
): string {
  return urlFor(source).width(width).format(format).url();
}

// Helper for responsive image srcset
export function getImageSrcSet(
  source: SanityImageSource,
  widths: number[] = [400, 800, 1200, 1600],
  format: 'webp' | 'jpg' | 'png' = 'webp'
): string {
  return widths
    .map((w) => `${urlFor(source).width(w).format(format).url()} ${w}w`)
    .join(', ');
}
