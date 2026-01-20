import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SparkleIcon } from "./SparkleIcon";
import { AI_SUMMARY_EVENT } from "./constants";

interface AISummaryContentProps {
  summary: string;
}

export default function AISummaryContent({ summary }: AISummaryContentProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    // Listen for open events from trigger
    const handleToggle = (e: CustomEvent) => {
      if (e.detail?.isExpanded !== undefined) {
        setIsExpanded(e.detail.isExpanded);
      }
    };

    window.addEventListener(AI_SUMMARY_EVENT, handleToggle);
    return () => window.removeEventListener(AI_SUMMARY_EVENT, handleToggle);
  }, [summary]);

  // No persistence needed
  /*
  useEffect(() => {
     // localStorage removed
  }, [isExpanded]);
  */

  // Typing animation
  useEffect(() => {
    if (isExpanded && !hasAnimated) {
      setDisplayedText("");
      let currentIndex = 0;
      const words = summary.split(" ");

      const interval = setInterval(() => {
        if (currentIndex < words.length) {
          setDisplayedText(words.slice(0, currentIndex + 1).join(" "));
          currentIndex++;
        } else {
          clearInterval(interval);
          setHasAnimated(true);
        }
      }, 40); // typing speed

      return () => clearInterval(interval);
    } else if (isExpanded && hasAnimated) {
      setDisplayedText(summary);
    }
  }, [isExpanded, summary, hasAnimated]);

  const handleClose = () => {
    setIsExpanded(false);
    // Dispatch event to show trigger
    window.dispatchEvent(
      new CustomEvent(AI_SUMMARY_EVENT, {
        detail: { isExpanded: false },
      }),
    );
  };

  return (
    <AnimatePresence>
      {isExpanded && (
        <motion.div
          initial={{ opacity: 0, y: -20, height: 0 }}
          animate={{ opacity: 1, y: 0, height: "auto" }}
          exit={{ opacity: 0, y: -20, height: 0 }}
          transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }} // smooth ease-out-quart
          className="relative w-full max-w-3xl mx-auto my-8 overflow-hidden"
        >
          <div className="relative bg-[#0c0c0c]/80 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
            {/* Top Gradient Line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-[#EA4335] via-[#FBBC05] to-[#4285F4] opacity-50" />

            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <SparkleIcon className="w-4 h-4 opacity-80" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-theme-text-muted bg-white/5 px-2 py-0.5 rounded">
                    AI Generated
                  </span>
                </div>

                <button
                  onClick={handleClose}
                  className="p-1.5 rounded-full hover:bg-white/10 text-theme-text-muted transition-colors"
                  aria-label="Close summary"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Text content */}
              <div className="text-sm md:text-base text-gray-200 leading-relaxed font-normal tracking-wider">
                {displayedText}
                {!hasAnimated && (
                  <motion.span
                    className="inline-block w-1.5 h-4 ml-1 bg-linear-to-b from-[#4285F4] to-[#EA4335] rounded-full align-middle"
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity }}
                  />
                )}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
