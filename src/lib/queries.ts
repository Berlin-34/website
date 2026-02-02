// GROQ Queries for KP Infotech website

// ============================================
// Site Settings
// ============================================
export const siteSettingsQuery = `
  *[_type == "siteSettings"][0] {
    siteName,
    siteTagline,
    heroHeadline,
    logo,
    contactEmail,
    contactPhone,
    address,
    socialLinks,
    stats,
    footerText,
    defaultSeoTitle,
    defaultSeoDescription
  }
`;

// Homepage data - fetches all data needed for the homepage
export const homepageDataQuery = `
{
  "siteSettings": *[_type == "siteSettings"][0] {
    siteName,
    siteTagline,
    heroHeadline,
    stats
  },
  "services": *[_type == "service"] | order(order asc) {
    _id,
    title,
    slug,
    shortDescription,
    iconName,
    iconCustom
  },
  "industries": *[_type == "industry"] | order(order asc) {
    _id,
    title,
    slug,
    iconName,
    iconCustom
  },
  "featuredWork": *[_type == "caseStudy" && featured == true] | order(_createdAt desc)[0...4] {
    _id,
    title,
    slug,
    client,
    thumbnailImage
  },
  "testimonials": *[_type == "testimonial" && featured == true] | order(_createdAt desc)[0...5] {
    _id,
    quote,
    "clientName": authorName,
    "clientRole": authorRole,
    "clientCompany": company,
    "clientPhoto": authorPhoto
  }
}
`;

// ============================================
// Services
// ============================================
export const allServicesQuery = `
  *[_type == "service"] | order(order asc) {
    _id,
    title,
    slug,
    shortDescription,
    iconName,
    iconCustom
  }
`;

export const serviceBySlugQuery = `
  *[_type == "service" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    shortDescription,
    fullDescription,
    iconName,
    iconCustom,
    heroImage,
    features,
    process,
    deliverables,
    faqs,
    seo,
    "relatedWork": *[_type == "caseStudy" && references(^._id)] | order(_createdAt desc)[0...3] {
      _id,
      title,
      slug,
      thumbnailImage,
      client
    }
  }
`;

export const featuredServicesQuery = `
  *[_type == "service"] | order(order asc)[0...4] {
    _id,
    title,
    slug,
    shortDescription,
    iconName,
    iconCustom
  }
`;

// ============================================
// Industries
// ============================================
export const allIndustriesQuery = `
  *[_type == "industry"] | order(order asc) {
    _id,
    title,
    slug,
    shortDescription,
    iconName,
    iconCustom
  }
`;

export const industryBySlugQuery = `
  *[_type == "industry" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    shortDescription,
    fullDescription,
    iconName,
    iconCustom,
    heroImage,
    challenges,
    solutions,
    faqs,
    seo,
    "relatedWork": *[_type == "caseStudy" && references(^._id)] | order(_createdAt desc)[0...3] {
      _id,
      title,
      slug,
      thumbnailImage,
      client
    },
    "relatedServices": *[_type == "service"] | order(order asc)[0...4] {
      _id,
      title,
      slug,
      shortDescription
    }
  }
`;

// ============================================
// Case Studies
// ============================================
export const allCaseStudiesQuery = `
  *[_type == "caseStudy"] | order(_createdAt desc) {
    _id,
    title,
    slug,
    client,
    thumbnailImage,
    industry->{
      _id,
      title,
      slug
    },
    services[]->{
      _id,
      title,
      slug
    },
    featured
  }
`;

export const featuredCaseStudiesQuery = `
  *[_type == "caseStudy" && featured == true] | order(_createdAt desc)[0...4] {
    _id,
    title,
    slug,
    client,
    thumbnailImage,
    industry->{
      _id,
      title,
      slug
    }
  }
`;

