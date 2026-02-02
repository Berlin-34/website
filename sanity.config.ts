import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schema } from './sanity/schema';

export default defineConfig({
  name: 'kp-infotech',
  title: 'KP Infotech',
  projectId: '5rux0mv2',
  dataset: 'production',
  plugins: [structureTool(), visionTool()],
  schema,
});
