import React, { useRef, useEffect } from "react";
import Image from "next/image";
import AnimatedText from "./AnimatedText";
import Link from "next/link";

const Navbar = () => {
	return (
		<div className="fixed top-0 z-50 w-full h-20 px-12 flex items-center text-white">
			<Image src="/logo.svg" alt="logo" width={30} height={30} />
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
