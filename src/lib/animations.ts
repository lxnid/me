import type { Variants, Transition } from 'framer-motion';

/**
 * Shared animation variants used across the codebase
 * Centralizes animation definitions for consistency and reduced bundle size
 */

// ─────────────────────────────────────────────────────────────────────────────
// ANIMATION VARIANTS
// ─────────────────────────────────────────────────────────────────────────────

/** Fade in from below - most common animation */
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

/** Fade in from the right */
export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0 },
};

/** Fade in from the left */
export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 },
};

/** Simple fade without movement */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

/** Container that staggers children animations */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

/** Scale up animation for emphasis */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

// ─────────────────────────────────────────────────────────────────────────────
// TRANSITION CONFIGS
// ─────────────────────────────────────────────────────────────────────────────

/** Default easing for smooth animations */
export const defaultTransition: Transition = {
  duration: 0.6,
  ease: [0.25, 0.1, 0.25, 1],
};

/** Spring transition for interactive elements */
export const springTransition: Transition = {
  type: 'spring',
  stiffness: 400,
  damping: 17,
};

/** Soft spring for larger movements */
export const softSpringTransition: Transition = {
  type: 'spring',
  stiffness: 300,
  damping: 25,
};

// ─────────────────────────────────────────────────────────────────────────────
// VIEWPORT CONFIGS
// ─────────────────────────────────────────────────────────────────────────────

/** Standard viewport trigger - animates once when 30% visible */
export const defaultViewport = {
  once: true,
  amount: 0.3 as const,
};

/** Earlier trigger - animates when 20% visible */
export const earlyViewport = {
  once: true,
  amount: 0.2 as const,
};
