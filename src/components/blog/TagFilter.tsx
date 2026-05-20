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
          text-xs px-3.5 py-1.5 rounded-full border transition-all duration-300 cursor-pointer
          ${
            selectedTags.length === 0
              ? 'bg-white/[0.12] text-white border-white/[0.2] font-semibold shadow-[0_0_20px_rgba(255,255,255,0.03)]'
              : 'bg-white/[0.02] border-white/[0.04] text-theme-text-secondary hover:bg-white/[0.06] hover:border-white/[0.1] hover:text-white hover:scale-[1.02]'
          }
        `}
        whileTap={{ scale: 0.95 }}
      >
        All Posts
      </motion.button>

      {/* Divider */}
      <div className="w-px h-6 bg-white/[0.05] mx-2" />

      {/* Tag chips */}
      {tags.map((tag) => {
        const isSelected = selectedTags.includes(tag);
        return (
          <motion.button
            key={tag}
            onClick={() => onTagToggle(tag)}
            className={`
              text-xs px-3.5 py-1.5 rounded-full border transition-all duration-300 cursor-pointer
              ${
                isSelected
                  ? 'bg-white/[0.12] text-white border-white/[0.2] font-semibold shadow-[0_0_20px_rgba(255,255,255,0.03)]'
                  : 'bg-white/[0.02] border-white/[0.04] text-theme-text-secondary hover:bg-white/[0.06] hover:border-white/[0.1] hover:text-white hover:scale-[1.02]'
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
                className="ml-2 inline-flex items-center justify-center w-4 h-4 text-xs rounded-full bg-white/10"
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
            className="text-xs px-3.5 py-1.5 rounded-full bg-white/[0.02] text-theme-text-muted hover:text-theme-text-secondary border border-white/[0.04] hover:border-white/[0.1] transition-colors cursor-pointer"
            whileTap={{ scale: 0.95 }}
          >
            Clear ({selectedTags.length})
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
