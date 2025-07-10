import "./globals.css"; // Import global styles here
import React from "react";
import Navbar from "./components/Navbar";
import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "./components/CustomCursor";


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
			<body>
				<CustomCursor />
				<Navbar />
				{children}
			</body>
		</html>
	);
}
