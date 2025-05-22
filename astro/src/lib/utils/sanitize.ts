/**
 * Utility for sanitizing HTML content from WordPress
 * Removes script tags and other potentially harmful content
 */
import DOMPurify from 'dompurify';
import { JSDOM } from 'jsdom';

// Create a DOMPurify instance using JSDOM
const createDOMPurify = () => {
  const window = new JSDOM('').window;
  return DOMPurify(window);
};

/**
 * Sanitizes HTML content from WordPress
 * Removes script tags and other potentially harmful content
 */
export function sanitizeHtml(content: string): string {
  const purify = createDOMPurify();
  
  return purify.sanitize(content, {
    ALLOWED_TAGS: [
      'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'a', 'ul', 'ol', 'li', 
      'blockquote', 'hr', 'br', 'strong', 'em', 'img', 'figure', 'figcaption',
      'table', 'tr', 'td', 'th', 'thead', 'tbody', 'code', 'pre', 'div', 'span'
    ],
    ALLOWED_ATTR: [
      'href', 'src', 'alt', 'title', 'class', 'id', 'width', 'height', 
      'target', 'rel', 'style'
    ],
    FORBID_TAGS: ['script', 'iframe', 'object', 'embed'],
    FORBID_ATTR: ['onerror', 'onload', 'onclick']
  });
}
