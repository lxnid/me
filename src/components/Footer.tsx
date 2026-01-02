import { FaHeart } from "react-icons/fa";

const Footer = () => (
  <footer id="footer" className="w-full border-t border-neutral-800 py-6 px-4 md:px-12 bg-black text-neutral-400 text-xs flex flex-col md:flex-row md:items-end justify-between gap-2 mt-16">
    <div className="flex flex-row items-center gap-2 mb-4 md:mb-0">
      <span>&copy; {new Date().getFullYear()} Hirusha Dinil</span>
      <span className="hidden md:inline">·</span>
      <span>All rights reserved.</span>
      <span className="hidden md:inline">·</span>
      <span>Handcrafted with <FaHeart className="text-red-900 inline" />.</span>
    </div>
    <div className="flex flex-col items-start gap-8 text-left w-full md:w-[32%]">
      <p className="text-xs md:text-sm text-neutral-400 max-w-xs mb-2">
        Hi, I&apos;m Hirusha — a creative developer and designer passionate about building purposeful digital experiences. Let&apos;s connect and create something meaningful together.
      </p>
      <div className="flex flex-col gap-1 w-full">
        <a
          href="mailto:offbeat-zombies.3q@icloud.com"
          className="flex items-center justify-between gap-2 tracking-wide border-t border-neutral-700 pt-2 hover:text-neutral-300 transition-colors text-xs md:text-sm"
        >
          Send an email
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 7l-10 10M17 17V7H7" /></svg>
        </a>
        <a
          href="tel:+94743228881"
          className="flex items-center justify-between gap-2 tracking-wide border-t border-neutral-700 pt-2 hover:text-neutral-300 transition-colors text-xs md:text-sm"
        >
          Give a call
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 7l-10 10M17 17V7H7" /></svg>
        </a>
        <a
          href="https://www.linkedin.com/in/hirusha-dinil-rubasinghe-66bbba313/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between gap-2 tracking-wide border-t border-neutral-700 pt-2 hover:text-neutral-300 transition-colors text-xs md:text-sm"
        >
          LinkedIn
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 7l-10 10M17 17V7H7" /></svg>
        </a>
        <a
          href="https://github.com/lxnid"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between gap-2 tracking-wide border-t border-neutral-700 pt-2 hover:text-neutral-300 transition-colors text-xs md:text-sm"
        >
          GitHub
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 7l-10 10M17 17V7H7" /></svg>
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
