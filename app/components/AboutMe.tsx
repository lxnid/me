'use client';
import React, { useState } from "react";
import { BsArrowLeftCircle, BsArrowLeftCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";
import AboutOverlay from "./AboutOverlay";

export default function AboutMe() {
    const [overlayOpen, setOverlayOpen] = useState(false);
    return (
        <>
            <motion.section
                id="about-me"
                className="w-full min-h-screen bg-black text-white flex flex-col md:flex-row items-start justify-center gap-12 mt-36"
                initial={{ opacity: 0, y: 64 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                {/* Left: Image */}
                <motion.div
                    className="flex-1 flex overflow-hidden items-center justify-center md:w-1/4 h-full sticky top-0"
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ amount: 0.3 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    <video
                        src="video/10994873-hd_720_1280_25fps_web.mp4"
                        className="object-cover w-full h-[110vh]"
                        autoPlay
                        loop
                        muted
                    />
                </motion.div>

                {/* Right: Introductory text */}
                <motion.div
                    className="flex-1 flex flex-col items-center justify-start h-full px-0 md:px-6 py-24 md:w-3/4 w-full sticky md:top-24 top-0"
                    initial={{ opacity: 0, x: 0 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ amount: 0.3 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                >
                    <div className="flex flex-col justify-center items-start md:px-20 px-10">
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
                        <button
                            onClick={() => setOverlayOpen(true)}
                            className="group w-fit h-fit px-5 py-3 text-xl opacity-70 hover:opacity-100 rounded-full gap-2 hover:gap-4 ml-2 hover:ml-0 transition-all duration-300 ease-in-out border border-neutral-400 flex justify-evenly items-center"
                        >
                            <div className="relative w-8 h-8">
                                <BsArrowLeftCircleFill className="text-3xl absolute transition-all duration-300 opacity-100 group-hover:opacity-0" />
                                <BsArrowLeftCircle className="text-3xl absolute transition-all duration-300 opacity-0 group-hover:opacity-100" />
                            </div>
                            <h2>More about me</h2>
                        </button>
                    </div>
                </motion.div>
            </motion.section>
            <AboutOverlay open={overlayOpen} onClose={() => setOverlayOpen(false)} />
        </>
    );
}
