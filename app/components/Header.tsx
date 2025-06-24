"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

const Header = () => {
	const textRef = useRef(null);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		// Initial state - hide the text
		gsap.set(textRef.current, { opacity: 0 });

		// Create timeline for text animation
		const tl = gsap.timeline();

		const textElement = textRef.current;
		if (!textElement) return;

		// Use GSAP SplitText to split the text into characters
		const split = new SplitText(textElement, { type: "chars, lines" });
		const chars = split.chars; // Array of character elements

		// Clear previous content and append split chars
		(textElement as HTMLElement).innerHTML = "";
		chars.forEach((char) => {
			if (char.textContent === "D") {
				const br = document.createElement("br");
				(textElement as HTMLElement).appendChild(br);
			}
			(textElement as HTMLElement).appendChild(char);
		});

		const spans = chars;

		// Animate each letter
		tl.to(textElement, { opacity: 1, duration: 0 }).from(spans, {
			opacity: 0,
			y: 40,
			delay: 0.2,
			duration: 1.8,
			ease: "back.out(1.7)",
			stagger: 0.03,
		});

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

	}, []);
	return (
		<div className="z-20 absolute w-full h-full flex justify-center items-center pointer-events-none">
			<h1 ref={textRef} className="text-[10rem] leading-none text-white text-center opacity-0 font-bold">
				HIRUSHA <br /> DINIL
			</h1>
		</div>
	);
};

export default Header;
