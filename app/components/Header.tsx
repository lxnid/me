"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Link from "next/link";
import AnimatedText from "./AnimatedText";

const Header = () => {
	const textRef = useRef(null);
	const bottomLeftRef = useRef(null);
	const bottomRightRef = useRef(null);
	const linksRef = useRef(null);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger, SplitText);

		const ctx = gsap.context(() => {
			// Initial state - hide the text
			gsap.set(textRef.current, { opacity: 0 });

			// Create timeline for text animation
			const tl = gsap.timeline();

			const textElement = textRef.current;
			if (!textElement) return;

			// Use GSAP SplitText to split the text into characters
			const split = new SplitText(textElement, { type: "chars, lines" });
			const chars = split.chars; // Array of character elements

			// Animate each letter
			tl.to(textElement, { opacity: 1, duration: 0 }).from(chars, {
				opacity: 0,
				y: 40,
				delay: 0.2,
				duration: 1.8,
				ease: "back.out(1.7)",
				stagger: 0.03,
			});

			// Animate other elements
			const otherElements = [
				bottomLeftRef.current,
				bottomRightRef.current,
				linksRef.current,
			];

			tl.from(
				otherElements,
				{
					opacity: 0,
					y: 20,
					duration: 1,
					ease: "power3.out",
					stagger: 0.2,
				},
				"-=1.5" // Start this animation 1.5s before the previous one ends
			);

			// Parallax effect on scroll
			gsap.to(textElement, {
				y: 300,
				ease: "none",
				scrollTrigger: {
					trigger: document.documentElement,
					start: "top top",
					end: "bottom top",
					scrub: true,
				},
			});

			gsap.to(otherElements, {
				color: "#ffffff00",
				ease: "none",
				scrollTrigger: {
					trigger: document.documentElement,
					start: "top top",
					end: "bottom bottom",
					scrub: true,
				},
			});
		});

		return () => ctx.revert();
	}, []);
	return (
		<div className="z-20 absolute w-full h-full flex justify-center items-center pointer-events-none">
			<div className="flex flex-col justify-evenly px-12 py-10 items-center h-full w-full relative">
				<h1
					ref={textRef}
					className="text-7xl md:text-[10rem] leading-none text-white text-center mt-[28vh] opacity-0 font-bold uppercase font-dahlia"
				>
					HIRUSHA <br /> DINIL
				</h1>
				<div className="h-full w-full flex items-end justify-between text-xs md:text-sm text-white uppercase">
					<p ref={bottomLeftRef}>COLOMBO, SL</p>
					<p ref={bottomRightRef}>PORTFOLIO &copy; 2025</p>
					<div
						ref={linksRef}
						className="flex flex-col pointer-events-auto"
					>
						<Link href="/" className="overflow-hidden h-6">
							<AnimatedText>LINKEDIN</AnimatedText>
						</Link>
						<Link href="/" className="overflow-hidden h-6">
							<AnimatedText>GITHUB</AnimatedText>
						</Link>
						<Link href="/" className="overflow-hidden h-6">
							<AnimatedText>EMAIL</AnimatedText>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
