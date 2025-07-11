"use client";
import React, { useRef, useEffect, useState } from "react";
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
	const [isMobile, setIsMobile] = useState(false);

	// Use refs instead of state for drag tracking to prevent re-renders
	const dragRef = useRef({
		isDragging: false,
		startX: 0,
		scrollLeft: 0,
		lastX: 0,
		velocity: 0,
		timestamp: 0,
		frame: 0,
		momentumID: 0,
	});

	const projectsToDisplay =
		projectCount === "all" ? projects : projects.slice(0, projectCount);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 640);
		};

		handleResize(); // Initial check
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const handleMomentumScroll = () => {
		if (!containerRef.current || Math.abs(dragRef.current.velocity) < 0.1) {
			dragRef.current.velocity = 0;
			cancelAnimationFrame(dragRef.current.momentumID);
			return;
		}

		dragRef.current.velocity *= 0.95; // Decay factor
		containerRef.current.scrollLeft += dragRef.current.velocity;
		dragRef.current.momentumID =
			requestAnimationFrame(handleMomentumScroll);
	};

	const handleTouchStart = (e: React.TouchEvent) => {
		if (!isMobile || !containerRef.current) return;

		// Cancel any ongoing momentum scrolling
		cancelAnimationFrame(dragRef.current.momentumID);
		dragRef.current.velocity = 0;

		dragRef.current.isDragging = true;
		dragRef.current.startX = e.touches[0].pageX;
		dragRef.current.lastX = dragRef.current.startX;
		dragRef.current.scrollLeft = containerRef.current.scrollLeft;
		dragRef.current.timestamp = Date.now();
	};

	const handleTouchMove = (e: React.TouchEvent) => {
		if (!dragRef.current.isDragging || !containerRef.current || !isMobile)
			return;
		e.preventDefault();

		const currentX = e.touches[0].pageX;
		const deltaX = dragRef.current.lastX - currentX;
		const currentTime = Date.now();
		const deltaTime = currentTime - dragRef.current.timestamp;

		// Update velocity (pixels per millisecond)
		if (deltaTime > 0) {
			dragRef.current.velocity = (deltaX / deltaTime) * 16; // Convert to pixels per frame (assuming 60fps)
		}

		containerRef.current.scrollLeft += deltaX;

		dragRef.current.lastX = currentX;
		dragRef.current.timestamp = currentTime;
	};

	const handleTouchEnd = () => {
		if (!dragRef.current.isDragging) return;

		dragRef.current.isDragging = false;

		// Start momentum scrolling
		if (Math.abs(dragRef.current.velocity) > 0.1) {
			dragRef.current.momentumID =
				requestAnimationFrame(handleMomentumScroll);
		}
	};

	// Separate animation setup effect
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		const ctx = gsap.context(() => {
			const sections = sectionsRef.current;
			const container = containerRef.current;
			const pinContainer = pinContainerRef.current;

			if (!container || sections.length === 0 || !pinContainer) return;

			if (!isMobile) {
				gsap.to(sections, {
					xPercent: () => {
						const numProjects = projectsToDisplay.length;
						if (numProjects <= 1) return 0;

						const containerWidth = container.offsetWidth;
						const sectionWidth = sections[0].offsetWidth - 60;
						const gap = parseFloat(
							window.getComputedStyle(container).gap
						);

						const totalContentWidth =
							numProjects * sectionWidth +
							(numProjects - 1) * gap;

						const scrollDistance =
							totalContentWidth - containerWidth;

						if (scrollDistance <= 0) return 0;

						return (-scrollDistance / sectionWidth) * 100;
					},
					ease: "ease.inOut",
					scrollTrigger: {
						trigger: pinContainer,
						pin: true,
						scrub: 0.1,
						start: "center center",
						end: () =>
							`+=${(container as HTMLElement).offsetWidth}`,
						invalidateOnRefresh: true,
					},
				});
			}

			// Setup hover animations
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
	}, [projectsToDisplay, isMobile]);

	// Separate effect for entrance animations
	useEffect(() => {
		if (!inHome) return;

		gsap.registerPlugin(ScrollTrigger);
		const ctx = gsap.context(() => {
			const container = containerRef.current;
			const pinContainer = pinContainerRef.current;

			if (!container || !pinContainer) return;

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
		}, pinContainerRef);

		return () => ctx.revert();
	}, [inHome]);

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
				className={`container flex flex-nowrap w-[100%] gap-2 h-[65vh] ${
					isMobile ? "overflow-x-auto touch-pan-x" : ""
				}`}
				onTouchStart={handleTouchStart}
				onTouchMove={handleTouchMove}
				onTouchEnd={handleTouchEnd}
				style={{
					WebkitOverflowScrolling: "touch",
				}}
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
