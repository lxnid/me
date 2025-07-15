import "./globals.css"; // Import global styles here
import React from "react";
import Navbar from "./components/Navbar";
import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";


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
			<body className="bg-[#000000] text-[#dddddd]">
				<Navbar />
				<SmoothScroll>
					{children}
				</SmoothScroll>
			</body>
		</html>
	);
}