export const caseStudyBySlugQuery = `
  *[_type == "caseStudy" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    client,
    thumbnailImage,
    heroImage,
    industry->{
      _id,
      title,
      slug
    },
    services[]->{
      _id,
      title,
      slug
    },
    challenge,
    solution,
    results,
    testimonial,
    gallery,
    seo,
    "relatedWork": *[_type == "caseStudy" && slug.current != $slug && (
      industry._ref == ^.industry._ref ||
      count(services[@._ref in ^.^.services[]._ref]) > 0
    )] | order(_createdAt desc)[0...3] {
      _id,
      title,
      slug,
      thumbnailImage,
      client
    }
  }
`;

// ============================================
// Blog Posts
// ============================================
export const allBlogPostsQuery = `
  *[_type == "blogPost"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    featuredImage,
    publishedAt,
    readTime,
    category->{
      _id,
      title,
      slug
    },
    author->{
      _id,
      name,
      photo
    }
  }
`;

export const featuredBlogPostsQuery = `
  *[_type == "blogPost" && featured == true] | order(publishedAt desc)[0...3] {
    _id,
    title,
    slug,
    excerpt,
    featuredImage,
    publishedAt,
    readTime,
    category->{
      _id,
      title,
      slug
    }
  }
`;

export const blogPostBySlugQuery = `
  *[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    featuredImage,
    publishedAt,
    readTime,
    content,
    category->{
      _id,
      title,
      slug
    },
    author->{
      _id,
      name,
      role,
      photo,
      bio
    },
    tags,
    seo,
    "relatedPosts": *[_type == "blogPost" && slug.current != $slug && (
      category._ref == ^.category._ref ||
      count(tags[@in ^.^.tags]) > 0
    )] | order(publishedAt desc)[0...3] {
      _id,
      title,
      slug,
      featuredImage,
      publishedAt,
      readTime
    }
  }
`;

export const blogPostsByCategoryQuery = `
  *[_type == "blogPost" && category->slug.current == $categorySlug] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    featuredImage,
    publishedAt,
    readTime,
    category->{
      _id,
      title,
      slug
    }
  }
`;

// ============================================
// Blog Categories
// ============================================
export const allBlogCategoriesQuery = `
  *[_type == "blogCategory"] | order(title asc) {
    _id,
    title,
    slug,
    description,
    "postCount": count(*[_type == "blogPost" && references(^._id)])
  }
`;

// ============================================
// Testimonials
// ============================================
export const allTestimonialsQuery = `
  *[_type == "testimonial"] | order(_createdAt desc) {
    _id,
    quote,
    "clientName": authorName,
    "clientRole": authorRole,
    "clientCompany": company,
    "clientPhoto": authorPhoto
  }
`;

export const featuredTestimonialsQuery = `
  *[_type == "testimonial" && featured == true] | order(_createdAt desc)[0...4] {
    _id,
    quote,
    "clientName": authorName,
    "clientRole": authorRole,
    "clientCompany": company,
    "clientPhoto": authorPhoto
  }
`;

// ============================================
// Team Members
// ============================================
export const allTeamMembersQuery = `
  *[_type == "teamMember"] | order(order asc) {
    _id,
    name,
    role,
    photo,
    bio,
    socialLinks
  }
`;

export const leadershipTeamQuery = `
  *[_type == "teamMember" && leadership == true] | order(order asc) {
    _id,
    name,
    role,
    photo,
    bio,
    socialLinks
  }
`;

// ============================================
// Job Listings
// ============================================
export const activeJobListingsQuery = `
  *[_type == "jobListing" && active == true] | order(_createdAt desc) {
    _id,
    title,
    slug,
    department,
    location,
    employmentType,
    experienceLevel,
    shortDescription
  }
`;

export const jobListingBySlugQuery = `
  *[_type == "jobListing" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    department,
    location,
    employmentType,
    experienceLevel,
    shortDescription,
    fullDescription,
    responsibilities,
    requirements,
    benefits,
    salaryRange,
    applicationUrl,
    seo
  }
`;
