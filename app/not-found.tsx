"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BsArrowLeftCircle } from "react-icons/bs";

export default function NotFound() {
	return (
		<div className="min-h-screen flex items-center justify-center px-4">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
				className="text-center max-w-2xl"
			>
				{/* 404 Number */}
				<motion.h1
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ delay: 0.2, duration: 0.6 }}
					className="text-[10rem] md:text-[15rem] font-bold leading-none mb-4 bg-gradient-to-b from-neutral-100 to-neutral-600 bg-clip-text text-transparent"
				>
					404
				</motion.h1>

				{/* Error Message */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.4, duration: 0.6 }}
				>
					<h2 className="text-2xl md:text-4xl font-medium mb-4 text-neutral-200">
						Page Not Found
					</h2>
					<p className="text-base md:text-lg text-neutral-400 mb-8 max-w-md mx-auto">
						The page you're looking for doesn't exist or has been moved.
						Let's get you back on track.
					</p>
				</motion.div>

				{/* Action Buttons */}
				<motion.div
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.6, duration: 0.6 }}
					className="flex flex-col sm:flex-row gap-4 justify-center items-center"
				>
					<Link
						href="/"
						className="group w-fit px-6 py-3 text-lg border border-neutral-400 rounded-full flex items-center gap-3 hover:gap-4 opacity-70 hover:opacity-100 transition-all duration-300"
					>
						<BsArrowLeftCircle className="text-2xl transition-all duration-300" />
						<span>Back to Home</span>
					</Link>

					<Link
						href="/work"
						className="w-fit px-6 py-3 text-lg text-neutral-400 hover:text-neutral-200 transition-colors duration-300"
					>
						View Projects
					</Link>
				</motion.div>

				{/* Decorative Element */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 0.3 }}
					transition={{ delay: 0.8, duration: 1 }}
					className="mt-16 text-sm text-neutral-600"
				>
					<div className="flex items-center justify-center gap-2">
						<div className="h-px w-12 bg-neutral-700"></div>
						<span>Error 404</span>
						<div className="h-px w-12 bg-neutral-700"></div>
					</div>
				</motion.div>
			</motion.div>
		</div>
	);
}
