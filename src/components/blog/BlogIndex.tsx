import { useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { CollectionEntry } from 'astro:content';
import BlogCard from './BlogCard';
import TagFilter from './TagFilter';

interface BlogIndexProps {
  posts: CollectionEntry<'blog'>[];
  allTags: string[];
}

/**
 * Main blog index component
 * Handles tag filtering with instant client-side updates
 * Posts are pre-fetched at build time for SEO
 */
export default function BlogIndex({ posts, allTags }: BlogIndexProps) {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Filter posts based on selected tags
  const filteredPosts = useMemo(() => {
    if (selectedTags.length === 0) return posts;
    return posts.filter((post) =>
      post.data.tags.some((tag) => selectedTags.includes(tag))
    );
  }, [posts, selectedTags]);

  // Toggle tag selection
  const handleTagToggle = useCallback((tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  }, []);

  // Clear all selected tags
  const handleClearAll = useCallback(() => {
    setSelectedTags([]);
  }, []);

  // Helper to determine grid span
  const getGridSpan = (index: number) => {
    // Pattern: 4 (large) | 2 (small) | 3 (medium) | 3 (medium)
    const pattern = [
      'md:col-span-4', // Large featured style
      'md:col-span-2', // Tall/narrow
      'md:col-span-3', // Half width
      'md:col-span-3', // Half width
    ];
    return pattern[index % pattern.length];
  };

  return (
    <div>
      {/* Filter section */}
      <div className="mb-12">
        <TagFilter
          tags={allTags}
          selectedTags={selectedTags}
          onTagToggle={handleTagToggle}
          onClearAll={handleClearAll}
        />
      </div>

      {/* Results count */}
      <motion.p
        key={filteredPosts.length}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-sm text-theme-text-muted mb-8"
      >
        {filteredPosts.length === posts.length
          ? `Showing all ${posts.length} posts`
          : `Showing ${filteredPosts.length} of ${posts.length} posts`}
      </motion.p>

      {/* Posts grid - Bento Layout */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              layout
              className={`${getGridSpan(index)} h-full`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <BlogCard post={post} index={index} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Empty state */}
      {filteredPosts.length === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-20"
        >
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-theme-bg-tertiary flex items-center justify-center">
            <svg
              className="w-8 h-8 text-theme-text-muted"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-medium text-theme-text-primary mb-2">
            No posts found
          </h3>
          <p className="text-theme-text-secondary mb-6">
            No posts match the selected tags. Try selecting different tags.
          </p>
          <button
            onClick={handleClearAll}
            className="px-6 py-2 rounded-full bg-theme-accent text-white hover:bg-theme-accent-hover transition-colors"
          >
            Clear filters
          </button>
        </motion.div>
      )}
    </div>
  );
}
