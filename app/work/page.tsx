"use client";


import { projects } from "../data/projects";
import { motion } from "framer-motion";
import ProjectItem from "../components/ProjectItem";

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
