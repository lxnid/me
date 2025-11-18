import Link from "next/link";
import Image from "next/image";

import { projects } from "../data/projects";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { generateSlug } from "../utils/slugify";

interface ProjectsProps {
  count: number;
}

const Projects = ({ count }: ProjectsProps) => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-1">
      {projects.slice(0, count).map((project, index) => (
        <Link
          key={project.id}
          href={`/work/${generateSlug(project.title)}`}
          className="w-full h-[75vh] flex justify-center items-center relative"
        >
          <Image
            src={project.image}
            alt={project.title}
            width={1000}
            height={1000}
            className="object-cover absolute w-full h-full"
            priority={index === 0}
            loading={index === 0 ? undefined : "lazy"}
            unoptimized
          />
          <div className="flex flex-col justify-center items-center w-full h-full gap-4 bg-black/50 md:opacity-0 hover:opacity-100 transition-all duration-300 z-10">
            <h2 className="text-4xl font-medium">{project.title}</h2>
            <p className="text-sm opacity-50">{project.role}</p>
            <span
              className="absolute left-1/2 transform -translate-x-1/2 mt-40 opacity-50 text-4xl md:hidden flex items-center justify-center"
            >
              <IoArrowForwardCircleOutline />
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Projects;
