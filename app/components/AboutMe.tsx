import Link from "next/link";
import React from "react";
import { BsArrowRightCircleFill, BsArrowRightCircle } from "react-icons/bs";
import { motion } from "framer-motion";

export default function AboutMe() {
    return (
        <motion.section
            id="about-me"
            className="w-full h-screen bg-black text-white flex flex-col md:flex-row items-center justify-center gap-12 mt-64"
            initial={{ opacity: 0, y: 64 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            {/* Left: Image */}
            <motion.div
                className="flex-1 flex overflow-hidden items-center justify-center md:w-1/4 h-full"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
                <video
                    src="/video/10994873-hd_720_1280_25fps_web.mp4"
                    className="object-cover w-full h-full"
                    autoPlay
                    loop
                    muted
                />
            </motion.div>

            {/* Right: Introductory text */}
            <motion.div
                className="flex-1 flex flex-col items-center justify-start h-full px-6 py-24 md:w-3/4"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
                <div className="flex flex-col justify-center items-start px-20">
                    <h2 className="text-lg md:text-xl mb-4 font-light opacity-80">About me</h2>
                    <p className="text-2xl md:text-3xl font-medium leading-snug mb-6">
                        Stay ahead of the curve with a creative technologist passionate about blending design, technology, and strategy. I thrive on solving complex problems, building engaging digital experiences, and helping brands stand out in a rapidly changing world. Let’s create something exceptional together.
                    </p>
                    <p className="text-sm mb-8 opacity-80 w-3/4">
                        I focus on delivering meaningful, innovative solutions that reflect your unique vision and values—always adapting to the latest trends while staying true to authenticity.
                    </p>
                    {/* <button
                        className="flex items-center gap-2 px-6 py-3 border border-white rounded-full text-white hover:bg-white hover:text-black transition-colors text-lg font-medium"
                    >
                        More about me
                        <span className="ml-2">→</span>
                    </button> */}
                    <Link
						href={"/about"}
						className="group w-fit h-fit px-5 py-3 text-xl opacity-70 hover:opacity-100 rounded-full gap-2 hover:gap-4 mr-2 hover:mr-0 transition-all duration-300 ease-in-out border border-neutral-400 flex justify-evenly items-center"
					>
						<h2>More about me</h2>
						<div className="relative w-8 h-8">
							<BsArrowRightCircleFill className="text-3xl absolute transition-all duration-300 opacity-100 group-hover:opacity-0" />
							<BsArrowRightCircle className="text-3xl absolute transition-all duration-300 opacity-0 group-hover:opacity-100" />
						</div>
					</Link>
                </div>
            </motion.div>
        </motion.section>
    );
}
