"use client";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import { Project } from "../data/projects";
import { generateSlug } from "../utils/slugify";

export default function ProjectItem({ project, index }: { project: Project; index: number }) {
	const [isHovered, setIsHovered] = useState(false);
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const itemRef = useRef<HTMLAnchorElement>(null);

	const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
		const rect = itemRef.current?.getBoundingClientRect();
		if (!rect) return;
		setMousePosition({
			x: e.clientX - rect.left,
			y: e.clientY - rect.top,
		});
	};

	return (
		<motion.a
			ref={itemRef}
			key={project.id}
			href={`/me/work/${generateSlug(project.title)}`}
			initial={{ opacity: 0, y: 24 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.08 * index, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
			className="group px-4 md:px-0 py-6 md:py-8 flex flex-row items-start md:items-center transition-all duration-300 rounded-lg cursor-pointer relative active:bg-neutral-900/50 md:active:bg-transparent"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
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
