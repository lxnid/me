import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import SplitType from "split-type";
import AnimatedText from "./AnimatedText";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const [showArrow, setShowArrow] = useState(true);
  const textRef = useRef<HTMLHeadingElement>(null);
  const mobileTextRef = useRef<HTMLHeadingElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Desktop text animation
      const textElement = textRef.current;
      if (textElement) {
        gsap.set(textElement, { opacity: 0 });

        const otherElements = [linksRef.current].filter(Boolean);

        const tl = gsap.timeline({
          onComplete: () => {
            gsap.fromTo(
              textElement,
              { y: 0, opacity: 1 },
              {
                y: 500,
                opacity: 0,
                ease: "power1.inOut",
                scrollTrigger: {
                  trigger: document.documentElement,
                  start: "top top",
                  end: "+=1200",
                  scrub: true,
                },
              }
            );

            gsap.fromTo(
              otherElements,
              { opacity: 1, y: 0 },
              {
                opacity: 0,
                y: 50,
                ease: "power1.inOut",
                scrollTrigger: {
                  trigger: document.documentElement,
                  start: "top top",
                  end: "+=800",
                  scrub: true,
                },
              }
            );
          },
        });

        const split = new SplitType(textElement, { types: "chars,lines" });
        const chars = split.chars || [];

        tl.to(textElement, { opacity: 1, duration: 0 }).from(chars, {
          opacity: 0,
          y: 40,
          duration: 2.2,
          ease: "power4.out",
          stagger: 0.02,
        });

        tl.from(
          otherElements,
          {
            opacity: 0,
            y: 20,
            duration: 1,
            ease: "power3.out",
            stagger: 0.2,
          },
          "-=1.5"
        );
      }

      // Mobile text animation (simpler, no split)
      const mobileElement = mobileTextRef.current;
      if (mobileElement) {
        gsap.fromTo(
          mobileElement,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", delay: 0.2 }
        );

        // Scroll fade for mobile
        gsap.fromTo(
          mobileElement,
          { y: 0, opacity: 1 },
          {
            y: 300,
            opacity: 0,
            ease: "power1.inOut",
            scrollTrigger: {
              trigger: document.documentElement,
              start: "top top",
              end: "+=800",
              scrub: true,
            },
          }
        );
      }
    });

    const handleScroll = () => {
      if (window.scrollY > 10) {
        setShowArrow(false);
      } else {
        setShowArrow(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      ctx.revert();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="z-20 absolute w-full h-full flex justify-center items-center pointer-events-none">
        <div className="flex flex-col justify-evenly px-5 md:px-12 py-10 items-center h-full w-full relative">
          <div className="h-full w-full flex flex-col md:flex-row items-start md:items-end justify-end md:justify-between gap-10 md:gap-0 text-xs md:text-sm text-white uppercase">

            {/* Mobile Title - Separate element */}
            <div
              ref={mobileTextRef}
              className="block md:hidden mt-auto text-start opacity-0"
            >
              <span className="block text-[11px] font-light tracking-[0.3em] text-neutral-500 mb-3">
                Portfolio of
              </span>
              <h1 className="text-[2.75rem] leading-[0.95] font-medium text-[#dddddd] uppercase">
                <span className="block">DINIL</span>
                <span className="block text-neutral-500">RUBASINGHE</span>
              </h1>
            </div>

            {/* Desktop Title */}
            <h1
              ref={textRef}
              className="hidden md:block text-[6rem] font-medium leading-none text-[#dddddd] text-start mt-[28vh] opacity-0 uppercase"
            >
              DINIL <span className="opacity-50">RUBASINGHE</span>
            </h1>

            {/* Social Links */}
            <div ref={linksRef} className="flex flex-col pointer-events-auto mt-0 md:mt-5 mb-6 md:mb-0">
              {/* Mobile: Icon links */}
              <div className="flex md:hidden items-center gap-5">
                <a
                  href="https://www.linkedin.com/in/hirusha-dinil-rubasinghe-66bbba313/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 -m-2 text-neutral-500 hover:text-white transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn className="w-4 h-4" />
                </a>
                <a
                  href="https://github.com/lxnid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 -m-2 text-neutral-500 hover:text-white transition-colors duration-300"
                  aria-label="GitHub"
                >
                  <FaGithub className="w-4 h-4" />
                </a>
                <a
                  href="mailto:hirushadinil@gmail.com"
                  className="p-2 -m-2 text-neutral-500 hover:text-white transition-colors duration-300"
                  aria-label="Email"
                >
                  <HiOutlineMail className="w-[18px] h-[18px]" />
                </a>
              </div>

              {/* Desktop: Text links with animation */}
              <div className="hidden md:flex flex-col">
                <a
                  href="https://www.linkedin.com/in/hirusha-dinil-rubasinghe-66bbba313/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="overflow-hidden h-6"
                >
                  <AnimatedText>LINKEDIN</AnimatedText>
                </a>
                <a
                  href="https://github.com/lxnid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="overflow-hidden h-6"
                >
                  <AnimatedText>GITHUB</AnimatedText>
                </a>
                <a
                  href="mailto:hirushadinil@gmail.com"
                  className="overflow-hidden h-6"
                >
                  <AnimatedText>EMAIL</AnimatedText>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
