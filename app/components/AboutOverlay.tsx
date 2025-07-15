import { motion } from "framer-motion";
import React from "react";

export default function AboutOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
    return (
        <>
        {/* Blurred background */}
        {open && (
            <>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 z-40 bg-black/30 backdrop-blur-md"
                    onClick={onClose}
                    aria-label="Close overlay background"
                />
                {/* Close button right center on blurred area */}
                <motion.button
                    onClick={onClose}
                    whileHover="hover"
                    whileTap={{ scale: 0.97 }}
                    initial="rest"
                    animate="rest"
                    variants={{ rest: { scale: 1 }, hover: { scale: 1.13 } }}
                    className="fixed top-1/2 left-[46%] md:left-1/3 z-50 -translate-y-1/2 bg-neutral-900 hover:bg-neutral-800 rounded-full w-12 h-12 flex items-center justify-center text-3xl border border-neutral-700 shadow-lg group"
                    aria-label="Close overlay"
                    type="button"
                >
                    <motion.span
                        className="inline-block"
                        variants={{ rest: { rotate: 0 }, hover: { rotate: 135 } }}
                        animate={undefined}
                        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                    >
                        ×
                    </motion.span>
                </motion.button>
            </>
        )}
        <motion.div
            initial={{ x: "100%", opacity: 0, scale: 0.98 }}
            animate={{ x: open ? 0 : "100%", opacity: open ? 1 : 0, scale: open ? 1 : 0.98 }}
            exit={{ x: "100%", opacity: 0, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 250, damping: 30, opacity: { duration: 0.36 }, scale: { duration: 0.36 } }}
            className="fixed top-4 right-4 left-4 md:left-auto z-40 rounded-lg h-[96%] w-[92%] md:w-full lg:w-1/2 bg-neutral-800 text-white shadow-2xl flex flex-col"
            style={{ pointerEvents: open ? 'auto' : 'none' }}
        >

            <div className="flex-1 flex flex-col justify-between p-8 md:p-12 lg:p-16 overflow-y-auto">
                <div>
                    <p className="text-xs md:text-sm uppercase tracking-wide mb-6 opacity-70">Ning Huang is a designer focus on digital experience and creative development.</p>
                    <p className="text-base md:text-lg leading-relaxed mb-8">
                        With a strong eye for visual storytelling and interaction, she crafts expressive, engaging websites that blend design with code. Her work brings brands to life through thoughtful aesthetics, smooth transitions, and immersive experiences.
                    </p>
                </div>
                <div className="mt-10 text-xs md:text-sm opacity-80">
                    <div className="mb-6">
                        <div className="uppercase mb-2 tracking-widest">Experiences</div>
                        <div>Block Studio 24 – Present</div>
                        <div>Digital Product Studio 22 – 24</div>
                    </div>
                    <div className="mb-6">
                        <div className="uppercase mb-2 tracking-widest">Recognitions</div>
                        <div>Honorable Mention (Awwwards)</div>
                        <div>Special Kudos (CSSDA)</div>
                        <div>UI, UX & Innovation Awards (CSSDA)</div>
                        <div>Site of the Day (GSAP Showcase)</div>
                    </div>
                    <div>
                        <div className="uppercase mb-2 tracking-widest">Press</div>
                        <div>Designer Spotlight (Codrops)</div>
                    </div>
                </div>
            </div>
        </motion.div>
        </>
    );
}
