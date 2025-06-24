"use client";

import { useEffect, useRef } from "react";
import WebGLCanvas from "./components/WebGLCanvas";
import SmoothScroll from "./components/SmoothScroll";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "./components/Header";
import HorizontalScroll from "./components/HorizontalScroll";

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
		<SmoothScroll>
			<main
				ref={mainRef}
				className="relative w-full min-h-[200vh] text-[#dddddd] bg-[#000000]"
			>
				<section className="relative w-full h-screen overflow-hidden">
					<div
						ref={webglCanvasContainerRef}
						className="absolute top-0 left-0 w-full h-full z-10"
					>
						<WebGLCanvas />
					</div>
					<Header />
				</section>

				<section className="min-h-screen p-12 py-20 z-10">
					<HorizontalScroll />
				</section>
			</main>
		</SmoothScroll>
	);
}
