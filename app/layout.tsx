import "./globals.css"; // Import global styles here
import React from "react";
import Navbar from "./components/Navbar";
import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";
import Footer from "./components/Footer";

export const metadata: Metadata = {
	title: "Hirusha Dinil",
	description: "Portfolio of Hirusha Dinil",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {

	return (
		<html lang="en">
			<head>
				{/* Preload critical fonts for better performance */}
				<link
					rel="preload"
					href="/me/fonts/ppneuemontreal-book.otf"
					as="font"
					type="font/otf"
					crossOrigin="anonymous"
				/>
				<link
					rel="preload"
					href="/me/fonts/ppneuemontreal-medium.otf"
					as="font"
					type="font/otf"
					crossOrigin="anonymous"
				/>
			</head>
			<body className="bg-[#000000] text-[#dddddd]">
				<Navbar />
				<SmoothScroll>{children}</SmoothScroll>
				<Footer />
			</body>
		</html>
	);
}
