"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";

const HorizontalScroll = () => {
	const containerRef = useRef(null);
	const pinContainerRef = useRef(null);
  const sectionsRef = useRef<HTMLDivElement[]>([]);
  const sectionHead = useRef(null);
  const sectionDescription = useRef(null);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		const sections = sectionsRef.current;
		const container = containerRef.current;
		const pinContainer = pinContainerRef.current;

		if (!container || sections.length === 0 || !pinContainer) return;

		const scrollTween = gsap.to(sections, {
			xPercent: -45 * (sections.length - 1),
			ease: "ease.inOut",
			scrollTrigger: {
				trigger: pinContainer,
				pin: true,
				scrub: 0.1,
				start: "center center",
				end: () => `+=${(container as HTMLElement).offsetWidth}`,
			},
		});

    const secStaticEls = [sectionHead.current, sectionDescription.current];
		gsap.from(secStaticEls, {
			opacity: 0,
			y: 20,
			ease: "power2.out",
			stagger: 0.2,
			duration: 1,
			scrollTrigger: {
				trigger: pinContainer,
				start: "top 70%", // Trigger when the top of the container hits 80% of the viewport height
				once: true, // Animate only once
			},
		});
		gsap.from(container, {
			opacity: 0,
			y: 20,
			ease: "power2.out",
			stagger: 0.2,
			duration: 1,
			scrollTrigger: {
				trigger: pinContainer,
				start: "top 40%", // Trigger when the top of the container hits 80% of the viewport height
				once: true, // Animate only once
			},
		});

		sections.forEach((section) => {
			const hover = gsap.to(section, { scale: 1.02, translateY: -10, duration: 0.5, paused: true, ease: "power2.inOut" });
			section.addEventListener("mouseenter", () => hover.play());
			section.addEventListener("mouseleave", () => hover.reverse());
		});

		return () => {
			scrollTween.kill();
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
	}, []);

	const addToRefs = (el: HTMLDivElement) => {
		if (el && !sectionsRef.current.includes(el)) {
			sectionsRef.current.push(el);
		}
	};

	return (
		<div
			ref={pinContainerRef}
			className="relative h-screen flex flex-col justify-end"
		>
			<div className="absolute top-20 w-full flex flex-col items-start">
				<h2 ref={sectionHead} className="text-xl py-10">Selected Work</h2>
				<p ref={sectionDescription} className="text-4xl w-[30vw] py-4">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</p>
			</div>
			<div
				ref={containerRef}
				className="container flex flex-nowrap w-[100%] gap-2 h-[65vh]"
			>
				<div ref={addToRefs} className="panel w-full min-w-[35vw] h-full">
					<Link
						href="/work/1"
						className="bg-red-500 w-full h-full flex justify-center items-center text-white text-4xl"
					>
						Panel 1
					</Link>
				</div>
				<div ref={addToRefs} className="panel w-full min-w-[35vw] h-full">
          <Link
            href="/work/2"
						className="bg-blue-500 w-full h-full flex justify-center items-center text-white text-4xl"
					>
						Panel 2
					</Link>
				</div>
				<div ref={addToRefs} className="panel w-full min-w-[35vw] h-full">
					<Link
						href="/work/3"
						className="bg-green-500 w-full h-full flex justify-center items-center text-white text-4xl"
					>
						Panel 3
					</Link>
				</div>
				<div ref={addToRefs} className="panel w-full min-w-[35vw] h-full">
					<Link
						href="/work/4"
						className="bg-purple-500 w-full h-full flex justify-center items-center text-white text-4xl"
					>
						Panel 4
					</Link>
				</div>
				{/* <div
					ref={addToRefs}
					className="panel bg-yellow-500 w-full min-w-[35vw] h-full flex justify-center items-center text-white text-4xl"
				>
					Panel 5
				</div> */}
			</div>
		</div>
	);
};

export default HorizontalScroll;
