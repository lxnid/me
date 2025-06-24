import React, { useRef, useEffect } from "react";
import Image from "next/image";

const Navbar = () => {
	return (
		<div className="fixed top-0 z-50 w-full h-20 px-12 flex items-center">
			<Image src="/logo.svg" alt="logo" width={30} height={30} />
			<div className="flex justify-end gap-1 w-full text-md font-light uppercase">
				<a href="/">about</a>
				<a href="/">work</a>
				<a href="/">contact</a>
				<a href="/">archive</a>
			</div>
		</div>
	);
};

export default Navbar;
