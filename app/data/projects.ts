export interface Project {
	id: number;
	title: string;
	image: string;
	link: string;
	description: string;
	technologies: string[];
	duration: string;
	role: string;
	status: string;
	process: string;
	type: string;
}

export const projects: Project[] = [
	{
		id: 1,
		title: "Portfolio 2024",
		image: "/workImages/portfolio_24.jpg",
		link: "/work/1",
		description:
			"Everstream Analytics provides AI-powered supply chain risk intelligence, helping global enterprises anticipate disruptions and take proactive action. After a series of acquisitions, Everstream faced a complex challenge: unify multiple products into a single, cohesive platform without losing the functionality or trust of their existing customers.",
		technologies: ["ReactJS", "NextJS", "Tailwind CSS", "Framer Motion"],
		duration: "3-4 weeks",
		role: "Full-Stack Development",
		status: "Completed",
		process:
			"The development process involved extensive research, prototyping, and iterative design. We focused on creating a seamless user experience while maintaining high performance standards and accessibility requirements.",
		type: "Solo (Personal)",
	},
	{
		id: 2,
		title: "Weather App",
		image: "/workImages/weather.jpg",
		link: "/work/2",
		description:
			"A weather application providing real-time weather updates and forecasts. Built with a focus on clean UI and fast performance.",
		technologies: [
			"React",
			"TypeScript",
			"OpenWeatherMap API",
			"Tailwind CSS",
		],
		duration: "2 weeks",
		role: "Frontend Developer",
		status: "Completed",
		process:
			"Designed and implemented the UI, integrated with weather APIs, and ensured responsive design for all devices.",
		type: "Solo (Personal)",
	},
	{
		id: 3,
		title: "To-Do App",
		image: "/workImages/todo.jpg",
		link: "/work/3",
		description:
			"A productivity app to manage daily tasks efficiently. Features include task creation, editing, and completion tracking.",
		technologies: ["React", "TypeScript", "Redux", "Tailwind CSS"],
		duration: "1 week",
		role: "Frontend Developer",
		status: "Completed",
		process:
			"Developed the core task management features and implemented state management using Redux.",
		type: "Solo (Personal)",
	},
	{
		id: 4,
		title: "Current Portfolio",
		image: "/workImages/portfolio_current.jpg",
		link: "/work/4",
		description:
			"The current version of my personal portfolio, showcasing my latest work and skills.",
		technologies: [
			"Next.js",
			"TypeScript",
			"Framer Motion",
			"Tailwind CSS",
		],
		duration: "Ongoing",
		role: "Full-stack Developer",
		status: "In Progress",
		process:
			"Continuously updating and improving the portfolio to reflect new projects and skills.",
		type: "Solo (Personal)",
	},
	// --- DEMO PROJECTS BELOW ---
	{
		id: 5,
		title: "E-Commerce Dashboard",
		image: "/workImages/portfolio_24.jpg",
		link: "/work/5",
		description:
			"A modern dashboard for managing e-commerce analytics, orders, and inventory. Features real-time charts and user management.",
		technologies: ["React", "Redux", "Chart.js", "Node.js"],
		duration: "4 weeks",
		role: "Full-Stack Developer",
		status: "Completed",
		process:
			"Built RESTful APIs, implemented authentication, and created dynamic dashboards for business insights.",
		type: "Team Project",
	},
	{
		id: 6,
		title: "Fitness Tracker",
		image: "/workImages/todo.jpg",
		link: "/work/6",
		description:
			"A mobile-friendly app to track workouts, nutrition, and progress. Includes social features and goal setting.",
		technologies: ["React Native", "Expo", "Firebase", "Styled Components"],
		duration: "3 weeks",
		role: "Mobile Developer",
		status: "Completed",
		process:
			"Designed intuitive UI, integrated with Firebase for real-time data sync, and enabled push notifications.",
		type: "Solo (Personal)",
	},
	{
		id: 7,
		title: "Blog Platform",
		image: "/workImages/portfolio_current.jpg",
		link: "/work/7",
		description:
			"A full-featured blogging platform with markdown support, comments, and user profiles.",
		technologies: ["Next.js", "MongoDB", "TypeScript", "Tailwind CSS"],
		duration: "5 weeks",
		role: "Full-Stack Developer",
		status: "Completed",
		process:
			"Implemented server-side rendering, user authentication, and a custom markdown editor.",
		type: "Team Project",
	},
	{
		id: 8,
		title: "Recipe Sharing App",
		image: "/workImages/weather.jpg",
		link: "/work/8",
		description:
			"A social platform for sharing and discovering recipes. Users can upload photos, rate, and comment on recipes.",
		technologies: ["Vue.js", "Firebase", "Vuetify", "Cloud Functions"],
		duration: "2 weeks",
		role: "Frontend Developer",
		status: "Completed",
		process:
			"Developed responsive UI, integrated cloud storage, and implemented real-time updates for comments and likes.",
		type: "Solo (Personal)",
	},
	{
		id: 9,
		title: "Event Management Tool",
		image: "/workImages/portfolio_24.jpg",
		link: "/work/9",
		description:
			"A web app for organizing and tracking events, attendees, and schedules. Includes calendar integration and notifications.",
		technologies: ["Angular", "TypeScript", "Firebase", "Bootstrap"],
		duration: "3 weeks",
		role: "Frontend Developer",
		status: "Completed",
		process:
			"Built event creation flows, calendar sync, and notification system for reminders.",
		type: "Team Project",
	},
];
