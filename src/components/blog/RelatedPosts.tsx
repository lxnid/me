import { motion } from 'framer-motion';
import type { CollectionEntry } from 'astro:content';

interface RelatedPostsProps {
  posts: CollectionEntry<'blog'>[];
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

/**
 * Related posts component
 * Displays a compact grid of related blog posts
 */
export default function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) return null;

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      {posts.map((post) => {
        const { slug, data } = post;
        const { title, publishedDate, tags, image, imageAlt, readTime } = data;

        const formattedDate = new Intl.DateTimeFormat('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        }).format(publishedDate);

        const imageSrc = typeof image === 'string' ? image : image.src;

        return (
          <motion.a
            key={slug}
            href={`/blog/${slug}`}
            className="group flex gap-4 p-4 rounded-xl bg-theme-surface border border-theme-border-muted hover:border-theme-border transition-all duration-300"
            variants={fadeInUp}
          >
            {/* Thumbnail */}
            <div className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-medium text-theme-text-primary mb-1 line-clamp-2 group-hover:text-theme-accent transition-colors">
                {title}
              </h4>
              <div className="flex items-center gap-2 text-xs text-theme-text-muted">
                <time dateTime={publishedDate.toISOString()}>
                  {formattedDate}
                </time>
                {readTime && (
                  <>
                    <span>·</span>
                    <span>{readTime} min</span>
                  </>
                )}
              </div>
              <div className="flex gap-1 mt-2">
                {tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] px-2 py-0.5 rounded-full bg-theme-bg-tertiary text-theme-text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.a>
        );
      })}
    </motion.div>
  );
}
