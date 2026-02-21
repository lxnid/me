import { LuExternalLink } from "react-icons/lu";
import Button from "./Button";

const skillCategories = [
  {
    title: "Core Engineering",
    skills: [
      "TypeScript",
      "JavaScript",
      "React",
      "Next.js",
      "Node.js",
      "REST APIs",
      "Git",
    ],
  },
  {
    title: "Cloud & Infrastructure",
    skills: [
      "AWS Lambda",
      "AWS EventBridge",
      "AWS CloudWatch",
      "Docker",
      "Docker Compose",
      "GitHub Actions",
      "CI/CD",
      "Linux VPS",
      "Serverless Architecture",
    ],
  },
  {
    title: "Frontend",
    skills: [
      "Astro",
      "Tailwind CSS",
      "CSS",
      "HTML",
      "Framer Motion",
      "GSAP",
      "React Hooks",
      "Zustand",
      "TanStack Query",
      "Responsive Design",
    ],
  },
  {
    title: "Databases & Backend",
    skills: [
      "PostgreSQL",
      "Prisma ORM",
      "Firestore",
      "Firebase Authentication",
      "Express.js",
      "Fastify",
      "FastAPI",
      "Flask",
      "Python",
    ],
  },
  {
    title: "Auth & Security",
    skills: [
      "JWT Authentication",
      "Session-based Auth",
      "NextAuth.js",
      "OAuth 2.0",
      "bcrypt",
      "RBAC",
      "HttpOnly Cookies",
    ],
  },
  {
    title: "Testing & Quality",
    skills: ["Vitest", "Playwright", "End-to-End Testing", "Unit Testing"],
  },
  {
    title: "Design & Product",
    skills: ["Figma", "UI/UX Design", "Full-Stack Development", "Agile"],
  },
  {
    title: "Exposure / Learning",
    skills: [
      "Java",
      "C",
      "Amazon Bedrock",
      "OpenAI API",
      "Multi-Agent Systems",
    ],
  },
];

export default function AboutPageContent() {
  return (
    <div className="min-h-screen w-full bg-neutral-900 text-[#dddddd] flex flex-col md:flex-row relative">
      {/* Visual Side (Left) */}
      <div className="w-full md:w-5/12 h-[50vh] md:h-screen md:sticky md:top-0 relative overflow-hidden border-r border-neutral-800 shrink-0">
        <div className="absolute inset-0 bg-neutral-800/20 z-10" />
        <video
          src="/video/10994873-hd_720_1280_25fps_web.mp4"
          className="object-cover w-full h-full opacity-60"
          autoPlay
          loop
          muted
          playsInline
          aria-label="Background video"
        />
        <div className="absolute bottom-10 left-10 z-20">
          <h1 className="text-6xl md:text-8xl font-medium uppercase leading-none tracking-tighter">
            About
          </h1>
          <h1 className="text-6xl md:text-8xl font-medium uppercase leading-none tracking-tighter text-neutral-400">
            Me
          </h1>
        </div>
      </div>

      {/* Content Side (Right) */}
      <div className="w-full md:w-7/12 p-8 md:p-16 lg:p-24 md:pt-32 lg:pt-60 flex flex-col justify-start">
        <div>
          <h2 className="text-xl md:text-lg mb-8 opacity-80 uppercase tracking-wide">
            Hirusha Dinil Rubasinghe
          </h2>
          <p className="text-xl md:text-2xl font-light leading-snug mb-6 text-neutral-300">
            I'm Hirusha Dinil Rubasinghe — a software engineer and second-year
            Computer Science student at Curtin University Colombo.
          </p>

          <div className="space-y-6 text-neutral-400 leading-relaxed mb-16">
            <p>
              I've been building on the web for five years, starting at 15
              during the COVID lockdowns out of curiosity and a browser. That
              early obsession evolved into something serious — production
              experience, an internship at a UK SaaS company, and a growing
              focus on cloud infrastructure and AI engineering.
            </p>
            <p>
              At Velaris.io, a B2B SaaS company based in the UK, I built
              serverless monitoring infrastructure from scratch: AWS Lambda
              functions, EventBridge pipelines, and a CloudWatch-based Health
              Monitoring Dashboard with AI-powered log normalization. Debugging
              time dropped from 20 minutes to 2 minutes. That was a real
              production system that a real team depended on — and shipping it
              changed how I think about software engineering entirely.
            </p>
            <p>
              Outside of internship work, I built Investly — a real-time
              portfolio tracker for the Colombo Stock Exchange — because I
              maintain small equity investments and the tooling didn't exist.
              I've collaborated with professional development teams on
              production SaaS platforms, shipped end-to-end tested systems, and
              learned to work within real engineering conventions rather than
              just my own preferences.
            </p>
            <p>
              I write about what I'm learning. I'm actively engaged with
              Colombo's AI and startup ecosystem — showing up to events, making
              connections, and paying attention to where things are going.
            </p>
            <p>
              My current focus: cloud and serverless engineering, full-stack
              product development, and the tooling layer of AI systems. I'm
              interested in roles and collaborations where engineering depth
              matters and where the work reaches real users.
            </p>
            <p>
              I'm naturally introverted — but I've learned to build in public,
              through writing, through community, and through the work itself.
            </p>
          </div>

          <div className="mb-16">
            <p className="text-sm uppercase tracking-wider mb-8 opacity-50 font-bold">
              What I Focus On
            </p>

            <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
              <div>
                <h3 className="text-white font-medium mb-3">
                  Cloud & Serverless Engineering
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  AWS Lambda, EventBridge, CloudWatch — building backend systems
                  that operate reliably without constant intervention. This is
                  where my production experience lives and where I'm actively
                  deepening.
                </p>
              </div>
              <div>
                <h3 className="text-white font-medium mb-3">
                  Full-Stack Product Development
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  TypeScript, React, Next.js, Astro, PostgreSQL — building
                  complete products from data layer to deployed UI. I care about
                  architecture and user experience with equal weight.
                </p>
              </div>
              <div>
                <h3 className="text-white font-medium mb-3">
                  AI-Integrated Tooling
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  Exploring how AI fits into real engineering workflows — not as
                  a novelty, but as infrastructure. Interested in agentic
                  systems, AI-assisted development, and the emerging tooling
                  layer being built around LLMs.
                </p>
              </div>
              <div>
                <h3 className="text-white font-medium mb-3">
                  Writing & Technical Communication
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  I write about what I build and what I'm learning. Clear
                  communication is part of engineering, not a separate thing
                  from it.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <p className="text-sm uppercase tracking-wider mb-4 opacity-50 font-bold">
              Resume
            </p>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xl hover:text-white text-neutral-400 transition-colors"
            >
              View Resume <LuExternalLink className="text-lg" />
            </a>
          </div>

          <div className="mb-12">
            <p className="text-sm uppercase tracking-wider mb-8 opacity-50 font-bold">
              Technical Skills
            </p>
            <div className="space-y-8">
              {skillCategories.map((category, idx) => (
                <div key={idx}>
                  <h3 className="text-white text-sm uppercase tracking-wider mb-4">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIdx) => (
                      <span
                        key={skillIdx}
                        className="px-3 py-1.5 border border-neutral-800 rounded-full text-xs text-neutral-400 hover:text-white hover:border-neutral-600 transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 pt-12 border-t border-neutral-800">
            <Button href="/work" label="See My Work" />
          </div>
        </div>
      </div>
    </div>
  );
}
