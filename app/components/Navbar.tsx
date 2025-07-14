"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import AnimatedText from "./AnimatedText";
import Link from "next/link";
import { HiMinus, HiOutlineMenuAlt4 } from "react-icons/hi";
import { gsap } from "gsap";

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const menuRef = useRef<HTMLDivElement>(null);
	const linkRefs = useRef<HTMLAnchorElement[]>([]);

	const toggleMenu = () => {
		if (isMenuOpen) {
			closeMenu();
		} else {
			setIsMenuOpen(true);
		}
	};

	const closeMenu = () => {
		if (!menuRef.current) return;

		// Animate letters out and menu up simultaneously
		const tl = gsap.timeline({
			onComplete: () => setIsMenuOpen(false),
		});

		linkRefs.current.forEach((link, index) => {
			const letters = link.querySelectorAll(".menu-letter");
			tl.to(
				letters,
				{
					y: "-100%",
					stagger: 0.05,
					duration: 0.5,
					ease: "power2.in",
				},
				index * 0.1
			);

			const numberSpan = link.querySelector("span");
			if (numberSpan) {
				tl.to(
					numberSpan,
					{ opacity: 0, duration: 0.5, ease: "power2.in" },
					index * 0.1
				);
			}

			tl.to(
				link,
				{
					borderBottomColor: "rgba(255,255,255,0)",
					duration: 0.5,
					ease: "power2.in",
				},
				index * 0.1
			);
		});

		tl.to(
			menuRef.current,
			{
				y: "-100vh",
				duration: 0.5,
				ease: "power2.in",
			},
			0
		);
	};

	useEffect(() => {
		if (isMenuOpen && menuRef.current) {
			// Animate menu down and letters up simultaneously
			const tl = gsap.timeline();

			tl.fromTo(
				menuRef.current,
				{ y: "-100vh" },
				{ y: "0%", duration: 0.5, ease: "power2.out" }
			);

			linkRefs.current.forEach((link, index) => {
				const letters = link.querySelectorAll(".menu-letter");
				tl.fromTo(
					letters,
					{ y: "-100%", opacity: 0 },
					{
						y: "0%",
						opacity: 1,
						stagger: 0.05,
						duration: 0.5,
						ease: "power2.out",
					},
					index * 0.1
				);

				const numberSpan = link.querySelector("span");
				if (numberSpan) {
					tl.fromTo(
						numberSpan,
						{ opacity: 0 },
						{ opacity: 1, duration: 0.5, ease: "power2.out" },
						index * 0.1
					);
				}

				tl.fromTo(
					link,
					{ borderBottomColor: "rgba(255,255,255,0)" },
					{
						borderBottomColor: "rgba(255,255,255,1)",
						duration: 0.5,
						ease: "power2.out",
					},
					index * 0.1
				);
			});
		}
	}, [isMenuOpen]);

	const addLinkRef = (el: HTMLAnchorElement) => {
		if (el && !linkRefs.current.includes(el)) {
			linkRefs.current.push(el);
		}
	};

	const splitText = (text: string) => {
		return text.split("").map((char, index) => (
			<span
				key={index}
				className="menu-letter inline-block overflow-hidden"
				style={{ display: "inline-block", whiteSpace: "pre" }}
			>
				{char === " " ? "\u00A0" : char}
			</span>
		));
	};

	return (
		<div
			className={`fixed top-0 left-0 z-40 w-full md:h-20 px-4 pt-4 md:pt-0 ${
				isMenuOpen ? "h-screen bg-black/80 backdrop-blur-md" : "h-20"
			} md:px-12 flex items-start md:items-center text-white mix-blend-difference`}
		>
			<Image src="logo.svg" alt="logo" width={30} height={30} />

			{/* Info elements between logo and menu */}
			<div className="hidden md:flex flex w-full justify-between items-center px-52">
				<p className="text-xs md:text-sm uppercase">COLOMBO, SL</p>
				<p className="text-xs md:text-sm uppercase">PORTFOLIO &copy; 2025</p>
			</div>

			<div className="hidden md:flex justify-end gap-0.5 tracking-wider w-full text-lg font-medium uppercase">
				<Link
					href="/about"
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
					href="/contact"
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
			{isMenuOpen && (
				<div
					ref={menuRef}
					className="absolute top-55 left-0 w-full flex flex-col gap-8 items-end py-4 px-8 text-right md:hidden"
				>
					<Link
						ref={addLinkRef}
						href="/about"
						className="py-2 text-5xl font-bold uppercase tracking-wider hover:text-gray-300 border-b w-full"
						onClick={closeMenu}
					>
						<span className="text-neutral-500 text-3xl">
							(1)&nbsp;
						</span>
						{splitText("About")}
					</Link>
					<Link
						ref={addLinkRef}
						href="/work"
						className="py-2 text-5xl font-bold uppercase tracking-wider hover:text-neutral-300 border-b w-full"
						onClick={closeMenu}
					>
						<span className="text-neutral-500 text-3xl">
							(2)&nbsp;
						</span>
						{splitText("Work")}
					</Link>
					<Link
						ref={addLinkRef}
						href="/contact"
						className="py-2 text-5xl font-bold uppercase tracking-wider hover:text-neutral-300 border-b w-full"
						onClick={closeMenu}
					>
						<span className="text-neutral-500 text-3xl">
							(3)&nbsp;
						</span>
						{splitText("Contact")}
					</Link>
					<Link
						ref={addLinkRef}
						href="/archive"
						className="py-2 text-5xl font-bold uppercase tracking-wider hover:text-neutral-300 border-b w-full"
						onClick={closeMenu}
					>
						<span className="text-neutral-500 text-3xl">
							(4)&nbsp;
						</span>
						{splitText("Archive")}
					</Link>
				</div>
			)}
		</div>
	);
};

export default Navbar;
