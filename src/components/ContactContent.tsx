import { motion } from "framer-motion";

const contactLinks = [
  {
    label: "Send an email",
    href: "mailto:offbeat-zombies.3q@icloud.com",
    description: "offbeat-zombies.3q@icloud.com",
    external: false,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/hirusha-dinil-rubasinghe-66bbba313/",
    description: "Let's connect professionally",
    external: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/lxnid",
    description: "View my code & projects",
    external: true,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

const lineVariants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

export default function ContactContent() {
  return (
    <section className="min-h-screen pt-[60vh] pb-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="mb-20 md:mb-32"
        >
          <motion.p
            variants={itemVariants}
            className="text-sm md:text-base text-neutral-500 uppercase tracking-[0.2em] mb-6"
          >
            Get in Touch
          </motion.p>
          <motion.h1
            variants={headingVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-medium leading-[1.1] tracking-tight text-neutral-100"
          >
            Let's create
            <br />
            <span className="text-neutral-500">something meaningful.</span>
          </motion.h1>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column - Intro */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="order-2 lg:order-1"
          >
            <motion.div variants={lineVariants} className="origin-left">
              <div className="h-px bg-neutral-700 mb-8" />
            </motion.div>
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-neutral-300 leading-relaxed mb-8"
            >
              Hi, I&apos;m Hirusha — a creative developer and designer
              passionate about building purposeful digital experiences.
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="text-base text-neutral-500 leading-relaxed"
            >
              Whether you have a project in mind, want to collaborate, or just
              want to say hello — I&apos;d love to hear from you. Let&apos;s connect
              and create something meaningful together.
            </motion.p>
          </motion.div>

          {/* Right Column - Contact Links */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="order-1 lg:order-2"
          >
            <div className="flex flex-col">
              {contactLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  variants={itemVariants}
                  className="group relative py-6 border-t border-neutral-800 first:border-t-0 lg:first:border-t transition-colors duration-300 hover:border-neutral-600"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-1">
                      <span className="text-lg md:text-xl font-medium text-neutral-200 group-hover:text-white transition-colors duration-300">
                        {link.label}
                      </span>
                      <span className="text-sm text-neutral-500 group-hover:text-neutral-400 transition-colors duration-300">
                        {link.description}
                      </span>
                    </div>
                    <div className="relative w-10 h-10 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-neutral-500 group-hover:text-neutral-300 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M17 7l-10 10M17 17V7H7"
                        />
                      </svg>
                    </div>
                  </div>
                  {/* Hover background effect */}
                  <div className="absolute inset-0 -mx-4 md:-mx-6 px-4 md:px-6 bg-neutral-900/0 group-hover:bg-neutral-900/50 transition-colors duration-300 -z-10 rounded-lg" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Large Decorative Text */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-32 md:mt-48 overflow-hidden"
        >
          <p className="text-[12vw] md:text-[10vw] font-medium leading-none tracking-tighter text-neutral-900 select-none">
            SAY HELLO
          </p>
        </motion.div>
      </div>
    </section>
  );
}
