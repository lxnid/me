import { IoArrowForwardCircleOutline, IoLogoVercel } from "react-icons/io5";
import { generateSlug } from "../utils/slugify";
import type { Project } from "../data/projects";
import { FaBullseye, FaReact, FaAws, FaGithub } from "react-icons/fa";
import {
  BiLogoCss3,
  BiLogoDocker,
  BiLogoFirebase,
  BiLogoGit,
  BiLogoGraphql,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoNetlify,
  BiLogoNodejs,
  BiLogoPostgresql,
  BiLogoPython,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from "react-icons/bi";
import { BsArrowRightCircleFill, BsArrowRightCircle } from "react-icons/bs";
import Button from "./Button";
import { RiNextjsFill } from "react-icons/ri";
import { AiTwotoneApi } from "react-icons/ai";
import { SiRender } from "react-icons/si";

interface WorkPageClientProps {
  project: Project | undefined;
  moreProjects: Project[];
}

const ProjectPage = ({ project, moreProjects }: WorkPageClientProps) => {
  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center gap-4 pt-28">
        <h1 className="text-9xl font-semibold text-red-400 mb-2">404</h1>
        <h2 className="text-3xl font-semibold text-red-400 mb-2">
          Project not found
        </h2>
        <p className="text-neutral-400 mb-4">
          The project you are looking for does not exist or has been removed.
        </p>
        <a
          href="/work"
          className="group w-fit h-fit px-5 py-3 text-xl opacity-70 hover:opacity-100 rounded-full gap-2 hover:gap-4 mr-2 hover:mr-0 transition-all duration-300 ease-in-out border border-neutral-400 flex justify-evenly items-center"
        >
          <h2>Go to Projects</h2>
          <div className="relative w-8 h-8">
            <BsArrowRightCircleFill className="text-3xl absolute transition-all duration-300 opacity-100 group-hover:opacity-0" />
            <BsArrowRightCircle className="text-3xl absolute transition-all duration-300 opacity-0 group-hover:opacity-100" />
          </div>
        </a>
      </div>
    );
  }

  const getTechIcon = (tech: string) => {
    const techLower = tech.toLowerCase();
    if (techLower.includes("react"))
      return <FaReact className="text-blue-400" />;
    if (techLower.includes("next"))
      return <RiNextjsFill className="text-white" />;
    if (techLower.includes("typescript"))
      return <BiLogoTypescript className="text-blue-500" />;
    if (techLower.includes("javascript"))
      return <BiLogoJavascript className="text-yellow-400" />;
    if (techLower.includes("node"))
      return <BiLogoNodejs className="text-green-500" />;
    if (techLower.includes("python"))
      return <BiLogoPython className="text-yellow-500" />;
    if (techLower.includes("tailwind"))
      return <BiLogoTailwindCss className="text-cyan-400" />;
    if (techLower.includes("css"))
      return <BiLogoCss3 className="text-blue-400" />;
    if (techLower.includes("html"))
      return <BiLogoHtml5 className="text-orange-400" />;
    if (techLower.includes("git"))
      return <BiLogoGit className="text-orange-500" />;
    if (techLower.includes("docker"))
      return <BiLogoDocker className="text-blue-600" />;
    if (techLower.includes("aws")) return <FaAws className="text-orange-400" />;
    if (techLower.includes("mongodb"))
      return <BiLogoMongodb className="text-green-500" />;
    if (techLower.includes("postgresql"))
      return <BiLogoPostgresql className="text-blue-600" />;
    if (techLower.includes("graphql"))
      return <BiLogoGraphql className="text-pink-500" />;
    if (techLower.includes("api"))
      return <AiTwotoneApi className="text-purple-400" />;
    if (techLower.includes("firebase"))
      return <BiLogoFirebase className="text-orange-500" />;
    if (techLower.includes("vercel"))
      return <IoLogoVercel className="text-white" />;
    if (techLower.includes("netlify"))
      return <BiLogoNetlify className="text-teal-400" />;
    if (techLower.includes("render"))
      return <SiRender className="text-neutral-800" />;
    return <FaBullseye className="text-neutral-400" />;
  };

  return (
    <div className="bg-neutral-950 min-h-screen tracking-wide">
      {/* Hero Section */}
      <div className="relative w-full h-[52vw] min-h-screen overflow-hidden flex items-end">
        <img
          src={`/${project.image}`}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover object-center blur-xs"
          width={1200}
          height={600}
        />
        {/* Top gradient for navbar visibility */}
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-neutral-950 via-neutral-950/70 to-transparent z-10" />

        <div className="relative z-10 w-full max-w-5xl mx-auto px-8 md:px-24 pb-16">
          <h1 className="text-[clamp(2.5rem,8vw,7rem)] font-light leading-none text-neutral-100 drop-shadow-lg">
            {project.title}
          </h1>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/95 to-transparent z-0" />
      </div>

      {/* Overview Section */}
      <div className="max-w-5xl mx-auto px-8 md:px-24 py-16">
        <div className="mb-10">
          <p className="text-xs text-neutral-400 mb-2">({project.date})</p>
          <h2 className="text-2xl md:text-4xl font-medium text-neutral-100 mb-4">
            {project.headline}
          </h2>
          <p className="text-lg text-neutral-300 max-w-5xl tracking-wide">
            {project.description}
          </p>
        </div>

        <div className="text-sm md:text-base flex items-center gap-6">
          <div className="font-semibold text-neutral-200 whitespace-nowrap">
            Technologies
          </div>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech: string) => (
              <div
                key={tech}
                className="flex items-center gap-2 bg-neutral-800/50 px-4 py-2 rounded-full border border-neutral-700 hover:border-neutral-600 hover:bg-neutral-700/50 transition-all duration-500 ease-out"
                title={tech}
              >
                <span className="text-sm">{getTechIcon(tech)}</span>
                <span className="text-neutral-300 text-sm font-medium">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {project.tertiaryImage && (
        <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-16">
          <img
            src={`/${project.tertiaryImage}`}
            alt={`${project.title} tertiary view`}
            className="w-full h-[60vh] object-cover"
            width={1920}
            height={1080}
            loading="lazy"
          />
        </div>
      )}

      {/* Dynamic Sections */}
      {project.sections && project.sections.length > 0 && (
        <div className="max-w-5xl mx-auto px-8 md:px-24 py-16">
          <div className="space-y-24">
            {project.sections.map((section, index) => (
              <div key={index} className="flex flex-col gap-3">
                <div>
                  <h3 className="text-xl md:text-2xl font-medium text-neutral-100 leading-relaxed">
                    {section.title}
                  </h3>
                </div>
                <div>
                  {Array.isArray(section.content) ? (
                    section.content.map((paragraph, paragraphIndex) => (
                      <p
                        key={paragraphIndex}
                        className="text-lg text-neutral-300 leading-relaxed tracking-wide mb-6"
                      >
                        {paragraph}
                      </p>
                    ))
                  ) : (
                    <p className="text-lg text-neutral-300 leading-relaxed tracking-wide mb-6">
                      {section.content}
                    </p>
                  )}
                  {section.list && (
                    <ul className="text-neutral-300 space-y-3 w-full">
                      {section.list.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="flex items-start text-lg w-full"
                        >
                          <span className="mr-4 mt-1.5 text-xs text-neutral-500">
                            ●
                          </span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Action Buttons */}
      {(project.link || project.githubUrl) && (
        <div className="max-w-5xl mx-auto px-8 md:px-24 py-16">
          <div className="flex justify-end gap-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-neutral-800 hover:bg-neutral-900 text-white font-medium rounded-full border-neutral-700 border opacity-70 hover:opacity-100 transition-all duration-300 ease-in-out"
              >
                <FaGithub className="text-2xl mr-2" />
                GitHub
              </a>
            )}
            {project.link && (
              <Button href={project.link} label="Visit website" />
            )}
          </div>
        </div>
      )}

      {/* More Projects Section */}
      <div className="bg-neutral-900 py-16">
        <div className="max-w-screen sm:max-w-5xl mx-auto px-8 md:px-24">
          <h3 className="text-3xl font-semibold mb-8 text-neutral-100">
            More projects
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {moreProjects.map((p, index) => (
              <div key={p.id} className="overflow-hidden rounded-2xl">
                <a
                  href={`/work/${generateSlug(p.title)}`}
                  className="relative group rounded-2xl overflow-hidden bg-neutral-800 shadow hover:shadow-xl transition focus:outline-none focus:ring-2 focus:ring-blue-400"
                  aria-label={`View project: ${p.title}`}
                >
                  <img
                    src={`/${p.galleryImage || p.image}`}
                    alt={p.title}
                    className="w-full h-64 object-cover object-center transition-transform group-hover:scale-105 duration-300 ease-in-out"
                    width={800}
                    height={320}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex flex-col justify-end p-6">
                    <div className="text-lg font-semibold text-white mb-2">
                      {p.title}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {p.technologies.slice(0, 6).map((tag) => (
                        <span
                          key={tag}
                          className="bg-neutral-100/80 text-neutral-900 px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <IoArrowForwardCircleOutline className="absolute bottom-6 right-6 text-4xl" />
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
