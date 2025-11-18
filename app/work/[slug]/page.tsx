import { projects } from "../../data/projects";
import ProjectPage from "../../components/ProjectPage";
import { generateSlug } from "../../utils/slugify";

interface PageProps {
	params: Promise<{
		slug: string;
	}>;
}

export default async function Page(props: PageProps) {
	const { params } = props;
	const resolvedParams = await params;
	const project = projects.find(
		(p) => generateSlug(p.title) === resolvedParams.slug
	);
	const moreProjects = projects.filter((p) => p.id !== project?.id);
	return <ProjectPage project={project} moreProjects={moreProjects} />;
}

export async function generateStaticParams() {
	return projects.map((project) => ({
		slug: generateSlug(project.title),
	}));
}
