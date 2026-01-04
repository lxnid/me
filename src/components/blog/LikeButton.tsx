import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLikes } from '../../hooks/useLikes';

interface LikeButtonProps {
  postSlug: string;
}

/**
 * Like button component for blog posts
 * Uses Firebase for persistence with animated interactions
 */
export default function LikeButton({ postSlug }: LikeButtonProps) {
  const { likeCount, hasLiked, isLoading, isDisabled, toggleLike } = useLikes(postSlug);
  const [displayCount, setDisplayCount] = useState(likeCount);
  const [isAnimating, setIsAnimating] = useState(false);
  const prevCountRef = useRef(likeCount);

  // Animate count changes
  useEffect(() => {
    if (prevCountRef.current !== likeCount && !isLoading) {
      setIsAnimating(true);
      const timeout = setTimeout(() => {
        setDisplayCount(likeCount);
        setIsAnimating(false);
      }, 150);
      prevCountRef.current = likeCount;
      return () => clearTimeout(timeout);
    } else {
      setDisplayCount(likeCount);
    }
  }, [likeCount, isLoading]);

  const handleClick = async () => {
    await toggleLike();
  };

  return (
    <motion.button
      onClick={handleClick}
      disabled={isLoading || isDisabled}
      className={`
        group flex items-center gap-3 px-5 py-2.5 rounded-full
        border transition-colors duration-300
        ${
          hasLiked
            ? 'bg-red-500/10 border-red-500/30 text-red-400'
            : 'bg-theme-surface/50 border-theme-border-muted hover:border-theme-border text-theme-text-secondary hover:text-theme-text-primary'
        }
        disabled:opacity-50 disabled:cursor-not-allowed
      `}
      whileHover={{ scale: isDisabled ? 1 : 1.04 }}
      whileTap={{ scale: isDisabled ? 1 : 0.96 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      aria-label={hasLiked ? 'Unlike this post' : 'Like this post'}
    >
      {/* Heart icon container */}
      <motion.div
        className="relative"
        animate={hasLiked ? { scale: [1, 1.3, 1] } : {}}
        transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
      >
        <AnimatePresence mode="wait">
          {hasLiked ? (
            <motion.svg
              key="filled"
              className="w-[18px] h-[18px] fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </motion.svg>
          ) : (
            <motion.svg
              key="outline"
              className="w-[18px] h-[18px]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </motion.svg>
          )}
        </AnimatePresence>

        {/* Burst particles on like */}
        <AnimatePresence>
          {hasLiked && (
            <>
              {[...Array(6)].map((_, i) => (
                <motion.span
                  key={i}
                  className="absolute top-1/2 left-1/2 w-1 h-1 rounded-full bg-red-400"
                  initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                  animate={{
                    x: Math.cos((i * 60 * Math.PI) / 180) * 16,
                    y: Math.sin((i * 60 * Math.PI) / 180) * 16,
                    opacity: 0,
                    scale: 0,
                  }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                />
              ))}
            </>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Like count with animation */}
      <div className="relative w-6 h-5 overflow-hidden">
        {isLoading ? (
          <span className="inline-block w-6 h-4 bg-theme-bg-tertiary rounded animate-pulse" />
        ) : (
          <AnimatePresence mode="popLayout">
            <motion.span
              key={displayCount}
              className="absolute inset-0 flex items-center justify-start text-sm font-medium tabular-nums"
              initial={{ y: isAnimating ? (prevCountRef.current < likeCount ? 12 : -12) : 0, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: prevCountRef.current < likeCount ? -12 : 12, opacity: 0 }}
              transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
            >
              {displayCount}
            </motion.span>
          </AnimatePresence>
        )}
      </div>

      {/* Disabled indicator */}
      {isDisabled && !isLoading && (
        <span className="text-xs text-theme-text-muted">(offline)</span>
      )}
    </motion.button>
  );
}
