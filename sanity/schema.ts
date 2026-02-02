import { type SchemaTypeDefinition } from 'sanity';

// Document schemas
import { service } from './schemas/service';
import { industry } from './schemas/industry';
import { caseStudy } from './schemas/caseStudy';
import { blogCategory } from './schemas/blogCategory';
import { blogPost } from './schemas/blogPost';
import { testimonial } from './schemas/testimonial';
import { teamMember } from './schemas/teamMember';
import { jobListing } from './schemas/jobListing';
import { siteSettings } from './schemas/siteSettings';

// Object schemas
import { processStep } from './schemas/objects/processStep';
import { faqItem } from './schemas/objects/faqItem';
import { resultMetric } from './schemas/objects/resultMetric';
import { statItem } from './schemas/objects/statItem';
import { code } from './schemas/objects/code';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Document types
    service,
    industry,
    caseStudy,
    blogCategory,
    blogPost,
    testimonial,
    teamMember,
    jobListing,
    siteSettings,
    // Object types
    processStep,
    faqItem,
    resultMetric,
    statItem,
    code,
  ],
};
