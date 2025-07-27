"use client";

import { motion } from "framer-motion";
import { IoArrowForwardCircleOutline, IoLogoVercel } from "react-icons/io5";
import { generateSlug } from "../utils/slugify";
import { Project } from "../data/projects";
import {
	FaBullseye,
	FaReact,
	FaAws,
} from "react-icons/fa";
import {
	BiLogoCss3,
	BiLogoDocker,
	BiLogoFirebase,
	BiLogoGit,
	BiLogoGraphql,
	BiLogoHtml5,
	BiLogoJavascript,
	BiLogoMongodb,
	BiLogoNetlify,
	BiLogoNodejs,
	BiLogoPostgresql,
	BiLogoPython,
	BiLogoTailwindCss,
	BiLogoTypescript,
} from "react-icons/bi";
import Link from "next/link";
import { BsArrowRightCircleFill, BsArrowRightCircle } from "react-icons/bs";
import Button from "@/app/components/Button";
import Image from "next/image";
import { RiNextjsFill } from "react-icons/ri";
import { AiTwotoneApi } from "react-icons/ai";
import { SiRender } from "react-icons/si";



interface WorkPageClientProps {
	project: Project | undefined;
	moreProjects: Project[];
}

const ProjectPage = ({ project, moreProjects }: WorkPageClientProps) => {
	const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

	// Animation variants for Framer Motion
	const fadeInUp = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0 }
	};

	const fadeInLeft = {
		hidden: { opacity: 0, x: 30 },
		visible: { opacity: 1, x: 0 }
	};

	const staggerContainer = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1
			}
		}
	};

	if (!project) {
		return (
			<div className="flex flex-col items-center justify-center min-h-[60vh] text-center gap-4 pt-28">
				<h1 className="text-9xl font-semibold text-red-400 mb-2">
					404
				</h1>
				<h2 className="text-3xl font-semibold text-red-400 mb-2">
					Project not found
				</h2>
				<p className="text-neutral-400 mb-4">
					The project you are looking for does not exist or has been
					removed.
				</p>
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

	const getTechIcon = (tech: string) => {
		const techLower = tech.toLowerCase();
		if (techLower.includes("react"))
			return <FaReact className="text-blue-400" />;
		if (techLower.includes("next"))
			return <RiNextjsFill className="text-white" />;
		if (techLower.includes("typescript"))
			return <BiLogoTypescript className="text-blue-500" />;
		if (techLower.includes("javascript"))
			return <BiLogoJavascript className="text-yellow-400" />;
		if (techLower.includes("node"))
			return <BiLogoNodejs className="text-green-500" />;
		if (techLower.includes("python"))
			return <BiLogoPython className="text-yellow-500" />;
		if (techLower.includes("tailwind"))
			return <BiLogoTailwindCss className="text-cyan-400" />;
		if (techLower.includes("css"))
			return <BiLogoCss3 className="text-blue-400" />;
		if (techLower.includes("html"))
			return <BiLogoHtml5 className="text-orange-400" />;
		if (techLower.includes("git"))
			return <BiLogoGit className="text-orange-500" />;
		if (techLower.includes("docker"))
			return <BiLogoDocker className="text-blue-600" />;
		if (techLower.includes("aws"))
			return <FaAws className="text-orange-400" />;
		if (techLower.includes("mongodb"))
			return <BiLogoMongodb className="text-green-500" />;
		if (techLower.includes("postgresql"))
			return <BiLogoPostgresql className="text-blue-600" />;
		if (techLower.includes("graphql"))
			return <BiLogoGraphql className="text-pink-500" />;
		if (techLower.includes("api"))
			return <AiTwotoneApi className="text-purple-400" />;
		if (techLower.includes("firebase"))
			return <BiLogoFirebase className="text-orange-500" />;
		if (techLower.includes("vercel"))
			return <IoLogoVercel className="text-white" />;
		if (techLower.includes("netlify"))
			return <BiLogoNetlify className="text-teal-400" />;
		if (techLower.includes("render"))
			return <SiRender className="text-neutral-800" />;
		return <FaBullseye className="text-neutral-400" />;
	};

	return (
		<div className="bg-neutral-950 min-h-screen">
			{/* Hero Section */}
			<div className="relative w-full h-[52vw] min-h-screen overflow-hidden flex items-end">
				<Image
					src={`/me/${basePath}/${project.image}`}
					alt={project.title}
					className="absolute inset-0 w-full h-full object-cover object-center blur-xs"
					width={1200}
					height={600}
					unoptimized
				/>
				<div className="relative z-10 p-8 md:p-16">
					<motion.h1
						className="text-[clamp(2.5rem,8vw,7rem)] font-light leading-none text-neutral-100 drop-shadow-lg"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.3 }}
						variants={fadeInUp}
						transition={{ duration: 0.7, ease: "easeOut" }}
					>
						{project.title}
					</motion.h1>
				</div>
				<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/95 to-transparent z-0" />
			</div>

			{/* Overview Section */}
			<div className="max-w-7xl mx-auto px-4 py-16">
				<motion.div 
					className="mb-10"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}
					variants={staggerContainer}
				>
					<motion.p
						className="text-xs text-neutral-400 mb-2"
						variants={fadeInUp}
						transition={{ duration: 0.6 }}
					>
						({project.date})
					</motion.p>
					<motion.h2
						className="text-2xl md:text-3xl font-medium text-neutral-100 mb-4"
						variants={fadeInUp}
						transition={{ duration: 0.7, delay: 0.2 }}
					>
						{project.headline}
					</motion.h2>
					<motion.p
						className="text-lg text-neutral-300 max-w-5xl tracking-wide"
						variants={fadeInUp}
						transition={{ duration: 0.7, delay: 0.3 }}
					>
						{project.description}
					</motion.p>
				</motion.div>

				<motion.div 
					className="text-sm md:text-base flex items-center gap-6"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}
					variants={staggerContainer}
				>
					<motion.div
						className="font-semibold text-neutral-200 whitespace-nowrap"
						variants={fadeInUp}
						transition={{ duration: 0.7, delay: 0.4 }}
					>
						Technologies
					</motion.div>
					<motion.div 
						className="flex flex-wrap gap-3"
						variants={staggerContainer}
					>
						{project.technologies.map((tech: string, index: number) => (
							<motion.div
								key={tech}
								className="flex items-center gap-2 bg-neutral-800/50 px-4 py-2 rounded-full border border-neutral-700 hover:border-neutral-600 hover:bg-neutral-700/50 transition-all duration-500 ease-out"
								variants={fadeInLeft}
								transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
								title={tech}
							>
								<span className="text-sm">
									{getTechIcon(tech)}
								</span>
								<span className="text-neutral-300 text-sm font-medium">
									{tech}
								</span>
							</motion.div>
						))}
					</motion.div>
				</motion.div>

				{project.link && (
					<motion.div 
						className="mt-20"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.5 }}
						variants={fadeInUp}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						<Button href={project.link} label="Visit website" />
					</motion.div>
				)}
			</div>

			{/* Secondary Images Gallery */}
			{project.secondaryImages && project.secondaryImages.length > 0 && (
				<motion.div 
					className="w-full mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-6"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.2 }}
					variants={staggerContainer}
				>
					{project.secondaryImages.map((img, i) => (
						<motion.div
							key={img}
							variants={fadeInUp}
							transition={{ duration: 0.6, delay: i * 0.2 }}
						>
							<Image
								src={`/me/${basePath}/${img}`}
								alt={`${project.title} secondary ${i + 1}`}
								className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg border border-neutral-800 bg-neutral-900"
								width={800}
								height={320}
								unoptimized
							/>
						</motion.div>
					))}
				</motion.div>
			)}

			{/* More Projects Section */}
			<div className="bg-neutral-900 py-16">
				<div className="max-w-7xl mx-auto px-4">
					<motion.h3 
						className="text-3xl font-semibold mb-8 text-neutral-100"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.5 }}
						variants={fadeInUp}
						transition={{ duration: 0.6 }}
					>
						More projects
					</motion.h3>
					<motion.div 
						className="grid md:grid-cols-2 gap-8"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.2 }}
						variants={staggerContainer}
					>
						{moreProjects.map((p, index) => (
							<motion.div
								key={p.id}
								variants={fadeInUp}
								transition={{ duration: 0.6, delay: index * 0.2 }}
							>
								<Link
									href={`/work/${generateSlug(p.title)}`}
									className="relative group rounded-2xl overflow-hidden bg-neutral-800 shadow hover:shadow-xl transition focus:outline-none focus:ring-2 focus:ring-blue-400"
									aria-label={`View project: ${p.title}`}
								>
									<Image
										src={`/me/${basePath}/${p.galleryImage || p.image}`}
										alt={p.title}
										className="w-full h-64 object-cover object-center transition-transform group-hover:scale-105 duration-300 ease-in-out"
										width={800}
										height={320}
										unoptimized
									/>
									<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex flex-col justify-end p-6">
										<div className="text-lg font-semibold text-white mb-2">
											{p.title}
										</div>
										<div className="flex flex-wrap gap-2">
											{p.technologies.slice(0, 6).map((tag) => (
												<span
													key={tag}
													className="bg-neutral-100/80 text-neutral-900 px-3 py-1 rounded-full text-xs font-medium"
												>
													{tag}
												</span>
											))}
										</div>
										<IoArrowForwardCircleOutline className="absolute bottom-6 right-6 text-4xl" />
									</div>
								</Link>
							</motion.div>
						))}
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default ProjectPage;
