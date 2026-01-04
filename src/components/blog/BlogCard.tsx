import { motion } from 'framer-motion';
import type { CollectionEntry } from 'astro:content';
import { fadeInUp } from '../../lib/animations';

interface BlogCardProps {
  post: CollectionEntry<'blog'>;
  index: number;
}

/**
 * Blog post card component
 * Displays a preview of a blog post with image, title, excerpt, and metadata
 */
export default function BlogCard({ post, index }: BlogCardProps) {
  const { slug, data } = post;
  const { title, excerpt, publishedDate, image, imageAlt, tags, readTime } = data;

  // Format the date
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(publishedDate);

  // Get image src - handle both optimized and string images
  const imageSrc = typeof image === 'string' ? image : image.src;

  return (
    <motion.a
      href={`/blog/${slug}`}
      className="group relative flex flex-col h-full overflow-hidden rounded-2xl bg-theme-surface border border-theme-border-muted transition-all duration-500 hover:shadow-theme-glow hover:border-theme-border hover:-translate-y-1"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {/* Image container */}
      <div className="relative aspect-[2.5/1] overflow-hidden flex-shrink-0">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading={index < 3 ? 'eager' : 'lazy'}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-theme-bg-primary/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

        {/* Featured badge */}
        {data.featured && (
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 text-[10px] font-medium uppercase tracking-wider bg-theme-text-primary text-theme-bg-primary rounded-full shadow-lg">
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[10px] px-2 py-0.5 rounded-full bg-theme-bg-tertiary text-theme-text-secondary border border-theme-border-muted opacity-60 transition-opacity duration-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-lg md:text-xl font-medium text-theme-text-primary mb-2 leading-tight group-hover:text-theme-accent transition-colors duration-300">
          {title}
        </h3>

        {/* Excerpt */}
        <p className="text-theme-text-secondary text-xs leading-relaxed line-clamp-2 mb-3 flex-1">
          {excerpt}
        </p>

        {/* Meta */}
        <div className="flex items-center justify-between text-[10px] text-theme-text-muted mt-auto pt-3 border-t border-theme-border-muted/50">
          <time dateTime={publishedDate.toISOString()}>{formattedDate}</time>
          {readTime && (
            <span className="flex items-center gap-1">
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {readTime} min read
            </span>
          )}
        </div>
      </div>
    </motion.a>
  );
}
