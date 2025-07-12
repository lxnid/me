"use client";

import { useParams } from "next/navigation";
import { projects } from "../../data/projects";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IoChevronDown } from "react-icons/io5";

gsap.registerPlugin(ScrollTrigger);

const WorkPage = () => {
	const { id } = useParams();
	const project = projects.find((p) => p.id === parseInt(id as string, 10));
	const imageRef = useRef<HTMLImageElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);
	const downArrowRef = useRef<HTMLSpanElement>(null);

	useEffect(() => {
		if (downArrowRef.current) {
			gsap.to(downArrowRef.current, {
				y: 10,
				duration: 0.8,
				repeat: -1,
				yoyo: true,
				ease: "sine.inOut",
			});
		}
	}, []);

	useEffect(() => {
		const ctx = gsap.context(() => {
			// Image scale animation
			gsap.to(imageRef.current, {
				scale: 1.2,
				ease: "none",
				scrollTrigger: {
					trigger: ".project-page",
					start: "top top",
					end: "bottom top",
					scrub: true,
					pin: true,
				},
			});

			// Down arrow fade out
			if (downArrowRef.current) {
				gsap.to(downArrowRef.current, {
					opacity: 0,
					ease: "none",
					scrollTrigger: {
						trigger: imageRef.current,
						start: "top top",
						end: "50% top",
						scrub: true,
					},
				});
			}
		});

		return () => ctx.revert();
	}, []);

	useEffect(() => {
		if (!imageRef.current || !containerRef.current) return;
		const ctx = gsap.context(() => {
			gsap.to(imageRef.current, {
				width: "90vw",
				height: "80vh",
				borderRadius: "20px",
				ease: "ease",
				scrollTrigger: {
					trigger: containerRef.current,
					start: "top top",
					end: "+=300",
					scrub: true,
					pin: false,
				},
			});
		}, containerRef);
		return () => ctx.revert();
	}, []);

	if (!project) {
		return <div>Project not found</div>;
	}

	return (
		<div ref={containerRef} className="relative">
			{/* Full-screen image container */}
			<div className="relative w-full overflow-hidden">
				<img
					ref={imageRef}
					src={project.image}
					alt={project.title}
					className="w-full h-full object-cover mx-auto"
					style={{
						width: "100vw",
						height: "100vh",
						borderRadius: "0px",
						zIndex: 0,
					}}
				/>
				<span
					ref={downArrowRef}
					className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-8 text-white text-4xl z-10 flex items-center justify-center"
				>
					<IoChevronDown />
				</span>
			</div>

			{/* Title */}
			<h1 className="text-[2.5rem] md:text-[9rem] font-bold max-w-[90rem] leading-none mx-auto mt-12 mb-15 tracking-tight uppercase">
				{project.title}
			</h1>

			{/* Info Row */}
			<div className="max-w-[90rem] mx-auto w-full grid grid-cols-2 md:grid-cols-4 gap-28 px-4 mb-2">
				<div className="flex flex-col items-start">
					<span className="text-xs md:text-sm uppercase tracking-widest font-semibold">
						Work Aspect
					</span>
					<span className="text-base md:text-lg font-medium uppercase mt-1">
						{project.role}
					</span>
				</div>
				<div className="flex flex-col items-start">
					<span className="text-xs md:text-sm uppercase tracking-widest font-semibold">
						Duration
					</span>
					<span className="text-base md:text-lg font-medium uppercase mt-1">
						{project.duration}
					</span>
				</div>
				<div className="flex flex-col items-start">
					<span className="text-xs md:text-sm uppercase tracking-widest font-semibold">
						Status
					</span>
					<span className="text-base md:text-lg font-medium uppercase mt-1">
						{project.status}
					</span>
				</div>
				<div className="flex flex-col items-start">
					<span className="text-xs md:text-sm uppercase tracking-widest font-semibold">
						Type
					</span>
					<span className="text-base md:text-lg font-medium uppercase mt-1">
						{project.type}
					</span>
				</div>
			</div>
			<div className="max-w-[90rem] mx-auto w-full border-b border-neutral-300 mb-20 px-4" />

			{/* Overview Section */}
			<div className="max-w-[90rem] mx-auto w-full px-4 mb-20">
				<div className="text-xs md:text-sm uppercase tracking-widest font-semibold mb-2">
					• Overview
				</div>
				<div className="text-2xl md:text-4xl font-normal leading-snug mb-8">
					{project.description}
				</div>
			</div>

			{/* Technology Stack Section */}
			<div className="max-w-[90rem] mx-auto w-full px-4 mb-2">
				<div className="text-xs md:text-sm uppercase tracking-widest font-semibold mb-2">
					• Technology Stack
				</div>
				<div className="flex flex-wrap gap-3">
					{project.technologies.map((tech) => (
						<span
							key={tech}
							className="bg-neutral-300 text-neutral-800 px-5 py-2 rounded-full text-base md:text-lg font-medium shadow-sm"
						>
							{tech}
						</span>
					))}
				</div>
			</div>
			<div className="h-32 md:h-64" />
		</div>
	);
};

export default WorkPage;
