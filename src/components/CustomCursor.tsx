import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [cursorVariant, setCursorVariant] = useState("default");
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Add global cursor style
    const style = document.createElement('style');
    style.textContent = `
      @media (pointer: fine) {
        * {
          cursor: none !important;
        }
      }
    `;
    document.head.appendChild(style);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
      setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const projectElements = document.querySelectorAll('.cursor-hover-project');

    const handleMouseOver = () => setCursorVariant("hover");
    const handleMouseOut = () => setCursorVariant("default");

    // Handle link clicks
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a') || target.closest('button')) {
        setIsClicking(true);
        // Reset after a delay in case navigation doesn't happen (e.g. new tab or same page)
        setTimeout(() => setIsClicking(false), 500);
      }
    };

    projectElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseOver);
      el.addEventListener("mouseleave", handleMouseOut);
    });

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", handleClick);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.head.removeChild(style);
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleClick);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);

      projectElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseOver);
        el.removeEventListener("mouseleave", handleMouseOut);
      });
    };
  }, [cursorX, cursorY]);

  const variants = {
    default: {
      width: 20,
      height: 20,
      backgroundColor: "rgba(255, 255, 255, 0.08)",
      border: "1px solid rgba(255, 255, 255, 0.3)",
      mixBlendMode: "difference" as const,
      scale: 1,
    },
    hover: {
      width: 80,
      height: 80,
      backgroundColor: "rgba(255, 255, 255, 0.02)",
      border: "2px solid rgba(255, 255, 255, 0.15)",
      mixBlendMode: "normal" as const,
      scale: 1,
    },
    clicking: {
      width: 20,
      height: 20,
      backgroundColor: "#e0e0e0",
      border: "1px solid #e0e0e0",
      mixBlendMode: "normal" as const,
      scale: 0.9,
    },
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full hidden md:flex items-center justify-center backdrop-blur-md"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          opacity: isVisible ? 1 : 0,
        }}
        variants={variants}
        animate={isClicking ? "clicking" : cursorVariant}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      >
        {cursorVariant === "hover" && !isClicking && (
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.2 }}
            className="text-white text-xs font-medium tracking-wider drop-shadow-lg"
          >
            VIEW
          </motion.span>
        )}
      </motion.div>

      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full hidden md:block"
        style={{
          x: cursorX,
          y: cursorY,
          opacity: isVisible && cursorVariant === "default" && !isClicking ? 1 : 0,
          width: 4,
          height: 4,
          translateX: 8,
          translateY: 8,
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          mixBlendMode: "difference",
        }}
      />
    </>
  );
}
