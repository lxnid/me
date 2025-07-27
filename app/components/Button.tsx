import Link from 'next/link'
import React from 'react'
import { BsArrowRightCircleFill, BsArrowRightCircle } from 'react-icons/bs'

interface ButtonProps {
    href: string;
    label: string;
}

const Button = ({ href, label }: ButtonProps) => {
    return (
        <Link
            href={href}
            target="_blank"
            className="group w-fit h-fit px-5 py-3 text-xl opacity-70 hover:opacity-100 rounded-full gap-2 hover:gap-4 mr-2 hover:mr-0 transition-all duration-300 ease-in-out border border-neutral-400 flex justify-evenly items-center"
        >
            <h2>{label}</h2>
            <div className="relative w-8 h-8">
                <BsArrowRightCircleFill className="text-3xl absolute transition-all duration-300 opacity-100 group-hover:opacity-0" />
                <BsArrowRightCircle className="text-3xl absolute transition-all duration-300 opacity-0 group-hover:opacity-100" />
            </div>
        </Link>
    )
}

export default Button;