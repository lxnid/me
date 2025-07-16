"use client";

import React from "react";
import { motion } from "framer-motion";

import { RiArrowRightUpLine } from "react-icons/ri";
import { Archive } from "../data/ArchiveData";

const ArchiveItem = ({ archive, index }: { archive: Archive; index: number }) => {
    return (
        <motion.a
            key={archive.year}
            href={archive.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 0.7, y: 0 }}
            transition={{ delay: 0.08 * index, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="group px-0 md:px-8 py-6 md:py-8 flex flex-row items-center justify-between hover:opacity-100 hover:translate-x-2 transition-all duration-300 rounded-lg cursor-pointer relative hover:bg-neutral-500/60"
        >
            <div className="flex gap-5 justify-center items-center w-full">
                <span className="text-lg w-full md:w-1/3 md:text-2xl font-medium">{archive.label}</span>
                <span className="text-xs w-full md:w-1/3 text-neutral-400 text-right">{archive.year}</span>
                <RiArrowRightUpLine className="w-full md:w-1/3 text-neutral-400 ml-4 text-base md:text-xl" />
            </div>
        </motion.a>
    );
};

// TODO: Replace 'unknown' with the correct type if possible
export default ArchiveItem;
