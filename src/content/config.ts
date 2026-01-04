import { defineCollection, z } from 'astro:content';

/**
 * Blog Collection Schema
 * Defines the frontmatter structure for all blog posts
 */
const blogCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      // Required fields
      title: z.string().min(1, 'Title is required'),
      description: z.string().max(160, 'Description should be 160 characters or less for SEO'),
      excerpt: z.string().max(300, 'Excerpt should be 300 characters or less'),
      publishedDate: z.date(),

      // Optional date for updates
      updatedDate: z.date().optional(),

      // Author info with defaults
      author: z
        .object({
          name: z.string(),
          avatar: z.string().optional(),
        })
        .default({
          name: 'Hirusha Dinil',
          avatar: '/avatar.jpg',
        }),

      // Featured image (uses Astro's image optimization)
      image: image(),
      imageAlt: z.string(),

      // Categorization
      tags: z.array(z.string()).min(1, 'At least one tag is required'),

      // Publishing controls
      draft: z.boolean().default(false),
      featured: z.boolean().default(false),

      // Reading time (can be computed or manually set)
      readTime: z.number().optional(),
    }),
});

export const collections = {
  blog: blogCollection,
};
