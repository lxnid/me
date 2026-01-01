import { projects } from "../../data/projects";
import ProjectPage from "../../components/ProjectPage";
import { generateSlug } from "../../utils/slugify";
import { Metadata } from "next";

interface PageProps {
	params: Promise<{
		slug: string;
	}>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
	const resolvedParams = await params;
	const project = projects.find(
		(p) => generateSlug(p.title) === resolvedParams.slug
	);

	if (!project) {
		return {
			title: "Project Not Found",
		};
	}

	const images = [project.image, project.secondaryImage, project.tertiaryImage]
		.filter((img): img is string => !!img)
		.map((img) => ({
			url: `/me/${img.startsWith("/") ? img.slice(1) : img}`, // Ensure correct path format
			width: 1200,
			height: 630,
			alt: project.title,
		}));

	return {
		title: project.title,
		description: project.description,
		openGraph: {
			title: `${project.title} | Hirusha Dinil Rubasinghe`,
			description: project.description,
			images: images,
		},
	};
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
