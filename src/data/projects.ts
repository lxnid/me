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
    id: 6,
    galleryImage: "workImages/cycleparadise/cycleparadise-min.png",
    title: "Multi-Tenant Booking Platform",
    date: "2024 - 2025",
    headline:
      "A production SaaS platform built collaboratively with Software-Lifecycle-Consultants, where co-engineered a multi-tenant booking system with complex scheduling, secure authentication, and enterprise-grade deployment pipelines",
    image: "workImages/cycleparadise/mikkel-bech-yjAFnkLtKY0-unsplash-min.jpg",
    secondaryImage: "workImages/cycleparadise/cycleparadise-min.png",
    link: "https://cycleparadise.bike",
    githubUrl:
      "https://github.com/Software-Lifecycle-Consultants/cycleparadise",
    description:
      "CycleParadise was my first experience working on a production project as part of a professional development team. Collaborating with Software-Lifecycle-Consultants, I contributed to building a comprehensive tourism marketplace for cycling tours across Sri Lanka. This wasn't a solo endeavor—it was a collaborative effort where I learned how real development teams operate: code reviews, version control workflows, task delegation, and collective problem-solving. Working alongside experienced developers pushed me to write cleaner code, follow established conventions, and understand how individual contributions fit into a larger system architecture. The project demanded handling complex booking schedules, managing inventory across multiple tour packages, and building distinct secure portals for administrators and customers.",
    technologies: [
      "Astro 4.16",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Prisma ORM",
      "JWT Authentication",
      "Docker",
      "Docker Compose",
      "GitHub Actions",
      "NodeMailer",
      "Sharp",
      "Linux VPS",
      "Vitest",
      "Playwright",
    ],
    role: "Full-Stack Developer (Team Collaboration)",
    sections: [
      {
        title: "The Project: Real Client, Real Team",
        content: [
          "CycleParadise emerged from a real business need—a cycling tour company in Sri Lanka required a modern platform to showcase their tours, manage bookings, and handle customer inquiries. Software-Lifecycle-Consultants took on this project, and I joined the development team to contribute to building the solution from the ground up.",
          "Working within a team structure taught me how professional software development actually operates. We used Git workflows with feature branches and pull requests, conducted code reviews, and coordinated our efforts through task management. Unlike solo projects where I made all decisions independently, here I learned to discuss architectural choices, defend technical decisions, and adapt to team conventions and coding standards.",
        ],
      },
      {
        title: "My Contributions: Architecture & Implementation",
        content: [
          "Within the team, I spearheaded the full-stack development—working across the Astro frontend, PostgreSQL database layer with Prisma ORM, and the deployment infrastructure. I helped implement the hybrid rendering architecture that combines static generation for SEO-critical marketing pages with server-side rendering for dynamic booking functionality.",
          "I worked on the authentication system implementing session-based authentication with HttpOnly cookies and bcrypt password hashing for the admin panel. The JWT-secured API endpoints ensure distinct access levels between administrators and public users, with Role-Based Access Control (RBAC) governing permissions across the platform.",
          "The DevOps pipeline was another area where I made key contributions—containerizing the application using Docker with multi-stage builds and helping configure the GitHub Actions workflow that automates testing, building, and deployment to a Linux VPS.",
        ],
      },
      {
        title: "Technical Stack & Team Decisions",
        content: [
          "The team chose Astro for its hybrid rendering capabilities, and working with this decision taught me how technology choices are made in professional contexts—balancing performance requirements, SEO needs, developer experience, and project timelines. I learned to work within established architectural patterns rather than always starting from scratch.",
          "The database design using PostgreSQL with Prisma ORM was a collaborative effort. We implemented a robust fallback system that serves static content when the database is unavailable, ensuring the marketing site remains accessible during maintenance—a resilience pattern I hadn't encountered in personal projects.",
          "Testing practices were enforced team-wide using Vitest for unit tests and Playwright for end-to-end testing. Writing tests alongside features, rather than as an afterthought, was a discipline I developed through this team environment.",
        ],
      },
      {
        title: "Platform Features Delivered",
        content: [
          "Together, the team delivered a comprehensive booking system with calendar-based availability, accommodation management, and automated email notifications via NodeMailer. The admin dashboard provides real-time sales metrics, booking management, and a drag-and-drop media library for managing site assets.",
          "Tour packages feature rich content management—detailed itineraries, pricing tiers, image galleries, YouTube embeds, and Instagram feed integration. The public site is fully SEO-optimized with structured data, OpenGraph tags, and a service worker for offline capability.",
          "The project included extensive documentation (Admin Guide, Deployment Guide, Technical Debt tracking) that I contributed to, learning that professional software development requires clear documentation for handoffs and future maintenance.",
        ],
      },
      {
        title: "Professional Growth Through Collaboration",
        content: [
          "CycleParadise was transformative for my development as a software engineer. Working within Software-Lifecycle-Consultants taught me skills that solo projects simply cannot: navigating code reviews constructively, writing code that others can understand and maintain, communicating technical decisions clearly, and contributing to a shared codebase without breaking others' work.",
          "I learned the discipline of following established patterns and conventions even when I might have approached something differently on my own. This experience showed me that professional development is as much about collaboration and communication as it is about technical skill.",
          "Shipping a production application as part of a team—seeing real users depend on code I contributed to—gave me confidence and a realistic understanding of what professional software engineering looks like. The mentorship and feedback from more experienced team members accelerated my growth in ways self-directed learning couldn't match.",
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
        content:
          "The 'Simple Weather' project aimed to tackle key full-stack integration challenges. These included robust API integration with external services like PositionStack and WeatherAPI, establishing seamless communication between a React frontend and a FastAPI backend, and designing an intuitive and responsive user interface with clear data display. My solution involved utilizing Python's requests for API calls within the FastAPI backend, implementing CORS middleware for secure frontend-backend communication, and leveraging React's component-based architecture with Tailwind CSS for dynamic and responsive UI design.",
      },
      {
        title: "Architecture & Development Approach",
        content:
          "The project employs a client-server architecture. The frontend, built with React, JavaScript, and Tailwind CSS, is the user interface responsible for interactions and API requests. The backend, developed using Python with FastAPI, acts as an intermediary, handling reverse geocoding via PositionStack API and fetching weather data from WeatherAPI. My development approach was iterative, starting with a stable backend API before building the React frontend, ensuring modularity and easier debugging. Version control with Git/GitHub and respective package managers (Node.js for frontend, pip for backend) were integral to the workflow.",
      },
      {
        title: "Learning Outcomes & Reflection",
        content:
          "This project provided invaluable learning outcomes, significantly enhancing my understanding of full-stack development, API design and consumption, and modern web frameworks like React and FastAPI. It reinforced the importance of modular programming and effective dependency management. As a self-taught CS student, this experience was crucial in translating theoretical knowledge into practical application, demonstrating my ability to independently build and deploy a functional web service. 'Simple Weather' stands as a significant milestone, showcasing my skills and readiness to tackle future development challenges for clients and recruiters.",
      },
    ],
  },
  {
    id: 4,
    galleryImage: "workImages/portfolio_current/portfolio_current-min.jpg",
    title: "Current Portfolio",
    date: "2025",
    headline:
      "A strategic migration from Next.js to Astro, embracing island architecture for optimal performance while preserving rich React-powered interactions",
    image: "workImages/portfolio_current/portfolio_current-min.jpg",
    link: "https://dinilr.com",
    githubUrl: "https://github.com/lxnid/me",
    description:
      "This portfolio represents more than a showcase of my work—it's a testament to continuous improvement and architectural decision-making. Originally built with Next.js, I strategically migrated the entire codebase to Astro to leverage its island architecture and superior static site performance. The migration preserved all existing React components and animations while dramatically reducing JavaScript bundle sizes. Deployed on Cloudflare Pages, the site now loads faster than ever while maintaining the rich interactivity that makes a portfolio memorable.",
    technologies: [
      "Astro",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "Framer Motion",
      "GSAP",
      "Lenis",
    ],
    role: "Full-Stack Development",
    sections: [
      {
        title: "The Migration Decision",
        content: [
          "After building and maintaining my portfolio with Next.js, I recognized an opportunity to improve performance without sacrificing functionality. Astro's island architecture offered the perfect solution: static HTML by default with selective hydration only where interactivity is needed. This meant my hero animations, smooth scrolling, and interactive project pages could remain fully functional while eliminating unnecessary JavaScript from static content.",
          "The decision wasn't about abandoning React—it was about using it more strategically. Astro allowed me to keep all my React components (Framer Motion animations, GSAP scroll effects, Lenis smooth scrolling) while wrapping them in a framework optimized for content-focused sites.",
        ],
      },
      {
        title: "Architecture & Implementation",
        content: [
          "The migration involved converting Next.js pages to Astro's file-based routing, transforming layout components into Astro layouts, and carefully applying client directives to control hydration. Components requiring browser APIs use `client:only=\"react\"`, while scroll-triggered animations use `client:visible` to defer loading until needed.",
          "I leveraged Tailwind CSS 4's new Vite plugin integration for faster builds and smaller CSS output. The animation stack—Framer Motion for component transitions, GSAP with ScrollTrigger for scroll-based effects, and Lenis for buttery-smooth scrolling—works seamlessly within Astro's partial hydration model. Each technology loads only when its component enters the viewport.",
        ],
      },
      {
        title: "Deployment Evolution",
        content:
          "Moving from GitHub Pages to Cloudflare Pages marked another significant improvement. Cloudflare's edge network provides faster global delivery, automatic SSL, and seamless Git integration for continuous deployment. The build process is straightforward: Astro generates a static `dist` folder that Cloudflare serves directly from its CDN, resulting in sub-second page loads worldwide.",
      },
      {
        title: "Results & Reflection",
        content: [
          "The migration delivered measurable improvements: significantly smaller JavaScript bundles, faster Time to Interactive, and improved Core Web Vitals scores—all while maintaining the exact same user experience. Visitors still enjoy smooth animations, engaging hover effects, and seamless navigation, but the underlying delivery is now far more efficient.",
          "This project reinforced a crucial lesson: the best technology choice depends on the use case. Next.js excels for dynamic applications, but for a content-focused portfolio, Astro's approach of shipping minimal JavaScript by default proved superior. The experience deepened my understanding of modern web architecture and the trade-offs between different rendering strategies.",
        ],
      },
    ],
  },
  {
    id: 5,
    galleryImage: "workImages/melodine/melodine-min.jpg",
    title: "Melodine: A Music Streaming Application",
    date: "2024",
    headline:
      "A personal development project built to deepen my understanding of OAuth authentication, state management, and API integration through building a Spotify-powered music platform",
    image: "workImages/melodine/melodine-min.jpg",
    secondaryImage: "workImages/melodine/melodine.jpg",
    link: "https://melodine.onrender.com",
    githubUrl: "https://github.com/lxnid/melodine",
    description:
      "As a passionate developer eager to expand my skill set beyond basic web development, I embarked on building Melodine—a music streaming application that would challenge me to master OAuth authentication, complex state management, and third-party API integration. This wasn't about creating the next Spotify competitor; it was about pushing myself to understand how modern authentication flows work, how to manage real-time data efficiently, and how to build a production-ready application with professional DevOps workflows. Through this project, I aimed to bridge the gap between tutorial-level knowledge and the practical skills required to build scalable, secure applications that interact with external services.",
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
        title: "Learning Objectives & Challenges",
        content: [
          "My primary goal with Melodine was to gain hands-on experience with OAuth 2.0 authentication—a critical skill I had only understood theoretically. I wanted to truly grasp how secure user authentication works when integrating with third-party services, understanding the flow from authorization to token management and refresh cycles. This meant diving deep into NextAuth.js and implementing Spotify's OAuth flow with 11 different permission scopes.",
          "Beyond authentication, I challenged myself to master modern state management patterns. I needed to understand when to use global state versus server state, how to handle real-time data synchronization, and how to optimize performance when dealing with large datasets. Managing playback controls, playlists, and user preferences while maintaining a responsive UI taught me invaluable lessons about architectural decisions and their trade-offs. Additionally, working with Spotify's API rate limits forced me to think critically about caching strategies and efficient data fetching—skills that translate directly to any production application.",
        ],
      },
      {
        title: "Technical Implementation & Learning Process",
        content: [
          "I chose Next.js 15 with the App Router specifically to learn server-side rendering and modern React patterns. Implementing NextAuth.js was my first real exposure to production-grade authentication, where I learned about session management, secure token storage, and handling authorization callbacks. Each error message and failed authentication attempt taught me something new about OAuth security best practices.",
          "For state management, I deliberately chose to learn both Zustand and TanStack Query to understand their distinct purposes. Zustand helped me grasp global client state management with a simpler API than Redux, while TanStack Query revolutionized my understanding of server state—teaching me about query invalidation, background refetching, and optimistic updates. This dual approach clarified the distinction between client and server state, a concept that significantly improved how I architect applications.",
          "The DevOps side presented entirely new challenges. I had never containerized an application before, so learning Docker taught me about reproducible environments and deployment consistency. Setting up GitHub Actions for CI/CD pipelines gave me practical experience with automated testing and deployment workflows—skills that transformed my development process and understanding of professional software delivery.",
        ],
      },
      {
        title: "What I Built & Achieved",
        content: [
          "Through building Melodine, I created a functional music streaming interface that connects to Spotify's API, allowing users to browse their library, search for music, view their top artists, and explore playlists. The application handles user authentication securely, manages session persistence, and provides a responsive interface that works seamlessly across devices.",
          "More importantly than the features themselves, I achieved my learning goals: I can now confidently implement OAuth authentication in any application, I understand how to architect applications with proper state management separation, and I've gained practical experience with modern DevOps practices including containerization and automated deployment pipelines.",
        ],
      },
      {
        title: "Key Takeaways & Growth",
        content: [
          "This project fundamentally changed how I approach web development. Working with Spotify's comprehensive API taught me how to read API documentation effectively, handle asynchronous operations properly, and debug integration issues systematically. Understanding rate limiting and implementing caching strategies gave me insights into building applications that scale and perform well under real-world constraints.",
          "The most valuable lesson came from encountering and solving real problems that tutorials don't cover—handling token expiration gracefully, managing loading states across multiple components, optimizing re-renders, and debugging authentication flows. These challenges taught me to think like a professional developer, not just follow guides.",
          "Melodine represents a significant milestone in my journey from student to developer. It's the project where theoretical knowledge transformed into practical expertise, where I learned that building software isn't just about making things work—it's about understanding why they work, making informed architectural decisions, and writing maintainable code that others can understand and extend.",
        ],
      },
    ],
  },
];
