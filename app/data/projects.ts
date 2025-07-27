export interface ProjectSection {
	title: string;
	content: string | string[]; // Support single paragraph or multiple paragraphs
	list?: string[]; // Optional list items
}

export interface Project {
	id: number;
	galleryImage: string;
	title: string;
	headline: string;
	image: string;
	secondaryImages: string[];
	secondaryImage?: string; // Optional secondary image for middle section
	link: string;
	githubUrl?: string;
	description: string;
	technologies: string[];
	date: string;
	role: string;
	sections?: ProjectSection[]; // Optional dynamic sections
}

export const projects: Project[] = [
	{
		id: 1,
		galleryImage: "workImages/portfolio_24/g_portfolio_24-min.jpg",
		title: "Portfolio Website 2024",
		date: "2024",
		headline:
			"A bold reinvention of my digital identity for 2024, unifying design and technology into a seamless portfolio experience.",
		image: "workImages/portfolio_24/portfolio_24-min.jpg",
		secondaryImages: [],
		secondaryImage: "workImages/portfolio_24/g_portfolio_24-min.jpg",
		link: "https://lxnid.github.io/portfolio_site_v2",
		githubUrl: "https://github.com/lxnid/portfolio_site_v2",
		description:
			"In the digital world, a portfolio is far more than a simple collection of work; it is a developer's professional identity, a testament to their philosophy and skill. When I set out to build my previous portfolio, I was driven by a desire to solve a problem I saw across the industry: too many developer sites felt generic, suffered from poor performance, and ultimately failed to communicate the depth of the creator's technical expertise. This project was my response—a thoughtfully architected platform designed to be as performant and well-crafted as the work it showcased.",
		technologies: [
			"ReactJS",
			"NextJS",
			"Tailwind CSS",
			"Framer Motion",
			"TypeScript",
		],
		role: "Full-Stack Development",
		sections: [
				{
					title: "The Challenge: What I Set Out To Solve",
					content:
						"My primary challenge was to create a digital presence that could cut through the noise. I wanted to build a site that not only looked unique but also felt exceptionally responsive and engaging. This meant addressing the common pitfalls of how fast lines and clunky user interfaces. I wanted to create a space where every interaction felt deliberate and every element served a purpose. More importantly, I wanted to effectively communicate my strategic thinking and problem-solving skills, ensuring that visitors could quickly understand my capabilities and approach to development. My goal was to craft a cohesive and professional brand identity that would resonate with potential employers, clients, and peers alike.",
				},
				{
					title: "Design Philosophy",
					content: 
						"The design emphasizes clean aesthetics, intuitive navigation, and seamless user experience. Every element was carefully crafted to showcase projects effectively while maintaining fast loading times and accessibility standards. The color palette was chosen to create a professional yet approachable atmosphere, with careful attention to contrast ratios for optimal readability. Typography plays a crucial role in establishing hierarchy and guiding the user's attention through the content. Interactive elements are designed with subtle animations that provide feedback without being distracting, creating a polished and engaging experience that reflects the quality of work presented."
					
				},
			{
				title: "Architecting the Solution",
				content:
					"My primary challenge was to create a digital presence that could cut through the noise. I wanted to build a site that not only looked unique but also felt exceptionally responsive and engaging. This meant addressing the common pitfalls of how fast lines and clunky user interfaces. I wanted to create a space where every interaction felt deliberate and every element served a purpose. More importantly, I wanted to effectively communicate my strategic thinking and problem-solving skills, ensuring that visitors could quickly understand my capabilities and approach to development. My goal was to craft a cohesive and professional brand identity that would resonate with potential employers, clients, and peers alike.",
			},
			{
				title: "",
				content:
					"",
				list: [
					"Framework: Next.js 13+ (App Router) for its powerful server-side rendering, automatic optimizations, and exceptional developer experience.",
					"Styling: Tailwind CSS for rapid development, consistent design language, and scalable component-based styling.",
					"Animation: Framer Motion to introduce subtle, meaningful micro-interactions that enhanced the user experience without compromising performance.",
				],
			},
			{
				title: "",
				content:
					"My development process was grounded in professional best practices. The frontend was built using atomic design principles, creating a clean, logical, more cohesive codebase. I ensured the site efficiently displayed both desktop and mobile devices, with a focus on performance optimization. Throughout the development process, I maintained a professional environment, incorporating a Git-based version control strategy, strict code quality enforcement, and ESLint and Prettier, and component testing to ensure reliability.",
			},
			{
				title: "Project Reflection",
				content: [
					"The project was a resounding success, both as a technical artifact and as a professional tool. The site achieved excellent Core Web Vitals scores and a minimal bundle size, confirming its technical performance. This quality was evident, leading to a tangible increase in professional inquiries and networking opportunities. The project demonstrated my ability to balance technical excellence with user experience, high engagement and full accessibility compliance.",
					"Ultimately, this project was a pivotal learning experience. It allowed me to move from theoretical knowledge to practical mastery of the modern web development stack. The experience was invaluable in end-to-end development, solidifying my skills and confidence. This experience became a comprehensive exercise in building a modern web application from the ground up, establishing a foundation of best practices and a scalable architecture that serves as a template for future projects.",
					"The project was a resounding success, both as a technical artifact and as a professional tool. The site achieved excellent Core Web Vitals scores and a minimal bundle size, confirming its technical performance. This quality was evident, leading to a tangible increase in professional inquiries and networking opportunities. The project demonstrated my ability to balance technical excellence with user experience, high engagement and full accessibility compliance.",
				],
			},
		],
	},
	{
		id: 2,
		galleryImage: "workImages/todo/todo-min.jpeg",
		title: "To-Do Web App",
		date: "2025",
		headline:
			"A comprehensive todo application built with React and Firebase, featuring secure user authentication and seamless task management across devices",
		image: "workImages/todo/todo-min.jpeg",
		secondaryImages: [],
		link: "https://lxnid.github.io/todo-app",
		githubUrl: "https://github.com/lxnid/todo-app",
		description:
			"For any developer, building a to-do application is a classic learning project. My goal was to elevate this concept into a production-ready, full-stack solution that addresses the real-world challenges of modern task management: data persistence, cross-device synchronization, and user privacy. This project showcases a secure, responsive, and feature-rich To-Do Web Application built with React and Firebase, demonstrating expertise in modern frontend architecture and robust backend integration.",
		technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
		role: "Full-Stack Development",
		sections: [
			{
				title: "Project Overview",
				content:
					"Todo: A Comprehensive Todo Application Developed using React JS and Firebase with user authentication",
			},
		],
	},
	{
		id: 3,
		galleryImage: "workImages/weather/weather-min.jpg",
		title: "Weather App",
		date: "2024",
		headline:
			"Simple Weather Client Web Application Developed using React JS, REST API and Python with FastAPI",
		image: "workImages/weather/weather-min.jpg",
		secondaryImages: [],
		link: "https://lxnid.github.io/simple_weather",
		githubUrl: "https://github.com/lxnid/simple_weather",
		description:
			"A full-stack web application, developed as my final project in HarvardX's CS50 Python course, utilizing Python for the backend with FastAPI and React with Tailwind CSS for the frontend. This project sharpened my skills in API integration, UI responsiveness, backend management, and React hooks, deepening my expertise in web development.",
		technologies: [
			"React",
			"TypeScript",
			"Python",
			"FastAPI",
			"OpenWeatherMap API",
			"Tailwind CSS",
		],
		role: "Full-Stack Development",
		sections: [
			{
				title: "Technical Implementation",
				content: "Built with React and modern JavaScript, the app features comprehensive weather functionality:",
				list: [
					"Real-time weather data integration with OpenWeatherMap API",
					"Responsive design that works seamlessly across all devices",
					"Geolocation support for automatic location detection",
					"5-day weather forecast with detailed hourly breakdowns",
					"Dynamic weather icons and animations"
				]
			},
			{
				title: "User Experience Focus",
				content: [
					"The interface prioritizes clarity and ease of use, with intuitive icons, clear typography, and logical information hierarchy that makes weather data accessible at a glance.",
					"Special attention was given to loading states and error handling, ensuring users always understand what's happening with their weather requests. The app gracefully handles network issues and provides helpful feedback.",
					"Accessibility features were built in from the ground up, including proper ARIA labels, keyboard navigation support, and high contrast ratios for users with visual impairments."
				]
			},
		],
	},
	{
		id: 4,
		galleryImage: "workImages/portfolio_current/portfolio_current-min.jpg",
		title: "Current Portfolio",
		date: "Ongoing",
		headline:
			"A living canvas for my creative journey—this portfolio evolves to showcase my latest projects, skills, and design thinking.",
		image: "workImages/portfolio_current/portfolio_current-min.jpg",
		secondaryImages: [],
		link: "/",
		description:
			"The current version of my personal portfolio, showcasing my latest work and skills.",
		technologies: [
			"Next.js",
			"TypeScript",
			"Framer Motion",
			"Tailwind CSS",
		],
		role: "Full-Stack Development",
	},
	// {
	// 	id: 5,
	// 	galleryImage: "workImages/melodine/melodine-min.jpg",
	// 	title: "Melodine: A Music Streaming Application",
	// 	date: "2024",
	// 	headline: "A Music Streaming Application - Developed using NEXT JS utilizing Spotify Web API (Unfinished)",
	// 	image: "workImages/melodine/melodine-min.jpg",
	// 	secondaryImages: [],
	// 	link: "https://lxnid.github.io/melodine",
	// 	description:
	// 		"A web streaming app built with Next.js and integrated with the Spotify Web API, allowing users to search for songs and listen to demo tracks. As a personal project in progress, it provides a platform to refine my skills in API integration, UI design, and modern web development, while enhancing my understanding of API management and user interaction.",
	// 	technologies: ["Next.js", "React", "TypeScript", "Spotify Web API", "Tailwind CSS", "Framer Motion"],
	// 	role: "Frontend Developer",
	// },
];
