"use client";
import React, { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";

import { Project } from "../data/projects";
import { generateSlug } from "../utils/slugify";

export default function ProjectItem({ project, index }: { project: Project; index: number }) {
	const [isHovered, setIsHovered] = useState(false);
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const itemRef = useRef<HTMLAnchorElement>(null);

	// 3D tilt effect values
	const x = useMotionValue(0);
	const y = useMotionValue(0);

	const mouseXSpring = useSpring(x, { stiffness: 500, damping: 28 });
	const mouseYSpring = useSpring(y, { stiffness: 500, damping: 28 });

	const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["2.5deg", "-2.5deg"]);
	const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-2.5deg", "2.5deg"]);

	const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
		const rect = itemRef.current?.getBoundingClientRect();
		if (!rect) return;

		const width = rect.width;
		const height = rect.height;
		const mouseX = e.clientX - rect.left;
		const mouseY = e.clientY - rect.top;

		// Update mouse position for hover preview
		setMousePosition({
			x: mouseX,
			y: mouseY,
		});

		// Calculate tilt values (-0.5 to 0.5)
		const xPct = (mouseX / width) - 0.5;
		const yPct = (mouseY / height) - 0.5;

		x.set(xPct);
		y.set(yPct);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
		x.set(0);
		y.set(0);
	};

	return (
		<motion.a
			ref={itemRef}
			key={project.id}
			href={`/me/work/${generateSlug(project.title)}`}
			initial={{ opacity: 0, y: 24 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.08 * index, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
			style={{
				rotateX,
				rotateY,
				transformStyle: "preserve-3d",
			}}
			className="cursor-hover-project group px-4 md:px-0 py-6 md:py-8 flex flex-row items-start md:items-center transition-all duration-300 rounded-lg cursor-pointer relative active:bg-neutral-900/50 md:active:bg-transparent"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={handleMouseLeave}
			onMouseMove={handleMouseMove}
		>
			{/* Hover preview - only shown on devices with hover capability */}
			{isHovered && (
				<div
					className="absolute z-10 pointer-events-none hidden md:block"
					style={{
						left: `${mousePosition.x}px`, // Adjust based on image size
						top: `${mousePosition.y - 150}px`,
						transition: 'transform 0.3s ease-out',
					}}
				>
					<Image
						src={project.galleryImage || project.image}
						alt={project.title}
						width={300}
						height={300}
						className="shadow-lg"
						loading="lazy"
						unoptimized
					/>
				</div>
			)}
			<div className="w-full md:w-1/3 text-base md:text-2xl font-normal mb-2 md:mb-0 group-active:text-neutral-300 md:group-active:text-inherit transition-colors">
				{project.title}
			</div>
			<div className="w-full md:w-1/3 text-end md:text-center text-neutral-400 text-xs md:text-sm mt-1 md:mt-0 mb-2 md:mb-0 group-active:text-neutral-300 md:group-active:text-neutral-400 transition-colors">
				{project.role}
			</div>
			<div className="w-full md:w-1/3 hidden md:block text-neutral-400 text-xs md:text-sm mt-1 md:mt-0">
				{project.technologies && (
					<span className="ml-2 text-neutral-500">{project.technologies.slice(0, 3).join(', ')}{project.technologies.length > 3 ? ", ..." : ""}</span>
				)}
			</div>
		</motion.a>
	);
}
