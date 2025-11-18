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
	secondaryImage?: string;
	tertiaryImage?: string;
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
				title: "The Challenge",
				content:
					"My primary challenge was to create a digital presence that could cut through the noise. I wanted to build a site that not only looked unique but also felt exceptionally responsive and engaging. This meant addressing the common pitfalls of how fast lines and clunky user interfaces. I wanted to create a space where every interaction felt deliberate and every element served a purpose. More importantly, I wanted to effectively communicate my strategic thinking and problem-solving skills, ensuring that visitors could quickly understand my capabilities and approach to development. My goal was to craft a cohesive and professional brand identity that would resonate with potential employers, clients, and peers alike.",
			},
			{
				title: "Architecting the Solution",
				content: [
					"To bring this vision to life, I designed a solution focused on performance, maintainability, and a seamless user experience. I chose Next.js 13+ with the App Router for its server-side rendering and optimizations, Tailwind CSS for rapid, responsive UI development, and Framer Motion for subtle, performant animations.",
					"Following professional best practices, I applied atomic design principles to build a reusable component system and managed state with React hooks. Performance was enhanced through next/image optimization and lazy loading via dynamic imports. My workflow reflected a production-ready setup, using a Git feature-branch strategy, ESLint and Prettier for code consistency, and component testing for reliability.",
				],
			},
			{
				title: "Project Reflection",
				content: [
					"The project was a resounding success, both as a technical artifact and as a professional tool. The site achieved excellent Core Web Vitals scores and a minimal bundle size, confirming its technical performance. This quality was evident, leading to a tangible increase in professional inquiries and networking opportunities. The project demonstrated my ability to balance technical excellence with user experience, high engagement and full accessibility compliance.",
					"Ultimately, this project was a pivotal learning experience. It allowed me to move from theoretical knowledge to practical mastery of the modern web development stack. The experience was invaluable in end-to-end development, solidifying my skills and confidence. This experience became a comprehensive exercise in building a modern web application from the ground up, establishing a foundation of best practices and a scalable architecture that serves as a template for future projects.",
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
		secondaryImage: "workImages/todo/todo-min.jpeg",
		tertiaryImage: "",
		link: "https://lxnid.github.io/todo-app",
		githubUrl: "https://github.com/lxnid/todo-app",
		description:
			"For any developer, building a to-do application is a classic learning project. My goal was to elevate this concept into a production-ready, full-stack solution that addresses the real-world challenges of modern task management: data persistence, cross-device synchronization, and user privacy. This project showcases a secure, responsive, and feature-rich To-Do Web Application built with React and Firebase, demonstrating expertise in modern frontend architecture and robust backend integration.",
		technologies: [
			"React.js",
			"Firebase Authentication",
			"Firestore Database",
			"React Hooks",
			"Tailwind CSS",
		],
		role: "Full-Stack Development",
		sections: [
			{
				title: "Challenge",
				content:
					"The project aimed to overcome significant technical hurdles in achieving a seamless full-stack integration between React and Firebase. Key challenges included: ensuring effortless Firebase Authentication for user management, developing robust Firestore Database Management for efficient data handling and real-time synchronization, creating an effective Real-Time Data Sync Model for instant updates across devices, and designing a scalable architectural pattern for modular integration between the React frontend and Firebase backend. Addressing these specific challenges was central to building a high-performing To-Do application.",
			},
			{
				title: "Development",
				content:
					"The application's development focused on integration, utilizing React with functional components and hooks for a modular frontend. React Context API managed global state, and custom hooks encapsulated Firebase logic for cleaner code. Firebase integration involved configuring authentication for email/password login and managing global authentication state. Firestore database design was optimized for real-time queries with security rules, and real-time listeners ensured immediate UI updates and synchronization across devices.",
			},
			{
				title: "Reflection",
				content:
					"This project significantly enhanced full-stack development skills, providing hands-on experience with Firebase services like Authentication, Firestore, and real-time synchronization. It also solidified mastery of professional workflows for cloud-based service platforms. The project successfully demonstrated the ability to build production-ready applications by overcoming real-world integration challenges, proving competence in creating scalable and maintainable web applications.",
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
		tertiaryImage: "",
		link: "https://lxnid.github.io/simple_weather",
		githubUrl: "https://github.com/lxnid/simple_weather",
		description:
			"As a computer science student passionate about self-learning through projects, I'm thrilled to share a deep dive into 'Simple Weather,' a personal project that served as my final capstone for HarvardX's CS50P. This application is a testament to building a functional, real-world solution from the ground up, integrating both a Python backend and a React frontend to deliver real-time weather information.",
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
				title: "Challenges & Solutions",
				content: "The 'Simple Weather' project aimed to tackle key full-stack integration challenges. These included robust API integration with external services like PositionStack and WeatherAPI, establishing seamless communication between a React frontend and a FastAPI backend, and designing an intuitive and responsive user interface with clear data display. My solution involved utilizing Python's requests for API calls within the FastAPI backend, implementing CORS middleware for secure frontend-backend communication, and leveraging React's component-based architecture with Tailwind CSS for dynamic and responsive UI design.",
			},
			{
				title: "Architecture & Development Approach",
				content: "The project employs a client-server architecture. The frontend, built with React, JavaScript, and Tailwind CSS, is the user interface responsible for interactions and API requests. The backend, developed using Python with FastAPI, acts as an intermediary, handling reverse geocoding via PositionStack API and fetching weather data from WeatherAPI. My development approach was iterative, starting with a stable backend API before building the React frontend, ensuring modularity and easier debugging. Version control with Git/GitHub and respective package managers (Node.js for frontend, pip for backend) were integral to the workflow.",
			},
			{
				title: "Learning Outcomes & Reflection",
				content: "This project provided invaluable learning outcomes, significantly enhancing my understanding of full-stack development, API design and consumption, and modern web frameworks like React and FastAPI. It reinforced the importance of modular programming and effective dependency management. As a self-taught CS student, this experience was crucial in translating theoretical knowledge into practical application, demonstrating my ability to independently build and deploy a functional web service. 'Simple Weather' stands as a significant milestone, showcasing my skills and readiness to tackle future development challenges for clients and recruiters.",
			},
		],
	},
	{
		id: 4,
		galleryImage: "workImages/portfolio_current/portfolio_current-min.jpg",
		title: "Current Portfolio",
		date: "Ongoing",
		headline:
			"Crafting My Digital Identity – The Portfolio Website",
		image: "workImages/portfolio_current/portfolio_current-min.jpg",
		link: "https://lxnid.github.io/me",
		githubUrl: "https://github.com/lxnid/me",
		description:
			"As a computer science student dedicated to showcasing my journey and capabilities, building my personal portfolio website, 'lxnid.github.io/me,' was an essential project. This wasn't just a static webpage; it was an exercise in self-branding, design, and front-end development, serving as my digital resume and a dynamic display of my work.",
		technologies: [
			"Next.js",
			"TypeScript",
			"Framer Motion",
			"Tailwind CSS",
		],
		role: "Full-Stack Development",
		sections: [
			{
				title: "Challenge",
				content:
					"Driven by the ambition to upgrade from my previous site, my core challenge for this portfolio was to craft a new digital presence that embodied a modern, classic, and sleek design. This necessitated creating intuitive UX/UI and incorporating simple yet sophisticated interactive functionalities and animations. My solution leveraged Next.js for a robust framework, Tailwind CSS for a streamlined and responsive design system, and GSAP alongside Framer Motion to deliver smooth, high-performance animations and interactive elements. This approach ensured a clean presentation and efficient content delivery, addressing the need for both aesthetics and functionality.",
			},
			{
				title: "Development",
				content:
					"The portfolio website is built as a static application utilizing Next.js, which provides a powerful foundation for routing and pre-rendering, ensuring optimal performance. The visual design and responsiveness are meticulously managed with Tailwind CSS, allowing for rapid and precise styling. For dynamic interactivity and captivating animations, I integrated both GSAP (GreenSock Animation Platform) and Framer Motion, enabling smooth transitions and engaging user experiences. My iterative development approach focused on building a modular structure with Next.js components, managing version control with Git/GitHub, and deploying seamlessly via GitHub Pages.",
			},
			{
				title: "Reflection",
				content:
					"This project significantly advanced my front-end development expertise, particularly in building a highly interactive and visually refined site. I gained hands-on mastery of Next.js for modern web application structure, Tailwind CSS for efficient and sleek styling, and the powerful animation libraries GSAP and Framer Motion to achieve simple yet impactful interactive elements and seamless transitions. This endeavor, a clear evolution from my previous site, profoundly demonstrated my ability to execute a precise design vision and deliver a polished, high-performance digital identity, serving as a strong testament to my skills for clients and recruiters.",
			},
		],
	},
	{
		id: 5,
		galleryImage: "workImages/melodine/melodine-min.jpg",
		title: "Melodine: A Music Streaming Application",
		date: "2024",
		headline:
			"A contemporary music streaming platform with Spotify integration, delivering seamless library management and personalized discovery through modern web technologies",
		image: "workImages/melodine/melodine-min.jpg",
		secondaryImage: "workImages/melodine/melodine.jpg",
		link: "https://melodine.onrender.com",
		githubUrl: "https://github.com/lxnid/melodine",
		description:
			"In an era where music streaming has become ubiquitous, I set out to create a platform that goes beyond simple playback—Melodine is a thoughtfully designed music streaming application that leverages the Spotify Web API to deliver a beautiful, intuitive interface for exploring and managing your music library. This project represents a deep dive into OAuth authentication, real-time data management, and creating performant user experiences with modern React patterns. More than just a Spotify client, Melodine demonstrates expertise in full-stack architecture, state management, and building production-ready applications with comprehensive DevOps workflows.",
		technologies: [
			"Next.js 15",
			"React 19",
			"TypeScript",
			"NextAuth.js",
			"Spotify Web API",
			"Tailwind CSS 4",
			"Zustand",
			"TanStack Query",
			"Framer Motion",
			"Docker",
		],
		role: "Full-Stack Development",
		sections: [
			{
				title: "The Challenge",
				content: [
					"Building a music streaming platform presented several significant technical challenges that required careful architectural decisions. The primary challenge was implementing secure OAuth authentication with Spotify while maintaining a seamless user experience across sessions. Additionally, managing complex state for playback controls, playlists, and user preferences demanded a robust state management solution that could handle real-time updates efficiently.",
					"Performance optimization was crucial—fetching and displaying large music libraries without compromising responsiveness required strategic data fetching patterns and caching mechanisms. The application also needed to handle Spotify's rate limits gracefully while providing instant feedback to users. Finally, creating a modern, responsive UI that felt native across all device sizes while incorporating smooth animations posed design and implementation challenges.",
				],
			},
			{
				title: "Technical Architecture & Implementation",
				content: [
					"The solution leverages Next.js 15 with the App Router for optimized routing and server-side rendering capabilities. Authentication is handled through NextAuth.js, implementing Spotify's OAuth 2.0 flow with 11 different permission scopes including playback control, playlist modification, and library access. This ensures users have full control over their Spotify experience while maintaining security best practices.",
					"For state management, I implemented Zustand for global application state, providing a lightweight yet powerful solution for managing user data, playback state, and UI preferences. TanStack Query handles server state management, enabling efficient data fetching, caching, and synchronization with Spotify's API. This combination ensures optimal performance and a responsive user experience even with large datasets.",
					"The frontend utilizes React 19's latest features combined with Tailwind CSS 4 for rapid, responsive design implementation. Framer Motion powers the smooth animations and transitions that enhance the user experience without compromising performance. The entire application is containerized with Docker and deployed using GitHub Actions, demonstrating a production-ready CI/CD pipeline.",
				],
			},
			{
				title: "Features & User Experience",
				content: [
					"Melodine offers comprehensive Spotify integration, providing users with full access to their music library, playlists, and personalized recommendations. The discovery tools include robust search functionality for tracks, artists, albums, and playlists, complemented by personalized sections displaying top artists and recent listening activity.",
					"The interface prioritizes user experience with responsive design optimized for all device sizes, from mobile phones to desktop displays. Every interaction is enhanced with thoughtful animations and transitions, creating an engaging and polished experience that rivals native applications.",
				],
			},
			{
				title: "Project Reflection & Learning Outcomes",
				content: [
					"This project significantly advanced my full-stack development capabilities, particularly in areas of OAuth implementation, complex state management, and real-time data synchronization. Working with Spotify's comprehensive API taught me valuable lessons about API design, rate limiting strategies, and handling asynchronous operations at scale.",
					"The implementation of modern DevOps practices—including Docker containerization and automated GitHub Actions workflows—provided hands-on experience in building and deploying production-ready applications. This project demonstrates my ability to architect scalable solutions, make informed technical decisions, and deliver polished user experiences that meet real-world requirements.",
					"Melodine stands as a testament to my growth as a developer, showcasing the ability to integrate multiple complex technologies into a cohesive, performant application while maintaining clean code architecture and professional development practices.",
				],
			},
		],
	},
];
