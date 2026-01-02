import { LuExternalLink } from "react-icons/lu";
import Button from "./Button";

const skills = [
  "React", "Next.js", "TypeScript", "JavaScript", "Astro",
  "Tailwind CSS", "CSS", "HTML", "Framer Motion", "GSAP",
  "React Hooks", "React Context API", "Zustand",
  "TanStack Query", "REST APIs", "Spotify API", "OpenWeatherMap API",
  "Python", "Node.js", "Express.js", "Fastify", "FastAPI", "Flask",
  "Firebase", "Firebase Authentication", "Firestore Database", "AWS",
  "NextAuth.js", "OAuth 2.0", "Data Security",
  "Docker", "CI/CD", "GitHub Actions", "Git", "GitHub",
  "Java", "C", "Linux", "VMs",
  "Figma", "Responsive Design", "UI/UX Design",
  "Agile", "Full-Stack Development",
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
      <div className="w-full md:w-7/12 p-8 md:p-16 lg:p-24 md:pt-32 flex flex-col justify-start">
         <div>
            <h2 className="text-xl md:text-lg mb-8 opacity-80 uppercase tracking-wide">
                Hirusha Dinil Rubasinghe
            </h2>
            
            <p className="text-2xl md:text-3xl font-medium leading-snug mb-12">
              I am a creative technologist passionate
              about blending design, technology, and strategy. I thrive on
              solving complex problems, building engaging digital experiences,
              and helping brands stand out in a rapidly changing world.
            </p>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
                <div>
                     <p className="text-sm uppercase tracking-wider mb-4 opacity-50 font-bold">Focus</p>
                     <p className="text-neutral-400 leading-relaxed">
                        I focus on delivering meaningful, innovative solutions that
                        reflect unique visions and values—always adapting to the
                        latest trends while staying true to authenticity. My work
                        transforms ideas into memorable journeys—where design, technology,
                        and imagination meet.
                     </p>
                </div>
                <div>
                    <p className="text-sm uppercase tracking-wider mb-4 opacity-50 font-bold">Resume</p>
                    <a
                      href="/resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xl hover:text-white text-neutral-400 transition-colors"
                    >
                      View Resume <LuExternalLink className="text-lg" />
                    </a>
                </div>
            </div>

            <div className="mb-12">
              <p className="text-sm uppercase tracking-wider mb-6 opacity-50 font-bold">Technical Expertise</p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 border border-neutral-800 rounded-full text-sm text-neutral-400 hover:text-white hover:border-neutral-600 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
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