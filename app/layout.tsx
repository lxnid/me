import "./globals.css"; // Import global styles here
import type { ReactNode } from "react";
import Navbar from "./components/Navbar";
import type { Metadata } from "next";
import SmoothScroll from "./components/SmoothScroll";
import Footer from "./components/Footer";
import StructuredData from "./components/StructuredData";
import ErrorBoundary from "./components/ErrorBoundary";
import CustomCursor from "./components/CustomCursor";

export const metadata: Metadata = {
	title: {
		default: "Hirusha Dinil Rubasinghe | Creative Developer & Designer",
		template: "%s | Hirusha Dinil Rubasinghe",
	},
	description:
		"Creative developer and designer specializing in modern web development with React, Next.js, and TypeScript. Building engaging digital experiences with cutting-edge technology.",
	keywords: [
		"Hirusha Dinil Rubasinghe",
		"Web Developer",
		"Full Stack Developer",
		"React Developer",
		"Next.js",
		"TypeScript",
		"Portfolio",
		"UI/UX Designer",
		"Frontend Development",
		"Creative Developer",
	],
	authors: [{ name: "Hirusha Dinil Rubasinghe", url: "https://lxnid.github.io/me" }],
	creator: "Hirusha Dinil Rubasinghe",
	publisher: "Hirusha Dinil Rubasinghe",
	metadataBase: new URL("https://lxnid.github.io"),
	alternates: {
		canonical: "/me",
	},
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://lxnid.github.io/me",
		title: "Hirusha Dinil Rubasinghe | Creative Developer & Designer",
		description:
			"Creative developer and designer specializing in modern web development with React, Next.js, and TypeScript. Building engaging digital experiences.",
		siteName: "Hirusha Dinil Rubasinghe Portfolio",
		images: [
			{
				url: "/me/og-image.jpg", // TODO: Add actual OG image
				width: 1200,
				height: 630,
				alt: "Hirusha Dinil Rubasinghe - Creative Developer & Designer",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Hirusha Dinil Rubasinghe | Creative Developer & Designer",
		description:
			"Creative developer and designer specializing in modern web development. Building engaging digital experiences.",
		images: ["/me/og-image.jpg"], // TODO: Add actual Twitter card image
		creator: "@lxnid", // TODO: Update with actual Twitter handle if available
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	icons: {
		icon: "/me/favicon.ico",
		shortcut: "/me/favicon.ico",
		apple: "/me/apple-touch-icon.png",
	},
	manifest: "/me/site.webmanifest",
	verification: {
		// TODO: Add verification codes when setting up search console
		// google: "google-site-verification-code",
		// yandex: "yandex-verification-code",
		// bing: "bing-verification-code",
	},
};

export default function RootLayout({
	children,
}: {
	children: ReactNode;
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
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="theme-color" content="#000000" />
			</head>
			<body className="bg-[#000000] text-[#dddddd]">
				<CustomCursor />
				<StructuredData />
				<Navbar />
				<ErrorBoundary>
					<SmoothScroll>{children}</SmoothScroll>
				</ErrorBoundary>
				<Footer />
			</body>
		</html>
	);
}
