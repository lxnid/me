import { projects } from "../../data/projects";
import WorkPageClient from "../../components/WorkPageClient";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Page(props: any) {
  const { params } = props;
  const project = projects.find((p) => p.id === parseInt(params.id, 10));
  const moreProjects = projects.filter((p) => p.id !== project?.id);
  return <WorkPageClient project={project} moreProjects={moreProjects} />;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }));
}