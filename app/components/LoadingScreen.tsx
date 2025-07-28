'use client';
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(SplitText);

    const ctx = gsap.context(() => {
      const container = containerRef.current;
      const nameElement = nameRef.current;
      const circle = circleRef.current;
      const progressElement = progressRef.current;

      if (!container || !nameElement || !circle || !progressElement) return;

      // Initial setup
      gsap.set(container, { opacity: 1 });
      gsap.set([nameElement, circle, progressElement], { opacity: 0 });
      gsap.set(circle, { scale: 0, rotation: 0 });

      // Master timeline
      const masterTl = gsap.timeline();

      // Phase 1: Circle emergence (0-1.5s)
      masterTl.to(circle, {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: 'power3.out'
      })
      .to(circle, {
        rotation: 180,
        duration: 2,
        ease: 'power2.inOut'
      }, 0.5);

      // Phase 2: Progress animation (1.5-4s)
      masterTl.to(progressElement, {
        opacity: 1,
        duration: 0.5,
        ease: 'power2.out'
      }, 1.5)
      .to({}, {
        duration: 2.5,
        ease: 'power2.inOut',
        onUpdate: function() {
          const currentProgress = Math.round(this.progress() * 100);
          setProgress(currentProgress);
        }
      }, 1.5);

      // Phase 3: Name reveal (3-4.5s)
      const split = new SplitText(nameElement, { type: 'chars' });
      const chars = split.chars;
      
      masterTl.to(nameElement, {
        opacity: 1,
        duration: 0.3
      }, 3)
      .from(chars, {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.03
      }, 3.2);

      // Phase 4: Exit sequence (4.5-6s)
      masterTl.to(progressElement, {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.in'
      }, 4.5)
      .to(chars, {
        opacity: 0,
        y: -20,
        duration: 0.8,
        ease: 'power2.in',
        stagger: 0.02
      }, 4.8)
      .to(circle, {
        scale: 0,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.in'
      }, 5.2)
      .to(container, {
        opacity: 0,
        duration: 0.6,
        ease: 'power2.inOut',
        onComplete: () => {
          onComplete();
        }
      }, 5.5);

    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] bg-[#000000] flex items-center justify-center overflow-hidden"
    >
      {/* Minimal geometric circle */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          ref={circleRef}
          className="w-32 h-32 md:w-40 md:h-40 border border-[#333333] rounded-full opacity-0"
          style={{
            background: 'conic-gradient(from 0deg, transparent 0deg, rgba(221,221,221,0.1) 90deg, transparent 180deg)'
          }}
        />
      </div>

      {/* Curved progress indicator */}
      <div
        ref={progressRef}
        className="absolute bottom-20 left-1/2 transform -translate-x-1/2 opacity-0"
      >
        <div className="flex items-center space-x-4">
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#dddddd] to-transparent" />
          <span className="text-xs text-[#888888] font-light tracking-[0.2em] min-w-[3rem] text-center">
            {progress.toString().padStart(2, '0')}
          </span>
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#dddddd] to-transparent" />
        </div>
      </div>

      {/* Main name display */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          ref={nameRef}
          className="text-4xl md:text-6xl lg:text-7xl font-light text-[#dddddd] uppercase tracking-[0.3em] opacity-0"
          style={{ fontFamily: 'PP Neuemontreal, sans-serif' }}
        >
          HIRUSHA DINIL
        </div>
      </div>

      {/* Subtle corner accents */}
      <div className="absolute top-8 left-8 w-8 h-8 border-l border-t border-[#333333] opacity-30" />
      <div className="absolute top-8 right-8 w-8 h-8 border-r border-t border-[#333333] opacity-30" />
      <div className="absolute bottom-8 left-8 w-8 h-8 border-l border-b border-[#333333] opacity-30" />
      <div className="absolute bottom-8 right-8 w-8 h-8 border-r border-b border-[#333333] opacity-30" />
    </div>
  );
};

export default LoadingScreen;