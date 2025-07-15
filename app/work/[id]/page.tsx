"use client";

import { useParams } from "next/navigation";
import { projects } from "../../data/projects";
import { useRef } from "react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import Link from "next/link";
import { BsArrowRightCircleFill, BsArrowRightCircle } from "react-icons/bs";

import { useState, useEffect } from "react";

const WorkPage = () => {
	const { id } = useParams();
	const project = projects.find((p: { id: number }) => p.id === parseInt(id as string, 10));

	const [reveal, setReveal] = useState(false);

	useEffect(() => {
		setReveal(true);
	}, []);

	if (!project) {
		return (
			<div className="flex flex-col items-center justify-center min-h-[60vh] text-center gap-4 pt-28">
				<h1 className="text-9xl font-semibold text-red-400 mb-2">404</h1>
				<h2 className="text-3xl font-semibold text-red-400 mb-2">Project not found</h2>
				<p className="text-neutral-400 mb-4">The project you are looking for does not exist or has been removed.</p>
				<Link
					href="/work"
					target="_blank"
					rel="noopener noreferrer"
					className="group w-fit h-fit px-5 py-3 text-xl opacity-70 hover:opacity-100 rounded-full gap-2 hover:gap-4 mr-2 hover:mr-0 transition-all duration-300 ease-in-out border border-neutral-400 flex justify-evenly items-center"
				>
					<h2>Go to Projects</h2>
					<div className="relative w-8 h-8">
						<BsArrowRightCircleFill className="text-3xl absolute transition-all duration-300 opacity-100 group-hover:opacity-0" />
						<BsArrowRightCircle className="text-3xl absolute transition-all duration-300 opacity-0 group-hover:opacity-100" />
					</div>
				</Link>
			</div>
		);
	}

	const moreProjects = projects.filter((p) => p.id !== project.id);

	return (
		<div className="bg-neutral-950 min-h-screen">
			{/* Hero Section */}
			<div className="relative w-full h-[52vw] min-h-[420px] max-h-[68vh] overflow-hidden flex items-end">
				<img
					src={project.image}
					alt={project.title}
					className="absolute inset-0 w-full h-full object-cover object-center"
				/>
				<div className="relative z-10 p-8 md:p-16">
					<h1
						className={`text-[clamp(2.5rem,8vw,7rem)] font-light leading-none text-neutral-100 drop-shadow-lg transition-all duration-700 ease-out
						${reveal ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
					>
						{project.title}
					</h1>
				</div>
				<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/95 to-transparent z-0" />
			</div>

			{/* Overview Section */}
			<div className="max-w-7xl mx-auto px-4 py-16">
				<div className="mb-10">
					<p className="text-xs text-neutral-400 mb-2">({project.date})</p>
					<h2
						className={`text-2xl md:text-3xl font-medium text-neutral-100 mb-4 transition-all duration-700 delay-200 ease-out
						${reveal ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
					>
						{project.headline}
					</h2>
					<p
						className={`text-lg text-neutral-300 max-w-3xl transition-all duration-700 delay-300 ease-out
						${reveal ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
					>
						{project.description}
					</p>
				</div>
				<div className="grid md:grid-cols-3 gap-10 text-sm md:text-base">
					<div>
						<div
							className={`font-semibold mb-2 text-neutral-200 transition-all duration-700 delay-400 ease-out
							${reveal ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
						>
							Technologies
						</div>
						<ul className="border-t border-neutral-800 text-neutral-300">
							{project.technologies.map((tech: string) => (
								<li key={tech} className="py-1 border-b border-neutral-800 last:border-b-0 pl-2">{tech}</li>
							))}
						</ul>
					</div>
					<div>
						<div className="font-semibold mb-2 text-neutral-200">Challenge</div>
						<p className="text-neutral-300">
							{project.process}
						</p>
					</div>
					<div>
						<div className="font-semibold mb-2 text-neutral-200">Solution</div>
						<p className="text-neutral-300">
							{project.status === 'Completed' ? 'The project was delivered successfully, meeting all goals and requirements.' : 'The project is ongoing with continuous improvements and updates.'}
						</p>
					</div>
				</div>
				{project.link && (
					<div className="mt-10">
						<Link
							href={project.link}
							target="_blank"
							rel="noopener noreferrer"
							className="group w-fit h-fit px-5 py-3 text-xl opacity-70 hover:opacity-100 rounded-full gap-2 hover:gap-4 mr-2 hover:mr-0 transition-all duration-300 ease-in-out border border-neutral-400 flex justify-evenly items-center"
						>
							<h2>Visit website</h2>
							<div className="relative w-8 h-8">
								<BsArrowRightCircleFill className="text-3xl absolute transition-all duration-300 opacity-100 group-hover:opacity-0" />
								<BsArrowRightCircle className="text-3xl absolute transition-all duration-300 opacity-0 group-hover:opacity-100" />
							</div>
						</Link>
					</div>
				)}
			</div>

			{/* More Projects Section */}
			<div className="bg-neutral-900 py-16">
				<div className="max-w-7xl mx-auto px-4">
					<h3 className="text-3xl font-semibold mb-8 text-neutral-100">More projects</h3>
					<div className="grid md:grid-cols-2 gap-8">
						{moreProjects.map((p) => (
							<Link
								key={p.id}
								href={`/work/${p.id}`}
								className="relative group rounded-2xl overflow-hidden bg-neutral-800 shadow hover:shadow-xl transition focus:outline-none focus:ring-2 focus:ring-blue-400"
								aria-label={`View project: ${p.title}`}
							>
								<img src={p.galleryImage || p.image} alt={p.title} className="w-full h-64 object-cover object-center transition-transform group-hover:scale-105 duration-300 ease-in-out" />
								<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex flex-col justify-end p-6">
									<div className="text-lg font-semibold text-white mb-2">{p.title}</div>
									<div className="flex flex-wrap gap-2">
										{p.technologies.slice(0, 6).map((tag) => (
											<span key={tag} className="bg-neutral-100/80 text-neutral-900 px-3 py-1 rounded-full text-xs font-medium">
												{tag}
											</span>
										))}
									</div>
									<IoArrowForwardCircleOutline className="absolute bottom-6 right-6 text-4xl " />
								</div>
							</Link>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default WorkPage;
