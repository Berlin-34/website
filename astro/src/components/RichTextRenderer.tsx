/**
 * Simple RichTextRenderer component for Sanity Portable Text
 */
import { PortableText } from '@portabletext/react';
import { urlFor } from '../lib/sanityClient';

// Basic components for Portable Text rendering
const components = {
  types: {
    image: ({value}: any) => {
      if (!value?.asset) return null;
      const imageBuilder = urlFor(value);
      const imgUrl = typeof imageBuilder === 'object' && imageBuilder !== null ? imageBuilder.width(800).url() : '';
      return (
        <figure className="my-8">
          <img 
            src={imgUrl} 
            alt={value.alt || 'Blog image'} 
            className="w-full h-auto rounded-2xl"
          />
          {value.caption && (
            <figcaption className="mt-2 text-gray-500 text-center">{value.caption}</figcaption>
          )}
        </figure>
      );
    },
    code: ({value}: any) => {
      if (!value?.code) return null;
      return (
        <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto my-6">
          {value.filename && <div className="text-xs text-gray-400 mb-2">{value.filename}</div>}
          <code className="text-sm text-gray-200 font-mono">{value.code}</code>
        </pre>
      );
    },
  },
  block: {
    h1: ({children}: any) => <h1 className="text-4xl font-bold mt-8 mb-4">{children}</h1>,
    h2: ({children}: any) => <h2 className="text-3xl font-bold mt-6 mb-3">{children}</h2>,
    h3: ({children}: any) => <h3 className="text-2xl font-bold mt-5 mb-2">{children}</h3>,
    h4: ({children}: any) => <h4 className="text-xl font-bold mt-4 mb-2">{children}</h4>,
    normal: ({children}: any) => <p className="mb-4">{children}</p>,
    blockquote: ({children}: any) => (
      <blockquote className="border-l-4 border-yellow-500 pl-4 py-2 my-4 italic">{children}</blockquote>
    ),
  },
  list: {
    bullet: ({children}: any) => <ul className="list-disc pl-5 mb-4 space-y-1">{children}</ul>,
    number: ({children}: any) => <ol className="list-decimal pl-5 mb-4 space-y-1">{children}</ol>,
  },
  listItem: {
    bullet: ({children}: any) => <li>{children}</li>,
    number: ({children}: any) => <li>{children}</li>,
  },
  marks: {
    strong: ({children}: any) => <strong className="font-bold">{children}</strong>,
    em: ({children}: any) => <em className="italic">{children}</em>,
    code: ({children}: any) => (
      <code className="bg-gray-800 px-1 py-0.5 rounded font-mono text-sm">{children}</code>
    ),
    link: ({children, value}: any) => (
      <a href={value?.href} className="text-yellow-400 hover:underline">{children}</a>
    ),
  },
};

interface RichTextRendererProps {
  content: any;
}

/**
 * RichTextRenderer component for displaying Sanity Portable Text
 */
export default function RichTextRenderer({ content }: RichTextRendererProps) {
  if (!content) {
    console.log('No content provided to RichTextRenderer');
    return <div className="text-gray-400">No content available</div>;
  }

  // Debug output
  console.log('Content is array?', Array.isArray(content));
  console.log('Content type:', typeof content);
  
  try {
    return (
      <div className="prose prose-invert prose-lg max-w-none">
        <PortableText value={content} components={components} />
      </div>
    );
  } catch (error) {
    console.error('Error rendering Portable Text:', error);
    return <div className="text-red-500">Error rendering content</div>;
  }
}
