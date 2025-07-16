"use client";

import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Button from "./components/Button";

export default function HomePage() {
	return (
		<main
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
					<Button href="/work" label="All Work" />
				</div>
			</section>

			<section id="about-me">
				<AboutMe />
			</section>
		</main>
	);
}
