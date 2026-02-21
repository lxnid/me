import { useState, useRef, useEffect } from "react";
import { HiMinus, HiOutlineMenuAlt4 } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { href: "/about", label: "About", index: "01" },
  { href: "/work", label: "Work", index: "02" },
  { href: "/blog", label: "Writing", index: "03" },
  { href: "/contact", label: "Contact", index: "04" },
  { href: "/archive", label: "Archive", index: "05" },
];

const socialLinks = [
  { href: "https://github.com/lxnid", label: "GitHub" },
  {
    href: "https://www.linkedin.com/in/hirusha-dinil-rubasinghe-66bbba313/",
    label: "LinkedIn",
  },
  { href: "mailto:hirushadinil@gmail.com", label: "Email" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show/hide logic
      if (currentScrollY > lastScrollY.current && currentScrollY > 30) {
        setShowNavbar(false);
      } else if (currentScrollY < lastScrollY.current) {
        setShowNavbar(true);
      }

      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: showNavbar ? 0 : -100, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className={`fixed top-0 left-0 z-30 w-full transition-colors duration-300 ${
        isMenuOpen ? "bg-neutral-950" : "mix-blend-difference"
      }`}
    >
      <nav className="flex items-center justify-between h-16 md:h-20 px-5 md:px-12 lg:px-16">
        {/* Logo */}
        <motion.a
          href="/"
          className="relative group z-50"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <img
            src="/logo.svg"
            alt="Hirusha Dinil"
            width={28}
            height={28}
            className="w-6 h-6 md:w-7 md:h-7 relative z-10 transition-opacity duration-300 group-hover:opacity-80"
          />
          {/* Subtle glow on hover */}
          <div className="absolute inset-0 -m-2 rounded-full bg-white/0 group-hover:bg-white/5 transition-all duration-500 blur-xl" />
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item, idx) => (
            <NavLink key={item.href} item={item} index={idx} />
          ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden relative z-50 flex items-center gap-2 text-white focus:outline-none"
          onClick={toggleMenu}
          whileTap={{ scale: 0.95 }}
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={isMenuOpen ? "close" : "menu"}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.15 }}
              className="text-[10px] uppercase tracking-[0.2em] text-neutral-400"
            >
              {isMenuOpen ? "Close" : "Menu"}
            </motion.span>
          </AnimatePresence>
          <div className="relative w-6 h-6 flex items-center justify-center">
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <HiMinus className="w-5 h-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <HiOutlineMenuAlt4 className="w-5 h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.button>
      </nav>

      {/* Mobile Full-Screen Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 top-16 md:hidden bg-neutral-950 z-40 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Background gradient accent */}
            <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-950 to-neutral-900 pointer-events-none" />

            {/* Decorative line */}
            <motion.div
              className="absolute top-0 left-5 w-px h-full bg-gradient-to-b from-white/10 via-white/5 to-transparent"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              exit={{ scaleY: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              style={{ transformOrigin: "top" }}
            />

            <div className="relative h-full flex flex-col justify-between px-5 py-8">
              {/* Navigation Links */}
              <div className="space-y-2 pl-6">
                {navItems.map((item, idx) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{
                      delay: 0.1 + idx * 0.06,
                      duration: 0.5,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                  >
                    <a
                      href={item.href}
                      className="group flex items-baseline gap-4 py-3"
                      onClick={closeMenu}
                    >
                      <span className="text-[11px] font-light text-neutral-600 tabular-nums tracking-wider w-6">
                        {item.index}
                      </span>
                      <span className="text-3xl font-light tracking-tight text-neutral-200 group-active:text-white transition-colors duration-200">
                        {item.label}
                      </span>
                    </a>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Section: Tagline + Social */}
              <div className="pl-6">
                {/* Tagline */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="text-[11px] uppercase tracking-[0.25em] text-neutral-500 mb-6"
                >
                  Software Engineer
                </motion.p>

                {/* Social Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="flex items-center gap-6"
                >
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target={
                        link.href.startsWith("mailto") ? undefined : "_blank"
                      }
                      rel={
                        link.href.startsWith("mailto")
                          ? undefined
                          : "noopener noreferrer"
                      }
                      className="text-xs uppercase tracking-wider text-neutral-500 hover:text-white transition-colors duration-300"
                      onClick={closeMenu}
                    >
                      {link.label}
                    </a>
                  ))}
                </motion.div>

                {/* Copyright */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="text-[10px] text-neutral-700 mt-8"
                >
                  © {new Date().getFullYear()} Hirusha Dinil
                </motion.p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

// Refined nav link with editorial-style hover (Desktop only)
const NavLink = ({
  item,
  index,
}: {
  item: (typeof navItems)[0];
  index: number;
}) => {
  return (
    <motion.a
      href={item.href}
      className="group relative px-4 py-2 flex items-center gap-2"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 + index * 0.05, duration: 0.5 }}
    >
      {/* Index number - editorial style */}
      <span className="text-[9px] font-light text-neutral-500 tabular-nums tracking-wider opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-1 group-hover:translate-x-0">
        {item.index}
      </span>

      {/* Label */}
      <span className="relative text-[13px] font-light uppercase tracking-[0.15em] text-neutral-300 group-hover:text-white transition-colors duration-300">
        {item.label}

        {/* Underline reveal */}
        <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gradient-to-r from-white/60 to-white/20 group-hover:w-full transition-all duration-500 ease-out" />
      </span>

      {/* Dot separator */}
      {index < navItems.length - 1 && (
        <span className="ml-2 text-neutral-700 text-[8px] select-none">●</span>
      )}
    </motion.a>
  );
};

export default Navbar;
