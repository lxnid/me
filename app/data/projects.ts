export interface Project {
	id: number;
	galleryImage: string;
	title: string;
	headline: string;
	image: string;
	secondaryImages: string[];
	link: string;
	description: string;
	technologies: string[];
	date: string;
	role: string;
}

export const projects: Project[] = [
	{
		id: 1,
		galleryImage: "workImages/portfolio_24/g_portfolio_24-min.jpg",
		title: "Portfolio Website 2024",
		date: "2024",
		headline: "A bold reinvention of my digital identity for 2024, unifying design and technology into a seamless portfolio experience.",
		image: "workImages/portfolio_24/portfolio_24-min.jpg",
		secondaryImages: [],
		link: "https://lxnid.github.io/portfolio_site_v2",
		description:
			"In the digital world, a portfolio is far more than a simple collection of work; it is a developer's professional identity, a testament to their philosophy and skill. When I set out to build my previous portfolio, I was driven by a desire to solve a problem I saw across the industry: too many developer sites felt generic, suffered from poor performance, and ultimately failed to communicate the depth of the creator's technical expertise. This project was my response—a thoughtfully architected platform designed to be as performant and well-crafted as the work it showcased.",
		technologies: ["ReactJS", "NextJS", "Tailwind CSS", "Framer Motion", "TypeScript"],
		role: "Full-Stack Development",
	},
	{
		id: 2,
		galleryImage: "workImages/weather/weather-min.jpg",
		title: "Weather App",
		date: "2024",
		headline: "Simple Weather Client Web Application Developed using React JS, REST API and Python with FastAPI",
		image: "workImages/weather/weather-min.jpg",
		secondaryImages: [],
		link: "https://lxnid.github.io/simple_weather",
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
	},
	{
		id: 3,
		galleryImage: "workImages/todo/todo-min.jpeg",
		title: "To-Do Web App",
		date: "2025",
		headline: "Todo: A Comprehensive Todo Application Developed using React JS and Firebase with user authentication",
		image: "workImages/todo/todo-min.jpeg",
		secondaryImages: [],
		link: "https://lxnid.github.io/todo-app",
		description:
			"A comprehensive Todo application built with React and Firebase, featuring user authentication and seamless task management. This project emphasizes modern frontend development, database integration, and user authentication workflows, while incorporating version control with Git and detailed project planning. It has been a valuable opportunity to enhance my expertise in building efficient, user-centric applications while maintaining organized, modular code and a well-structured development process.",
		technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
		role: "Full-Stack Development",
	},
	{
		id: 4,
		galleryImage: "workImages/portfolio_current/portfolio_current-min.jpg",
		title: "Current Portfolio",
		date: "Ongoing",
		headline: "A living canvas for my creative journey—this portfolio evolves to showcase my latest projects, skills, and design thinking.",
		image: "workImages/portfolio_current/portfolio_current-min.jpg",
		secondaryImages: [],
		link: "/",
		description:
			"The current version of my personal portfolio, showcasing my latest work and skills.",
		technologies: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS"],
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
