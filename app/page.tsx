'use client'
import DisplacementAnimation from "./components/DisplacementAnimation"; // Adjusted import path
import Header from "./components/Header";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const Home: React.FC = () => {
	const scrollRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const scrollContainer = scrollRef.current;
		if (!scrollContainer) return;

		let height = scrollContainer.getBoundingClientRect().height;

		gsap.to(
			{},
			{
				scrollTrigger: {
					scroller: window,
					trigger: document.body,
					start: "top top",
					end: "bottom bottom",
					onUpdate: (self) => {
						const scrollPos = self.scroll();
						if (scrollContainer) {
							gsap.to(scrollContainer, {
								y: -scrollPos,
								ease: "power3.out",
								duration: 0.8,
								overwrite: "auto",
							});
						}
					},
					invalidateOnRefresh: true,
				},
			}
		);

		const onResize = () => {
			height = scrollContainer.getBoundingClientRect().height;
			document.body.style.height = height + "px";
		};

		window.addEventListener("resize", onResize);
		onResize();

		return () => {
			window.removeEventListener("resize", onResize);
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
		};
	}, []);
	return (
		<main
			className="w-screen h-screen bg-black relative px-12 select-none"
			ref={scrollRef}
			style={{ willChange: "transform" }}
		>
			<Header />
			<DisplacementAnimation />
			<div className="h-screen">gacergaeg</div>
		</main>
	);
};

export default Home;
