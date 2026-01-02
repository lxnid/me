import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import SplitType from "split-type";
import AnimatedText from "./AnimatedText";

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const [showArrow, setShowArrow] = useState(true);
  const textRef = useRef<HTMLHeadingElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(textRef.current, { opacity: 0 });

      const textElement = textRef.current;
      if (!textElement) return;

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

      // Use split-type instead of GSAP SplitText
      const split = new SplitType(textElement, { types: "chars,lines" });
      const chars = split.chars || [];

      tl.to(textElement, { opacity: 1, duration: 0 }).from(chars, {
        opacity: 0,
        y: 40,
        delay: 0.2,
        duration: 1.8,
        ease: "back.out(1.7)",
        stagger: 0.03,
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
        <div className="flex flex-col justify-evenly px-12 py-10 items-center h-full w-full relative">
          <div className="h-full w-full flex items-end justify-between text-xs md:text-sm text-white uppercase">
            <h1
              ref={textRef}
              className="text-4xl md:text-[6rem] font-medium leading-none text-[#dddddd] text-start mt-[28vh] opacity-0 uppercase"
            >
              DINIL <span className="opacity-50">RUBASINGHE</span>
            </h1>
            <div ref={linksRef} className="flex flex-col pointer-events-auto">
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
    </>
  );
};

export default Header;
