"use client";

import { useParams } from "next/navigation";
import { projects } from "../../data/projects";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { IoChevronDown } from "react-icons/io5";

gsap.registerPlugin(ScrollTrigger, SplitText);

const WorkPage = () => {
	const { id } = useParams();
	const project = projects.find((p) => p.id === parseInt(id as string, 10));
	const imageRef = useRef<HTMLImageElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);
	const downArrowRef = useRef<HTMLSpanElement>(null);
	const titleRef = useRef<HTMLHeadingElement>(null);
	const overviewRef = useRef<HTMLDivElement>(null);
	const techRefs = useRef<HTMLSpanElement[]>([]);
	const infoRefs = useRef<HTMLDivElement[]>([]);
	const borderRef = useRef<HTMLDivElement>(null);
	const overviewHeadingRef = useRef<HTMLDivElement>(null);
	const techHeadingRef = useRef<HTMLDivElement>(null);

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

			// Title letter animation
			if (titleRef.current) {
				const split = new SplitText(titleRef.current, {
					type: "chars",
				});
				gsap.from(split.chars, {
					y: "100%",
					opacity: 0,
					stagger: 0.03,
					duration: 0.8,
					ease: "power2.out",
					scrollTrigger: {
						trigger: titleRef.current,
						start: "top 80%",
						end: "bottom top",
						toggleActions: "restart none none reverse",
					},
				});
			}

			// Info row animations
			infoRefs.current.forEach((info, index) => {
				gsap.from(info, {
					y: 50,
					opacity: 0,
					duration: 0.8,
					delay: index * 0.1,
					ease: "power2.out",
					scrollTrigger: {
						trigger: info,
						start: "top 80%",
						end: "bottom top",
						toggleActions: "restart none none reverse",
					},
				});
			});

			// Border fade in
			if (borderRef.current) {
				gsap.fromTo(
					borderRef.current,
					{ scaleX: 0, transformOrigin: "left" },
					{
						scaleX: 1,
						duration: 1,
						ease: "power2.out",
						scrollTrigger: {
							trigger: borderRef.current,
							start: "top 80%",
							end: "bottom top",
							toggleActions: "restart none none reverse",
						},
					}
				);
			}

			// Overview heading animation
			if (overviewHeadingRef.current) {
				gsap.from(overviewHeadingRef.current, {
					x: -50,
					opacity: 0,
					duration: 0.8,
					ease: "power2.out",
					scrollTrigger: {
						trigger: overviewHeadingRef.current,
						start: "top 80%",
						end: "bottom top",
						toggleActions: "restart none none reverse",
					},
				});
			}

			// Overview paragraph line animation
			if (overviewRef.current) {
				const split = new SplitText(overviewRef.current, {
					type: "lines",
				});
				gsap.from(split.lines, {
					y: "100%",
					opacity: 0,
					stagger: 0.1,
					duration: 0.8,
					ease: "power2.out",
					scrollTrigger: {
						trigger: overviewRef.current,
						start: "top 80%",
						end: "bottom top",
						toggleActions: "restart none none reverse",
					},
				});
			}

			// Tech heading animation
			if (techHeadingRef.current) {
				gsap.from(techHeadingRef.current, {
					x: -50,
					opacity: 0,
					duration: 0.8,
					ease: "power2.out",
					scrollTrigger: {
						trigger: techHeadingRef.current,
						start: "top 95%",
						end: "bottom top",
						toggleActions: "restart none none reverse",
					},
				});
			}

			// Tech stack animations
			techRefs.current.forEach((tech, index) => {
				gsap.from(tech, {
					y: 20,
					opacity: 0,
					duration: 0.5,
					delay: index * 0.1,
					ease: "power2.out",
					scrollTrigger: {
						trigger: tech,
						start: "top 98%",
						end: "bottom top",
						toggleActions: "restart none none reverse",
					},
				});
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
			<h1
				ref={titleRef}
				className="text-[2.5rem] md:text-[9rem] font-bold max-w-[90rem] leading-none mx-auto mt-12 mb-15 tracking-tight uppercase"
			>
				{project.title}
			</h1>

			{/* Info Row */}
			<div className="max-w-[90rem] mx-auto w-full grid grid-cols-2 md:grid-cols-4 gap-28 px-4 mb-2">
				<div
					ref={(el) => {
						if (el) infoRefs.current[0] = el;
					}}
					className="flex flex-col items-start"
				>
					<span className="text-xs md:text-sm uppercase tracking-widest font-semibold">
						Work Aspect
					</span>
					<span className="text-base md:text-lg font-medium uppercase mt-1">
						{project.role}
					</span>
				</div>
				<div
					ref={(el) => {
						if (el) infoRefs.current[1] = el;
					}}
					className="flex flex-col items-start"
				>
					<span className="text-xs md:text-sm uppercase tracking-widest font-semibold">
						Duration
					</span>
					<span className="text-base md:text-lg font-medium uppercase mt-1">
						{project.duration}
					</span>
				</div>
				<div
					ref={(el) => {
						if (el) infoRefs.current[2] = el;
					}}
					className="flex flex-col items-start"
				>
					<span className="text-xs md:text-sm uppercase tracking-widest font-semibold">
						Status
					</span>
					<span className="text-base md:text-lg font-medium uppercase mt-1">
						{project.status}
					</span>
				</div>
				<div
					ref={(el) => {
						if (el) infoRefs.current[3] = el;
					}}
					className="flex flex-col items-start"
				>
					<span className="text-xs md:text-sm uppercase tracking-widest font-semibold">
						Type
					</span>
					<span className="text-base md:text-lg font-medium uppercase mt-1">
						{project.type}
					</span>
				</div>
			</div>
			<div
				ref={borderRef}
				className="max-w-[90rem] mx-auto w-full border-b border-neutral-300 mb-20 px-4"
			/>

			{/* Overview Section */}
			<div className="max-w-[90rem] mx-auto w-full px-4 mb-20">
				<div
					ref={overviewHeadingRef}
					className="text-xs md:text-sm uppercase tracking-widest font-semibold mb-2"
				>
					• Overview
				</div>
				<div
					ref={overviewRef}
					className="text-2xl md:text-4xl font-normal leading-snug mb-8"
				>
					{project.description}
				</div>
			</div>

			{/* Technology Stack Section */}
			<div className="max-w-[90rem] mx-auto w-full px-4 mb-2">
				<div
					ref={techHeadingRef}
					className="text-xs md:text-sm uppercase tracking-widest font-semibold mb-2"
				>
					• Technology Stack
				</div>
				<div className="flex flex-wrap gap-3">
					{project.technologies.map((tech) => (
						<span
							ref={(el) => {
								if (el && !techRefs.current.includes(el)) {
									techRefs.current.push(el);
								}
							}}
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
