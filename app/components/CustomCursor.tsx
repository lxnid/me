"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: 'ease',
      });
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="hidden md:block fixed -top-1 -left-1 w-8 h-8 bg-white backdrop-blur-3xl opacity-50 rounded-full pointer-events-none z-50 mix-blend-difference"
      style={{ transform: 'translate(-50%, -50%)' }}
    ></div>
  );
};

export default CustomCursor;