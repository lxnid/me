"use client";

import HorizontalScroll from "../components/HorizontalScroll";

export default function WorkGallery() {
	return (
		<div className="min-h-screen">
			<HorizontalScroll projectCount="all">
				{/* Hero Section */}
				<section className="max-w-5xl mx-auto pt-40 pb-16 text-center">
					<h1 className="text-5xl md:text-7xl font-extrabold mb-6">
						Project Gallery
					</h1>
					<p className="text-lg md:text-2xl max-w-2xl mx-auto">
						Explore a curated selection of my favorite projects,
						spanning web apps, design systems, and creative
						experiments. Each project is a unique blend of
						thoughtful design and robust development.
					</p>
				</section>
			</HorizontalScroll>
		</div>
	);
}
