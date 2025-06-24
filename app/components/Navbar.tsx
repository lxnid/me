import React, { useRef, useEffect } from "react";
import Image from "next/image";
import AnimatedText from "./AnimatedText";
import Link from "next/link";

const Navbar = () => {
	return (
		<div className="fixed top-0 z-50 w-full h-20 px-12 flex items-center">
			<Image src="/logo.svg" alt="logo" width={30} height={30} />
			<div className="flex justify-end gap-0.5 tracking-wider w-full text-lg font-medium uppercase">
				<Link href="/about">
					<AnimatedText>about</AnimatedText>
				</Link>
				<Link href="/work">
					<AnimatedText>work</AnimatedText>
				</Link>
				<Link href="/contact">
					<AnimatedText>contact</AnimatedText>
				</Link>
				<Link href="/archive">
					<AnimatedText>archive</AnimatedText>
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
