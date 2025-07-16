'use client'
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

interface AnimatedTextProps {
    children: string;
    className?: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ children, className }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const letters = container.querySelectorAll('.letter-container');
        const timelines: gsap.core.Timeline[] = [];

        letters.forEach((letter) => {
            const original = letter.querySelector('.original') as HTMLElement;
            const duplicate = letter.querySelector('.duplicate') as HTMLElement;

            if (original && duplicate) {
                const tl = gsap.timeline({ paused: true });

                tl.to(original, {
                    rotationX: -90,
                    duration: 0.5,
                    ease: 'power2.inOut',
                }).to(
                    duplicate,
                    {
                        y: '0%',
                        opacity: 0.5,
                        duration: 0.5,
                        ease: 'power2.inOut',
                    },
                    '-=0.5'
                );

                timelines.push(tl);
            }
        });

        const handleMouseEnter = () => {
            timelines.forEach((tl, index) => {
                setTimeout(() => {
                    tl.play();
                }, index * 40);
            });
        };

        const handleMouseLeave = () => {
            timelines.forEach((tl, index) => {
                setTimeout(() => {
                    tl.reverse();
                }, index * 40);
            });
        };

        container.addEventListener('mouseenter', handleMouseEnter);
        container.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            container.removeEventListener('mouseenter', handleMouseEnter);
            container.removeEventListener('mouseleave', handleMouseLeave);
            timelines.forEach((tl) => tl.kill());
        };
    }, [children]);

    return (
        <div ref={containerRef} className={`group [perspective:800px] ${className}`}>
            <div className="flex cursor-pointer tracking-wider">
                {children.split('').map((letter, index) => (
                    <div key={index} className="letter-container relative h-[1em] origin-bottom">
                        <span className="original inline-block origin-bottom">
                            {letter === ' ' ? '\u00A0' : letter}
                        </span>
                        <span className="duplicate absolute left-0 top-0 inline-block origin-bottom opacity-0 [transform:translateY(100%)]">
                            {letter === ' ' ? '\u00A0' : letter}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AnimatedText;