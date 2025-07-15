"use client";


import { projects } from "../data/projects";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useRef } from "react";

export default function ProjectGallery() {
	return (
		<div className="px-4 md:px-8 py-16 mt-64">
			<motion.h1
				initial={{ opacity: 0, y: 40 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
				className="text-5xl md:text-7xl mb-12"
			>
				Projects
			</motion.h1>
			<div className="w-full">
				<div className="divide-y divide-neutral-900">
					{projects.map((project, i) => (
						<ProjectItem key={project.id} project={project} index={i} />
					))}
				</div>
			</div>
		</div>
	);
}

function ProjectItem({ project, index }: { project: any; index: any }) {
	const [isHovered, setIsHovered] = useState(false);
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const itemRef = useRef<HTMLAnchorElement>(null);

	const handleMouseMove = (e: any) => {
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
			href={`/work/${project.id}`}
			initial={{ opacity: 0, y: 24 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.08 * index, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
			className="group px-0 py-6 md:py-8 flex flex-row items-start md:items-center transition-all duration-300 rounded-lg cursor-pointer relative"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			onMouseMove={handleMouseMove}
		>
			{isHovered && (
				<div
					className="absolute z-10 pointer-events-none"
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
					/>
				</div>
			)}
			<div className="w-full md:w-1/3 text-base md:text-2xl font-normal mb-2 md:mb-0">
				{project.title}
			</div>
			<div className="w-full md:w-1/3 text-end md:text-center text-neutral-400 text-xs md:text-sm mt-1 md:mt-0 mb-2 md:mb-0">
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
