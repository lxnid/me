import { motion, AnimatePresence } from 'framer-motion';

interface TagFilterProps {
  tags: string[];
  selectedTags: string[];
  onTagToggle: (tag: string) => void;
  onClearAll: () => void;
}

/**
 * Tag filtering component for blog posts
 * Allows users to filter posts by clicking on tag chips
 */
export default function TagFilter({
  tags,
  selectedTags,
  onTagToggle,
  onClearAll,
}: TagFilterProps) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {/* All posts button */}
      <motion.button
        onClick={onClearAll}
        className={`
          text-sm px-4 py-2 rounded-full border transition-all duration-200
          ${
            selectedTags.length === 0
              ? 'bg-theme-text-primary text-theme-bg-primary border-theme-text-primary'
              : 'border-theme-border text-theme-text-secondary hover:border-theme-text-muted hover:text-theme-text-primary opacity-60 hover:opacity-100'
          }
        `}
        whileTap={{ scale: 0.95 }}
      >
        All Posts
      </motion.button>

      {/* Divider */}
      <div className="w-px h-6 bg-theme-border mx-2 opacity-40" />

      {/* Tag chips */}
      {tags.map((tag) => {
        const isSelected = selectedTags.includes(tag);
        return (
          <motion.button
            key={tag}
            onClick={() => onTagToggle(tag)}
            className={`
              text-sm px-4 py-2 rounded-full border transition-all duration-200
              ${
                isSelected
                  ? 'bg-theme-text-primary text-theme-bg-primary border-theme-text-primary'
                  : 'border-theme-border text-theme-text-secondary hover:border-theme-text-muted hover:text-theme-text-primary opacity-60 hover:opacity-100'
              }
            `}
            whileTap={{ scale: 0.95 }}
            layout
          >
            {tag}
            {isSelected && (
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                className="ml-2 inline-flex items-center justify-center w-4 h-4 text-xs rounded-full bg-theme-bg-primary/20"
              >
                ×
              </motion.span>
            )}
          </motion.button>
        );
      })}

      {/* Clear all button (shows when tags are selected) */}
      <AnimatePresence>
        {selectedTags.length > 0 && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={onClearAll}
            className="text-sm px-4 py-2 rounded-full bg-theme-surface text-theme-text-muted hover:text-theme-text-secondary border border-theme-border-muted transition-colors"
            whileTap={{ scale: 0.95 }}
          >
            Clear ({selectedTags.length})
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
