import { motion } from 'framer-motion';
import { useLikes } from '../../hooks/useLikes';

interface LikeButtonProps {
  postSlug: string;
}

/**
 * Like button component for blog posts
 * Uses Firebase for persistence with animated heart icon
 */
export default function LikeButton({ postSlug }: LikeButtonProps) {
  const { likeCount, hasLiked, isLoading, isDisabled, toggleLike } = useLikes(postSlug);

  return (
    <motion.button
      onClick={toggleLike}
      disabled={isLoading || isDisabled}
      className={`
        group flex items-center gap-3 px-5 py-2.5 rounded-full
        border transition-all duration-300
        ${
          hasLiked
            ? 'bg-red-500/10 border-red-500/30 text-red-400'
            : 'bg-theme-surface/50 border-theme-border-muted hover:border-theme-border text-theme-text-secondary hover:text-theme-text-primary'
        }
        disabled:opacity-50 disabled:cursor-not-allowed
      `}
      whileHover={{ scale: isDisabled ? 1 : 1.03 }}
      whileTap={{ scale: isDisabled ? 1 : 0.97 }}
      aria-label={hasLiked ? 'Unlike this post' : 'Like this post'}
    >
      {/* Heart icon with hover animation */}
      <motion.div
        className="relative"
        animate={
          hasLiked
            ? { scale: [1, 1.25, 1] }
            : {}
        }
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        {hasLiked ? (
          <motion.svg
            className="w-[18px] h-[18px] fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </motion.svg>
        ) : (
          <motion.svg
            className="w-[18px] h-[18px] transition-transform duration-200 group-hover:scale-110"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </motion.svg>
        )}
      </motion.div>

      {/* Like count */}
      <span className="text-sm font-medium tabular-nums">
        {isLoading ? (
          <span className="inline-block w-6 h-4 bg-theme-bg-tertiary rounded animate-pulse" />
        ) : (
          <span>{likeCount}</span>
        )}
      </span>

      {/* Disabled indicator */}
      {isDisabled && !isLoading && (
        <span className="text-xs text-theme-text-muted">(offline)</span>
      )}
    </motion.button>
  );
}
