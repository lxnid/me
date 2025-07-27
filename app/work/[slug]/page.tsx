import { projects } from "../../data/projects";
import ProjectPage from "../../components/ProjectPage";
import { generateSlug } from "../../utils/slugify";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function Page(props: any) {
  const { params } = props;
  const resolvedParams = await params;
  const project = projects.find((p) => generateSlug(p.title) === resolvedParams.slug);
  const moreProjects = projects.filter((p) => p.id !== project?.id);
  return <ProjectPage project={project} moreProjects={moreProjects} />;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: generateSlug(project.title),
  }));
}