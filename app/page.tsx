"use client";

import { useEffect, useRef } from "react";
import WebGLCanvas from "./components/WebGLCanvas";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "./components/Header";
import Link from "next/link";
import { BsArrowRightCircle, BsArrowRightCircleFill } from "react-icons/bs";
import AboutMe from "./components/AboutMe";

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
	const mainRef = useRef<HTMLElement>(null);
	const webglCanvasContainerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		// We need to wait for the mainRef to be available to set up the trigger
		if (mainRef.current && webglCanvasContainerRef.current) {
			// Parallax effect for the WebGL Canvas container
			gsap.to(webglCanvasContainerRef.current, {
				y: "30%", // Move the container down by 30% of its height as user scrolls
				scrollTrigger: {
					trigger: mainRef.current, // The scroll is triggered by the main container
					start: "top top", // Starts when the top of the trigger hits the top of the viewport
					end: "bottom top", // Ends when the bottom of the trigger hits the top of the viewport
					scrub: true, // Smoothly animates the 'y' property with the scroll
				},
			});
		}

		ScrollTrigger.refresh();
	}, []);

	return (
		<main
			ref={mainRef}
			className="relative w-full min-h-[200vh]"
		>
			<section
				id="hero-section"
				className="relative w-full h-screen overflow-hidden"
			>
				<div
					ref={webglCanvasContainerRef}
					className="absolute top-0 left-0 w-full h-full z-10"
				>
					<WebGLCanvas />
				</div>
				<Header />
			</section>

			<section className="pt-0 md:pt-20 z-10 relative">
				<div className="w-full h-[15vh] flex justify-end items-end pr-12">
					<Link
						href={"/work"}
						className="group w-fit h-fit px-5 py-3 text-xl opacity-70 hover:opacity-100 rounded-full gap-2 hover:gap-4 mr-2 hover:mr-0 transition-all duration-300 ease-in-out border border-neutral-400 flex justify-evenly items-center"
					>
						<h2>All Work</h2>
						<div className="relative w-8 h-8">
							<BsArrowRightCircleFill className="text-3xl absolute transition-all duration-300 opacity-100 group-hover:opacity-0" />
							<BsArrowRightCircle className="text-3xl absolute transition-all duration-300 opacity-0 group-hover:opacity-100" />
						</div>
					</Link>
				</div>
			</section>

			{/* About Me section */}
			<section id="about-me">
				<AboutMe />
			</section>
			<section className="h-screen"></section>
		</main>
	);
}
