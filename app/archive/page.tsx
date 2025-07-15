
"use client";

import { motion } from "framer-motion";
import ArchiveItem from "../components/ArchiveItem";
import { archives } from "../data/ArchiveData";

export default function SiteArchive() {
    return (
        <div className="px-4 md:px-8 py-16 mt-64">
            <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
                className="text-5xl md:text-7xl mb-12"
            >
                Site Archive
            </motion.h1>
            <div className="w-full">
                <div className="divide-y divide-neutral-900">
                    {archives.map((archive, i) => (
                        <ArchiveItem key={archive.year} archive={archive} index={i} />
                    ))}
                </div>
            </div>
        </div>
    );
}
