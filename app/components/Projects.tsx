import Link from "next/link";
import Image from "next/image";

import { projects } from "../data/projects";

interface ProjectsProps {
  count: number;
}

const Projects = ({ count }: ProjectsProps) => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-1">
      {projects.slice(0, count).map((project) => (
        <Link
          key={project.id}
          href={project.link}
          className="w-full h-[75vh] flex justify-center items-center relative"
        >
          <Image
            src={project.image}
            alt={project.title}
            width={1000}
            height={1000}
            className="object-cover absolute w-full h-full"
          />
          <div className="flex flex-col justify-center items-center w-full h-full gap-4 bg-black/50 opacity-0 hover:opacity-100 transition-all duration-300 z-10">
            <h2 className="text-4xl font-medium">{project.title}</h2>
            <p className="text-sm opacity-50">{project.role}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Projects;
