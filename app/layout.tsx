import "./globals.css"; // Import global styles here
import { Inter } from "next/font/google"; // Example: Using Inter font
import React from "react";
import Navbar from "./components/Navbar";
import type { Metadata } from "next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Liquid Displacement Background",
	description:
		"Three.js liquid displacement animation with Next.js App Router",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
