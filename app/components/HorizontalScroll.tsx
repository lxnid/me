"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";
import { projects } from "../data/projects";

interface HorizontalScrollProps {
	projectCount: "all" | number;
	inHome?: boolean;
	children?: React.ReactNode;
}

const HorizontalScroll: React.FC<HorizontalScrollProps> = ({
	projectCount,
	inHome = false,
	children,
}) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const pinContainerRef = useRef<HTMLDivElement>(null);
	const sectionsRef = useRef<HTMLDivElement[]>([]);
	const sectionHead = useRef<HTMLHeadingElement>(null);
	const sectionDescription = useRef<HTMLParagraphElement>(null);

	const projectsToDisplay =
		projectCount === "all" ? projects : projects.slice(0, projectCount);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		const ctx = gsap.context(() => {
			const sections = sectionsRef.current;
			const container = containerRef.current;
			const pinContainer = pinContainerRef.current;

			if (!container || sections.length === 0 || !pinContainer) return;

			gsap.to(sections, {
				// Use a function to dynamically calculate xPercent
				xPercent: () => {
					const numProjects = projectsToDisplay.length;
					if (numProjects <= 1) {
						return 0;
					}

					// Get actual widths and gaps from the DOM for accuracy
					const containerWidth = container.offsetWidth;
					const sectionWidth = sections[0].offsetWidth - 60;
					const gap = parseFloat(
						window.getComputedStyle(container).gap
					);

					// Calculate the total width of all project cards including gaps
					const totalContentWidth =
						numProjects * sectionWidth + (numProjects - 1) * gap;

					// Calculate the distance that needs to be scrolled
					const scrollDistance = totalContentWidth - containerWidth;

					// If content fits, no scroll is needed
					if (scrollDistance <= 0) {
						return 0;
					}

					// Convert the scroll distance to a percentage of a single section's width
					return (-scrollDistance / sectionWidth) * 100;
				},
				ease: "ease.inOut",
				scrollTrigger: {
					trigger: pinContainer,
					pin: true,
					scrub: 0.1,
					start: "center center",
					end: () => `+=${(container as HTMLElement).offsetWidth}`,
					invalidateOnRefresh: true,
				},
			});

			if (inHome) {
				const secStaticEls = [
					sectionHead.current,
					sectionDescription.current,
				];
				gsap.from(secStaticEls, {
					opacity: 0,
					y: 20,
					ease: "power2.out",
					stagger: 0.2,
					duration: 1,
					scrollTrigger: {
						trigger: pinContainer,
						start: "top 70%",
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
						start: "top 40%",
					},
				});
			}

			sections.forEach((section) => {
				const hover = gsap.to(section, {
					scale: 1.02,
					translateY: -10,
					duration: 0.5,
					paused: true,
					ease: "power2.inOut",
				});
				section.addEventListener("mouseenter", () => hover.play());
				section.addEventListener("mouseleave", () => hover.reverse());
			});
		}, pinContainerRef);

		return () => ctx.revert();
	}, [projectsToDisplay, inHome]);

	const addToRefs = (el: HTMLDivElement) => {
		if (el && !sectionsRef.current.includes(el)) {
			sectionsRef.current.push(el);
		}
	};

	return (
		<div
			ref={pinContainerRef}
			className={`relative overflow-hidden ${
				inHome ? "h-screen justify-end" : ""
			} flex flex-col`}
		>
			{inHome && (
				<div className="absolute top-16 md:top-20 w-full pl-12 flex flex-col items-start">
					<h2 ref={sectionHead} className="text-lg md:text-xl py-10">
						Selected Work
					</h2>
					<p
						ref={sectionDescription}
						className="text-2xl md:text-4xl w-full md:w-[30vw] md:py-4"
					>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</p>
				</div>
			)}
			{children}
			<div
				ref={containerRef}
				className="container flex flex-nowrap w-[100%] gap-2 h-[65vh]"
			>
				{projectsToDisplay.map((project) => (
					<div
						key={project.id}
						ref={addToRefs}
						className="panel w-full min-w-[60vw] sm:min-w-[35vw] h-full bg-cover bg-start"
						style={{ backgroundImage: `url(${project.image})` }}
					>
						<Link
							href={project.link}
							className="w-full h-full flex justify-center items-center text-white text-4xl"
						></Link>
					</div>
				))}
			</div>
		</div>
	);
};

export default HorizontalScroll;
