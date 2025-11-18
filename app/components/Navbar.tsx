"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import AnimatedText from "./AnimatedText";
import Link from "next/link";
import { HiMinus, HiOutlineMenuAlt4 } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [showNavbar, setShowNavbar] = useState(true);
	const lastScrollY = useRef(0);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			if (currentScrollY > lastScrollY.current && currentScrollY > 30) {
				setShowNavbar(false); // scrolling down
			} else if (currentScrollY < lastScrollY.current) {
				setShowNavbar(true); // scrolling up
			}
			// Do nothing if stopped or same position
			lastScrollY.current = currentScrollY;
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const toggleMenu = () => {
		if (isMenuOpen) {
			setIsMenuOpen(false);
		} else {
			setIsMenuOpen(true);
		}
	};



	return (
		<motion.div
			initial={{ y: -100, opacity: 0 }}
			animate={{ y: showNavbar ? 0 : -100, opacity: 1 }}
			transition={{ duration: 0.6, ease: "easeOut" }}
			className={`fixed top-0 left-0 z-30 w-full md:h-20 px-4 pt-4 md:pt-0 ${isMenuOpen ? "bg-neutral-900 h-60" : "h-20 mix-blend-difference"
				} md:px-12 flex items-start md:items-center text-white`}
		>
			<Link href="/">
				<Image src="/me/logo.svg" alt="Hirusha Dinil Portfolio" width={25} height={25} unoptimized />
			</Link>

			{/* Info elements between logo and menu */}


			<div className="hidden md:flex justify-end gap-0.5 tracking-wider w-full uppercase">
				<Link
					href="#about"
					className="overflow-hidden h-6 cursor-pointer"
				>
					<AnimatedText>about</AnimatedText>
				</Link>
				<Link
					href="/work"
					className="overflow-hidden h-6 cursor-pointer"
				>
					<AnimatedText>work</AnimatedText>
				</Link>
				<Link
					href="#footer"
					className="overflow-hidden h-6 cursor-pointer"
				>
					<AnimatedText>contact</AnimatedText>
				</Link>
				<Link
					href="/archive"
					className="overflow-hidden h-6 cursor-pointer"
				>
					<AnimatedText>archive</AnimatedText>
				</Link>
			</div>
			{/* Hamburger Icon */}
			<button
				className="md:hidden ml-auto text-white focus:outline-none z-50"
				onClick={toggleMenu}
			>
				{isMenuOpen ? (
					<HiMinus className="w-6 h-6" />
				) : (
					<HiOutlineMenuAlt4 className="w-6 h-6" />
				)}
			</button>
			{/* Mobile Menu */}
			<AnimatePresence>
				{isMenuOpen && (
					<motion.div
						className="absolute top-12 left-0 w-full flex flex-col gap-1 items-start py-4 px-5 text-left md:hidden overflow-hidden bg-neutral-900"
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: 'auto', opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
					>
						{[
							{ href: '#about-me', label: 'About' },
							{ href: '/work', label: 'Work' },
							{ href: '#footer', label: 'Contact' },
							{ href: '/archive', label: 'Archive' }
						].map((item, idx) => (
							<motion.div
								key={item.href}
								initial={{ opacity: 0, y: -20 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -20 }}
								transition={{ delay: 0.1 + idx * 0.13, duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
								className="w-full"
							>
								<Link
									href={item.href}
									className="block py-2 text-sm font-light uppercase tracking-wider hover:text-neutral-300 w-full"
								>
									{item.label}
								</Link>
							</motion.div>
						))}
					</motion.div>
				)}
			</AnimatePresence>
		</motion.div>
	);
};

export default Navbar;
