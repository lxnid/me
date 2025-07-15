"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import AnimatedText from "./AnimatedText";
import { IoChevronDown } from "react-icons/io5";

const Header = () => {
	const [showArrow, setShowArrow] = useState(true);
	const textRef = useRef(null);
	const linksRef = useRef(null);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger, SplitText);

		const ctx = gsap.context(() => {
			// Initial state - hide the text
			gsap.set(textRef.current, { opacity: 0 });

			const textElement = textRef.current;
			if (!textElement) return;

			const otherElements = [linksRef.current].filter(Boolean);

			// Create timeline for text animation
			const tl = gsap.timeline({
				onComplete: () => {
					// Fading animation on scroll
					gsap.fromTo(
						textElement,
						{ y: 0, opacity: 1 },
						{
							y: 500,
							opacity: 0,
							ease: "power1.inOut",
							scrollTrigger: {
								trigger: document.documentElement,
								start: "top top",
								end: "+=1200",
								scrub: true,
							},
						}
					);

					gsap.fromTo(
						otherElements,
						{ opacity: 1, y: 0 },
						{
							opacity: 0,
							y: 50,
							ease: "power1.inOut",
							scrollTrigger: {
								trigger: document.documentElement,
								start: "top top",
								end: "+=800",
								scrub: true,
							},
						}
					);
				},
			});

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
		});

		const handleScroll = () => {
			if (window.scrollY > 10) {
				setShowArrow(false);
			} else {
				setShowArrow(true);
			}
		};
		window.addEventListener("scroll", handleScroll);
		return () => {
			ctx.revert();
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	return (
		<>
			<motion.span
				initial={{ opacity: 1, y: 0 }}
				animate={{ opacity: showArrow ? 1 : 0, y: showArrow ? 0 : 30 }}
				transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
				className="fixed bottom-10 left-1/2 transform -translate-x-1/2 text-white text-4xl z-50 md:hidden flex items-center animate-bounce justify-center"
			>
				<IoChevronDown />
			</motion.span>
			<div className="z-20 absolute w-full h-full flex justify-center items-center pointer-events-none">
				<div className="flex flex-col justify-evenly px-12 py-10 items-center h-full w-full relative">
					<div className="h-full w-full flex items-end justify-between text-xs md:text-sm text-white uppercase">
						<h1
							ref={textRef}
							className="text-5xl md:text-[6rem] leading-none text-[#dddddd] text-start mt-[28vh] opacity-0 uppercase"
						>
							HIRUSHA DINIL
						</h1>
						<div
							ref={linksRef}
							className="flex flex-col pointer-events-auto"
						>
							<Link href="https://lk.linkedin.com/in/hirusha-rubasinghe-66bbba313" className="overflow-hidden h-6">
								<AnimatedText>LINKEDIN</AnimatedText>
							</Link>
							<Link href="https://github.com/lxnid" className="overflow-hidden h-6">
								<AnimatedText>GITHUB</AnimatedText>
							</Link>
							<Link href="mailto:hirushadinil@gmail.com" className="overflow-hidden h-6">
								<AnimatedText>EMAIL</AnimatedText>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;
