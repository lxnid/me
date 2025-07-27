import { projects } from "../../data/projects";
import WorkPageClient from "../../components/WorkPageClient";
import { generateSlug } from "../../utils/slugify";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Page(props: any) {
  const { params } = props;
  const project = projects.find((p) => generateSlug(p.title) === params.slug);
  const moreProjects = projects.filter((p) => p.id !== project?.id);
  return <WorkPageClient project={project} moreProjects={moreProjects} />;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: generateSlug(project.title),
  }));
}