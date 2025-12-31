import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { LuExternalLink } from "react-icons/lu";

// Comprehensive skills list aggregated from all projects and tech stacks
const skills = [
  // Frontend Frameworks & Libraries
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Astro",

  // Styling & Animation
  "Tailwind CSS",
  "CSS",
  "HTML",
  "Framer Motion",
  "GSAP",

  // State Management
  "React Hooks",
  "React Context API",
  "Zustand",

  // Data Fetching & APIs
  "TanStack Query",
  "REST APIs",
  "Spotify API",
  "OpenWeatherMap API",

  // Backend & Databases
  "Python",
  "Node.js",
  "Express.js",
  "Fastify",
  "FastAPI",
  "Flask",
  "Firebase",
  "Firebase Authentication",
  "Firestore Database",
  "AWS",

  // Authentication & Security
  "NextAuth.js",
  "OAuth 2.0",
  "Data Security",

  // DevOps & Deployment
  "Docker",
  "CI/CD",
  "GitHub Actions",
  "Git",
  "GitHub",

  // Other Languages & Tools
  "Java",
  "C",
  "Linux",
  "VMs",

  // Design & UX
  "Figma",
  "Responsive Design",
  "UI/UX Design",

  // Methodologies
  "Agile",
  "Full-Stack Development",
];

export default function AboutOverlay({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
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
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 24,
              delay: 0.16,
            }}
            whileHover="hover"
            whileTap={{ scale: 0.97 }}
            variants={{ rest: { scale: 1 }, hover: { scale: 1.13 } }}
            className="fixed top-1/2 left-[46%] cursor-pointer md:left-1/3 z-50 -translate-y-1/2 bg-neutral-900 hover:bg-neutral-800 rounded-full w-12 h-12 flex items-center justify-center text-3xl border border-neutral-700 shadow-lg group"
            aria-label="Close overlay"
            type="button"
          >
            <motion.span
              className="inline-block"
              variants={{ rest: { rotate: 0 }, hover: { rotate: 45 } }}
              animate={undefined}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 20,
                delay: 0.16,
              }}
            >
              ×
            </motion.span>
          </motion.button>
        </>
      )}
      <motion.div
        initial={{ x: "100%", opacity: 0, scale: 0.98 }}
        animate={{
          x: open ? 0 : "100%",
          opacity: open ? 1 : 0,
          scale: open ? 1 : 0.98,
        }}
        exit={{ x: "100%", opacity: 0, scale: 0.98 }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 30,
          opacity: { duration: 0.36 },
          scale: { duration: 0.36 },
        }}
        className="fixed top-4 right-4 left-4 md:left-auto z-40 rounded-lg h-[96%] w-[92%] md:w-full lg:w-1/2 bg-[#202020] text-white shadow-2xl flex flex-col"
        style={{ pointerEvents: open ? "auto" : "none" }}
      >
        <div className="flex-1 flex flex-col justify-between p-8 md:p-12 lg:p-16 overflow-y-auto">
          <div>
            <p className="text-xs md:text-sm uppercase tracking-wide mb-6 opacity-70">
              <span className="font-medium text-lg">Hirusha Dinil</span> is a
              developer focus on digital experience and creative development.
            </p>
            <p className="text-base md:text-lg leading-relaxed mb-8">
              Blending code and creativity, I build interactive digital
              experiences that spark curiosity and connection. My work
              transforms ideas into memorable journeys—where design, technology,
              and imagination meet.
            </p>
          </div>
          <div className="mt-10 text-xs md:text-sm opacity-80">
            <div className="mb-6">
              <div className="uppercase mb-2 tracking-widest">Expertise</div>
              <div className="flex flex-wrap gap-2 mb-1">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-neutral-700 rounded px-2 py-1"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-8">
              <div className="uppercase mb-2 tracking-widest">
                <Link
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 hover:opacity-70 transition-colors duration-300 w-fit"
                >
                  Resume <LuExternalLink className="text-lg" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
