import { BsArrowRightCircle, BsArrowRightCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <motion.section
      id="about-teaser"
      className="w-full min-h-screen bg-black text-[#dddddd] grid md:flex md:flex-row items-start justify-center md:gap-12 mt-36"
      initial={{ opacity: 0, y: 64 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        className="row-start-1 col-start-1 relative flex-1 flex overflow-hidden items-center justify-center md:w-1/4 h-screen md:h-full sticky top-0"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black via-black/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute -top-2 left-0 right-0 h-4 bg-black z-20 pointer-events-none" />
        <video
          src="/video/10994873-hd_720_1280_25fps_web.mp4"
          className="object-cover w-full h-[150vh] scale-105"
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          aria-label="Background video"
        />
        <div className="absolute inset-0 bg-black/50 md:bg-transparent z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute -bottom-2 left-0 right-0 h-4 bg-black z-20 pointer-events-none" />
      </motion.div>

      <motion.div
        className="row-start-1 col-start-1 z-10 flex-1 flex flex-col items-center justify-center md:justify-start h-full px-0 md:px-6 pb-24 pt-32 md:py-24 md:w-3/4 w-full sticky top-[5vh] md:top-24 bg-black/40 backdrop-blur-md md:bg-transparent md:backdrop-blur-none"
        initial={{ opacity: 0, x: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <div className="flex flex-col justify-center items-start md:px-20 px-8">
          <h2 className="text-lg md:text-xl mb-4 font-light text-neutral-400">
            About me
          </h2>
          <p className="text-2xl md:text-3xl font-medium leading-snug mb-6 text-[#dddddd]">
            I build software with the conviction that AI isn't just a tool
            upgrade — it's a renegotiation of what human thinking looks like
            when it has infrastructure behind it.
          </p>
          <p className="text-sm mb-4 text-neutral-400 w-3/4">
            The engineers building that infrastructure right now are making
            decisions that will outlast every product roadmap they'll ever see.
            I want to be one of the people who gets those decisions right.
          </p>
          <p className="text-sm mb-8 text-neutral-400 w-3/4">
            That means going deep on the systems, staying close to the human
            consequences, and building with enough care that it actually holds.
          </p>
          <a
            href="/about"
            className="group w-fit h-fit px-5 py-3 text-xl opacity-70 hover:opacity-100 rounded-full gap-2 hover:gap-4 ml-2 hover:ml-0 transition-all duration-300 ease-in-out border border-neutral-400 flex justify-evenly items-center"
          >
            <div className="relative w-8 h-8">
              <BsArrowRightCircleFill className="text-3xl absolute transition-all duration-300 opacity-100 group-hover:opacity-0" />
              <BsArrowRightCircle className="text-3xl absolute transition-all duration-300 opacity-0 group-hover:opacity-100" />
            </div>
            <h2>More about me</h2>
          </a>
        </div>
      </motion.div>
    </motion.section>
  );
}
