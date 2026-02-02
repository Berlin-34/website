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

/**
 * Parses text with *highlighted* markers and returns an array of segments
 * Example: "We craft *digital experiences* that drive growth"
 * Returns: [
 *   { text: "We craft ", highlighted: false },
 *   { text: "digital experiences", highlighted: true },
 *   { text: " that drive growth", highlighted: false }
 * ]
 */
export interface TextSegment {
  text: string;
  highlighted: boolean;
}

export function parseHighlightedText(input: string | null | undefined): TextSegment[] {
  if (!input) return [];

  const segments: TextSegment[] = [];
  const regex = /\*([^*]+)\*/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(input)) !== null) {
    // Add text before the match (if any)
    if (match.index > lastIndex) {
      segments.push({
        text: input.slice(lastIndex, match.index),
        highlighted: false,
      });
    }

    // Add the highlighted text (without asterisks)
    segments.push({
      text: match[1],
      highlighted: true,
    });

    lastIndex = regex.lastIndex;
  }

  // Add remaining text after last match (if any)
  if (lastIndex < input.length) {
    segments.push({
      text: input.slice(lastIndex),
      highlighted: false,
    });
  }

  return segments;
}
