import { defineType } from 'sanity';
import { HighlightIcon } from '@sanity/icons';
import React from 'react';

const HighlightDecorator = ({ children }: { children: React.ReactNode }) => (
  <span style={{ color: '#c9a87c' }}>{children}</span>
);

export const richText = defineType({
  name: 'richText',
  type: 'block',
  marks: {
    decorators: [
      { title: 'Bold', value: 'strong' },
      { title: 'Italic', value: 'em' },
      { title: 'Underline', value: 'underline' },
      { title: 'Strike', value: 'strike-through' },
      { title: 'Code', value: 'code' },
      {
        title: 'Highlight',
        value: 'highlight',
        icon: HighlightIcon,
        component: HighlightDecorator,
      },
    ],
  },
});
