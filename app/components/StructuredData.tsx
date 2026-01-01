/**
 * StructuredData component for SEO
 * Provides JSON-LD structured data to help search engines understand the content
 */

export default function StructuredData() {
	const personSchema = {
		"@context": "https://schema.org",
		"@type": "Person",
		"name": "Hirusha Dinil Rubasinghe",
		"url": "https://lxnid.github.io/me",
		"sameAs": [
			"https://www.linkedin.com/in/hirusha-rubasinghe-66bbba313",
			"https://github.com/lxnid"
		],
		"jobTitle": "Creative Developer & Designer",
		"worksFor": {
			"@type": "Organization",
			"name": "Freelance"
		},
		"alumniOf": {
			"@type": "EducationalOrganization",
			"name": "University of Westminster"
		},
		"knowsAbout": [
			"Web Development",
			"UI/UX Design",
			"React",
			"Next.js",
			"TypeScript",
			"Tailwind CSS",
			"Three.js",
			"GSAP",
			"Framer Motion"
		],
		"description": "Creative developer and designer passionate about building purposeful digital experiences. Specializing in modern web development with React, Next.js, and interactive animations."
	};

	const websiteSchema = {
		"@context": "https://schema.org",
		"@type": "WebSite",
		"name": "Hirusha Dinil Portfolio",
		"url": "https://lxnid.github.io/me",
		"description": "Portfolio of Hirusha Dinil - Creative Developer & Designer",
		"author": {
			"@type": "Person",
			"name": "Hirusha Dinil"
		},
		"inLanguage": "en-US"
	};

	const profilePageSchema = {
		"@context": "https://schema.org",
		"@type": "ProfilePage",
		"dateCreated": "2024-01-01",
		"dateModified": new Date().toISOString().split('T')[0],
		"mainEntity": {
			"@type": "Person",
			"name": "Hirusha Dinil",
			"description": "Creative Developer & Designer"
		}
	};

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
			/>
		</>
	);
}
