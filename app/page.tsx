"use client";

import { useEffect, useRef } from "react";
import WebGLCanvas from "./components/WebGLCanvas";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "./components/Header";
import Link from "next/link";
import { BsArrowRightCircle, BsArrowRightCircleFill } from "react-icons/bs";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import { IoChevronDown } from "react-icons/io5";

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
	const mainRef = useRef<HTMLElement>(null);
	

	return (
		<main
			ref={mainRef}
			className="relative w-full min-h-[200vh]"
		>
			<section
				id="hero-section"
				className="relative w-full h-[70vh] overflow-hidden"
			>
				<Header />
			</section>

			<section className="pt-3 z-0 relative">
				<Projects count={2} />
				<div className="w-full h-[15vh] flex justify-end items-end pr-12">
					<Link
						href={"/work"}
						className="group w-fit h-fit px-5 py-3 text-xl opacity-70 hover:opacity-100 rounded-full gap-2 hover:gap-4 mr-2 hover:mr-0 transition-all duration-300 ease-in-out border border-neutral-400 flex justify-evenly items-center"
					>
						<h2>All Work</h2>
						<div className="relative w-8 h-8">
							<BsArrowRightCircleFill className="text-3xl absolute transition-all duration-300 opacity-100 group-hover:opacity-0" />
							<BsArrowRightCircle className="text-3xl absolute transition-all duration-300 opacity-0 group-hover:opacity-100" />
						</div>
					</Link>
				</div>
			</section>

			<section id="about-me">
				<AboutMe />
			</section>
			<section className="h-screen"></section>
		</main>
	);
}
