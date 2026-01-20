import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SparkleIcon } from "./SparkleIcon";

import { AI_SUMMARY_EVENT } from "./constants";

export default function AISummaryTrigger() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Listen for toggle events from the content component
    const handleToggle = (e: CustomEvent) => {
      const isExpanded = e.detail.isExpanded;
      setIsVisible(!isExpanded);
    };

    window.addEventListener(AI_SUMMARY_EVENT, handleToggle);
    return () => window.removeEventListener(AI_SUMMARY_EVENT, handleToggle);
  }, []);

  const handleClick = () => {
    setIsVisible(false);
    // Dispatch event to open content
    window.dispatchEvent(
      new CustomEvent(AI_SUMMARY_EVENT, {
        detail: { isExpanded: true },
      }),
    );
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleClick}
          className="group relative flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0f0f0f] border border-white/10 shadow-lg overflow-hidden cursor-pointer"
        >
          {/* Glow Background */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
            <div className="absolute inset-0 bg-linear-to-r from-[#EA4335] via-[#FBBC05] to-[#34A853] blur-md opacity-60" />
          </div>

          <SparkleIcon className="w-4 h-4 relative z-10" />
          <span className="text-xs font-medium text-theme-text-secondary group-hover:text-white transition-colors relative z-10">
            AI Summary
          </span>

          {/* Border Gradient */}
          <div className="absolute inset-0 rounded-full border border-transparent [background:linear-gradient(45deg,#171717,#171717)_padding-box,linear-gradient(90deg,#EA4335,#FBBC05,#34A853,#4285F4)_border-box] opacity-30 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
