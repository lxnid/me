import { MetadataRoute } from "next";
import { projects } from "./data/projects";
import { generateSlug } from "./utils/slugify";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = "https://lxnid.github.io/me";

	// Static routes
	const routes = [
		{
			url: baseUrl,
			lastModified: new Date(),
			changeFrequency: "weekly" as const,
			priority: 1,
		},
		{
			url: `${baseUrl}/work`,
			lastModified: new Date(),
			changeFrequency: "weekly" as const,
			priority: 0.9,
		},
		{
			url: `${baseUrl}/archive`,
			lastModified: new Date(),
			changeFrequency: "monthly" as const,
			priority: 0.6,
		},
	];

	// Dynamic project routes
	const projectRoutes = projects.map((project) => ({
		url: `${baseUrl}/work/${generateSlug(project.title)}`,
		lastModified: new Date(), // Could be project.date if it was a full date string, but '2024' is too vague
		changeFrequency: "monthly" as const,
		priority: 0.8,
	}));

	return [...routes, ...projectRoutes];
}
