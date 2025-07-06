"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import AnimatedText from "./AnimatedText";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Navbar = () => {
	const navbarRef = useRef<HTMLDivElement>(null);
	const [logoSrc, setLogoSrc] = useState("/logo.svg");

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: "#hero-section",
				start: "bottom top",
				end: "+=1",
				scrub: true,
				onEnter: () => {
					gsap.to(navbarRef.current, { duration: 0.5, opacity: 0.5, color: "black"});
					setLogoSrc("/logo_dark.svg");
				},
				onLeaveBack: () => {
					gsap.to(navbarRef.current, { duration: 0.5 , opacity: 1, color: "white"});
					setLogoSrc("/logo.svg");
				},
			},
		});

		return () => {
			tl.kill();
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
		};
	}, []);

	return (
		<div
			ref={navbarRef}
			className="absolute top-0 z-50 w-full h-20 px-12 flex items-center text-white"
		>
			<Image src={logoSrc} alt="logo" width={30} height={30} />
			<div className="flex justify-end gap-0.5 tracking-wider w-full text-lg font-medium uppercase">
				<Link href="/about" className="overflow-hidden h-6">
					<AnimatedText>about</AnimatedText>
				</Link>
				<Link href="/work" className="overflow-hidden h-6">
					<AnimatedText>work</AnimatedText>
				</Link>
				<Link href="/contact" className="overflow-hidden h-6">
					<AnimatedText>contact</AnimatedText>
				</Link>
				<Link href="/archive" className="overflow-hidden h-6">
					<AnimatedText>archive</AnimatedText>
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
