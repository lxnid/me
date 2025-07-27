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
	duration: string;
	role: string;
	status: string;
	process: string;
	type: string;
	hasDetailedContent?: boolean; // Indicates if detailed content is available
	category?: string; // Project category for filtering
	featured?: boolean; // Whether to feature this project
}

export const projects: Project[] = [
	{
		galleryImage: "workImages/portfolio_24/g_portfolio_24-min.jpg", 
		id: 1,
		title: "Portfolio Website 2024",
		date: "2024",
		headline: "A bold reinvention of my digital identity for 2024, unifying design and technology into a seamless portfolio experience.", 
		image: "workImages/portfolio_24/portfolio_24-min.jpg",
		secondaryImages: [],
		link: "https://lxnid.github.io/portfolio_site_v2",
		description:
			"This portfolio reflects my abilities and serves as a platform to establish my online presence. Built with Next.js, React.js, Tailwind CSS, and Framer Motion, it dynamically showcases my web development expertise. Through this project, I gained valuable hands-on experience, enhancing my skills with modern web technologies.",
		technologies: ["ReactJS", "NextJS", "Tailwind CSS", "Framer Motion", "TypeScript"],
		duration: "3-4 weeks",
		role: "Frontend Development",
		status: "Completed",
		process:
			"The development process involved extensive research, prototyping, and iterative design. Focused on creating a seamless user experience while maintaining high performance standards and accessibility requirements.",
		type: "Solo (Personal)",
		hasDetailedContent: true,
		category: "Web Development",
		featured: true,
	},
	{
		galleryImage: "workImages/todo/todo-min.jpeg", 
		id: 3,
		title: "To-Do Web App",
		date: "2025",
		headline: "Todo: A Comprehensive Todo Application Developed using React JS and Firebase with user authentication", 
		image: "workImages/todo/todo-min.jpeg",
		secondaryImages: [],
		link: "https://lxnid.github.io/todo-app",
		description:
			"A comprehensive Todo application built with React and Firebase, featuring user authentication and seamless task management. This project emphasizes modern frontend development, database integration, and user authentication workflows, while incorporating version control with Git and detailed project planning. It has been a valuable opportunity to enhance my expertise in building efficient, user-centric applications while maintaining organized, modular code and a well-structured development process.",
		technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
		duration: "1 week",
		role: "Full-Stack Developer",
		status: "Completed",
		process:
			"Developed the core task management features and implemented user managment and backend using Firebase.",
		type: "Solo (Personal)",
		hasDetailedContent: true,
		category: "Web Development",
		featured: true,
	},
	{
		galleryImage: "workImages/weather/weather-min.jpg", 
		secondaryImages: [],
		id: 2,
		title: "Weather App",
		date: "2024",
		headline: "Simple Weather Client Web Application Developed using React JS, REST API and Python with FastAPI", 
		image: "workImages/weather/weather-min.jpg",
		link: "https://lxnid.github.io/simple_weather",
		description:
			"A full-stack web application, developed as my final project in HarvardX’s CS50 Python course, utilizing Python for the backend with FastAPI and React with Tailwind CSS for the frontend. This project sharpened my skills in API integration, UI responsiveness, backend management, and React hooks, deepening my expertise in web development.",
		technologies: [
			"React",
			"TypeScript",
			"Python",
			"FastAPI",
			"OpenWeatherMap API",
			"Tailwind CSS",
		],
		duration: "2 weeks",
		role: "Full-Stack Developer",
		status: "Completed",
		process:
			"Designed and implemented the UI, integrated with weather APIs, and ensured responsive design for all devices.",
		type: "Solo (Personal)",
		hasDetailedContent: true,
		category: "Full-Stack Development",
		featured: true,
	},
	{
		galleryImage: "workImages/portfolio_current/portfolio_current-min.jpg", 
		secondaryImages: [],
		id: 4,
		title: "Current Portfolio",
		date: "Ongoing",
		headline: "A living canvas for my creative journey—this portfolio evolves to showcase my latest projects, skills, and design thinking.", 
		image: "workImages/portfolio_current/portfolio_current-min.jpg",
		link: "/",
		description:
			"The current version of my personal portfolio, showcasing my latest work and skills.",
		technologies: [
			"Next.js",
			"TypeScript",
			"Framer Motion",
			"Tailwind CSS",
		],
		duration: "Ongoing",
		role: "Frontend Developer",
		status: "In Progress",
		process:
			"Continuously updating and improving the portfolio to reflect new projects and skills.",
		type: "Solo (Personal)",
		hasDetailedContent: true,
		category: "Web Development",
		featured: false,
	},
	{
		galleryImage: "workImages/melodine/melodine-min.jpg",
		id: 5,
		title: "Melodine: A Music Streaming Application",
		date: "2024",
		headline: "A Music Streaming Application - Developed using NEXT JS utilizing Spotify Web API (Unfinished)",
		image: "workImages/melodine/melodine-min.jpg",
		secondaryImages: [],
		link: "https://lxnid.github.io/melodine",
		description: "A web streaming app built with Next.js and integrated with the Spotify Web API, allowing users to search for songs and listen to demo tracks. As a personal project in progress, it provides a platform to refine my skills in API integration, UI design, and modern web development, while enhancing my understanding of API management and user interaction.",
		technologies: ["Next.js", "React", "TypeScript", "Spotify Web API", "Tailwind CSS", "Framer Motion"],
		duration: "Ongoing",
		role: "Full-Stack Developer",
		status: "In Progress",
		process: "Designed the UI, integrating Spotify Web API for search and playback and authentication.",
		type: "Solo (Personal)",
		hasDetailedContent: true,
		category: "Web Development",
		featured: true,
	},
	// // --- DEMO PROJECTS BELOW ---
	// {
	// 	id: 5,
	// 	title: "E-Commerce Dashboard",
	// 	image: "/workImages/portfolio_24.jpg",
	// 	link: "/work/5",
	// 	description:
	// 		"A modern dashboard for managing e-commerce analytics, orders, and inventory. Features real-time charts and user management.",
	// 	technologies: ["React", "Redux", "Chart.js", "Node.js"],
	// 	duration: "4 weeks",
	// 	role: "Full-Stack Developer",
	// 	status: "Completed",
	// 	process:
	// 		"Built RESTful APIs, implemented authentication, and created dynamic dashboards for business insights.",
	// 	type: "Team Project",
	// },
	// {
	// 	id: 6,
	// 	title: "Fitness Tracker",
	// 	image: "/workImages/todo.jpg",
	// 	link: "/work/6",
	// 	description:
	// 		"A mobile-friendly app to track workouts, nutrition, and progress. Includes social features and goal setting.",
	// 	technologies: ["React Native", "Expo", "Firebase", "Styled Components"],
	// 	duration: "3 weeks",
	// 	role: "Mobile Developer",
	// 	status: "Completed",
	// 	process:
	// 		"Designed intuitive UI, integrated with Firebase for real-time data sync, and enabled push notifications.",
	// 	type: "Solo (Personal)",
	// },
	// {
	// 	id: 7,
	// 	title: "Blog Platform",
	// 	image: "/workImages/portfolio_current.jpg",
	// 	link: "/work/7",
	// 	description:
	// 		"A full-featured blogging platform with markdown support, comments, and user profiles.",
	// 	technologies: ["Next.js", "MongoDB", "TypeScript", "Tailwind CSS"],
	// 	duration: "5 weeks",
	// 	role: "Full-Stack Developer",
	// 	status: "Completed",
	// 	process:
	// 		"Implemented server-side rendering, user authentication, and a custom markdown editor.",
	// 	type: "Team Project",
	// },
	// {
	// 	id: 8,
	// 	title: "Recipe Sharing App",
	// 	image: "/workImages/weather.jpg",
	// 	link: "/work/8",
	// 	description:
	// 		"A social platform for sharing and discovering recipes. Users can upload photos, rate, and comment on recipes.",
	// 	technologies: ["Vue.js", "Firebase", "Vuetify", "Cloud Functions"],
	// 	duration: "2 weeks",
	// 	role: "Frontend Developer",
	// 	status: "Completed",
	// 	process:
	// 		"Developed responsive UI, integrated cloud storage, and implemented real-time updates for comments and likes.",
	// 	type: "Solo (Personal)",
	// },
	// {
	// 	id: 9,
	// 	title: "Event Management Tool",
	// 	image: "/workImages/portfolio_24.jpg",
	// 	link: "/work/9",
	// 	description:
	// 		"A web app for organizing and tracking events, attendees, and schedules. Includes calendar integration and notifications.",
	// 	technologies: ["Angular", "TypeScript", "Firebase", "Bootstrap"],
	// 	duration: "3 weeks",
	// 	role: "Frontend Developer",
	// 	status: "Completed",
	// 	process:
	// 		"Built event creation flows, calendar sync, and notification system for reminders.",
	// 	type: "Team Project",
	// },
];
