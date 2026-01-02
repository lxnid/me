import { BsArrowRightCircleFill, BsArrowRightCircle } from 'react-icons/bs';
import { motion } from 'framer-motion';
import MagneticWrapper from './MagneticWrapper';

interface ButtonProps {
  href: string;
  label: string;
}

const Button = ({ href, label }: ButtonProps) => {
  const isExternal = href.startsWith('http') || href.startsWith('//');

  return (
    <MagneticWrapper strength={0.2}>
      <a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="group w-fit h-fit px-5 py-3 text-xl opacity-70 hover:opacity-100 rounded-full gap-2 hover:gap-4 mr-2 hover:mr-0 transition-all duration-300 ease-in-out border border-neutral-400 hover:border-neutral-300 flex justify-evenly items-center"
      >
        <motion.h2
          initial={{ y: 0 }}
          whileHover={{ y: -2 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          {label}
        </motion.h2>
        <div className="relative w-8 h-8">
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1, rotate: -15 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <BsArrowRightCircleFill className="text-3xl absolute transition-all duration-300 opacity-100 group-hover:opacity-0" />
            <BsArrowRightCircle className="text-3xl absolute transition-all duration-300 opacity-0 group-hover:opacity-100" />
          </motion.div>
        </div>
      </a>
    </MagneticWrapper>
  );
};

export default Button;
