import { motion } from 'framer-motion';
import type { CollectionEntry } from 'astro:content';
import { fadeInUp, staggerContainer } from '../../lib/animations';

interface RelatedPostsProps {
  posts: CollectionEntry<'blog'>[];
}

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
            className="group flex gap-4 p-4 rounded-xl bg-neutral-900/15 border border-white/[0.03] backdrop-blur-md hover:bg-neutral-900/30 hover:border-white/[0.08] hover:shadow-[0_0_50px_rgba(255,255,255,0.015)] transition-all duration-300"
            variants={fadeInUp}
          >
            {/* Thumbnail */}
            <div className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                loading="lazy"
              />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-medium text-theme-text-primary mb-1 line-clamp-2 group-hover:text-theme-accent transition-colors duration-300">
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
              <div className="flex gap-1.5 mt-2.5">
                {tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="text-[9px] font-medium tracking-wide uppercase px-2 py-0.5 rounded-full bg-theme-bg-tertiary/70 text-theme-text-secondary hover:bg-theme-bg-tertiary hover:text-theme-text-primary transition-colors duration-300"
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
