import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Custom hook for intersection observer
function useSectionInView(ref: React.RefObject<HTMLDivElement | null>, threshold = 0.2) {
    const [inView, setInView] = React.useState(false);
    React.useEffect(() => {
        if (!ref.current) return;
        const observer = new window.IntersectionObserver(
            ([entry]) => setInView(entry.isIntersecting),
            { threshold }
        );
        observer.observe(ref.current);
        return () => observer.disconnect();
    }, [ref, threshold]);
    return inView;
}

const headings = [
    "Collaborative",
    "Innovative",
    "Problem Solving",
    "Passionate"
];

const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.7 } },
    exit: { opacity: 0, transition: { duration: 0.4 } },
};

// Add an array of image URLs corresponding to each heading
const imageUrls = [
    "https://images.unsplash.com/photo-1532618500676-2e0cbf7ba8b8?q=80&w=2620&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1718083272953-b171ae87b3d9?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1581670598552-86272477d4bd?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=2706&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const Expertise = () => {
    const sectionRef = React.useRef<HTMLDivElement>(null);
    const [activeIdx, setActiveIdx] = React.useState(0);
    const inView = useSectionInView(sectionRef, 0.2); // 20% visible triggers start

    React.useEffect(() => {
        if (!inView) return;
        const handleScroll = () => {
            if (!sectionRef.current) return;
            const rect = sectionRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const sectionHeight = rect.height;

            // Calculate how much of the section is scrolled
            let scrollY = windowHeight - rect.top;
            // Clamp scrollY to [0, sectionHeight]
            scrollY = Math.max(0, Math.min(scrollY, sectionHeight));

            // If section is out of view by 80% or more, freeze at last heading
            if (rect.bottom < window.innerHeight * 0.2) {
                setActiveIdx(headings.length - 1);
                return;
            }

            // Only start the animation after 70% of the section is scrolled
            const startThreshold = sectionHeight * 0.7;
            if (scrollY < startThreshold) {
                setActiveIdx(0); // Only show the first heading
                return;
            }

            // Weighted scroll windows: [1, 2, 2, 0] for 4 headings
            const weights = [1, 2, 2, 0];
            const totalWeight = weights.reduce((a, b) => a + b, 0);
            const animatableHeight = sectionHeight - startThreshold;
            const progress = scrollY - startThreshold;
            let acc = 0;
            let idx = 0;
            for (let i = 0; i < headings.length; i++) {
                acc += (weights[i] / totalWeight) * animatableHeight;
                if (progress < acc) {
                    idx = i;
                    break;
                } else {
                    idx = headings.length - 1;
                }
            }
            setActiveIdx(idx);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [inView]);

    return (
        <div ref={sectionRef} className="min-h-screen w-full px-2 md:px-12 pt-16 md:pt-24 z-10 flex">
            <div className="flex flex-col w-3/4 gap-8 md:gap-0">
                <div className="text-lg mb-4 ml-1">Who am I?</div>
                <div className="flex flex-col w-full gap-8 md:gap-2 uppercase text-9xl font-bold mt-8" >
                    {headings.map((text, i) => (
                        <div
                            key={text}
                            className="flex items-center justify-start min-h-[180px]"
                        >
                            <AnimatePresence mode="wait">
                                {activeIdx === i && (
                                    <motion.h2
                                        key={text}
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        variants={variants}
                                        className=""
                                    >
                                        {text}
                                    </motion.h2>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-1/4 h-full flex sticky top-52">
                <div className="w-full">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIdx}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0 }}
                        >
                            <Image
                                src={imageUrls[activeIdx]}
                                alt={headings[activeIdx]}
                                width={500}
                                height={500}
                                className="rounded-lg object-cover w-full h-auto max-h-[400px]"
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default Expertise;
