/**
 * Utility functions for the KP Infotech website
 */

/**
 * Generate a placeholder image URL using placehold.co
 * Uses brand colors: dark bg (#0a0a0a), gold text (#c9a87c)
 */
export function getPlaceholderImage(
  width: number,
  height: number,
  text: string = 'Image'
): string {
  const encodedText = encodeURIComponent(text.replace(/\s+/g, '+'));
  return `https://placehold.co/${width}x${height}/0a0a0a/c9a87c?text=${encodedText}`;
}

/**
 * Get image URL from Sanity or fallback to placeholder
 */
export function getImageWithFallback(
  sanityImageUrl: string | undefined | null,
  fallbackWidth: number,
  fallbackHeight: number,
  fallbackText: string = 'Image'
): string {
  if (sanityImageUrl) {
    return sanityImageUrl;
  }
  return getPlaceholderImage(fallbackWidth, fallbackHeight, fallbackText);
}

/**
 * Format a date string for display
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Calculate reading time from text content
 */
export function calculateReadingTime(text: string): number {
  const wordsPerMinute = 200;
  const wordCount = text.trim().split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

/**
 * Truncate text to a maximum length with ellipsis
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
}
