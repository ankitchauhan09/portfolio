"use client";
import Link from 'next/link'

const Navbar = () => {
    return (
        <div className="z-50 w-full h-20 px-10 py-5 flex justify-center backdrop-blur-lg border-b border-neutral-700/80 item-center fixed top-0">
            <nav className="flex w-full relative justify-center item-center  px-10 py-2">
                <ul className="text-white flex flex-row justify-center item-center bg-black-800 w-fit gap-20">
                    <li className="cursor-pointer">
                        {/* Smooth scroll to home-section */}
                        <Link href="#home-section">
                            Home
                        </Link>
                    </li>
                    <li className="cursor-pointer">
                        {/* Smooth scroll to home-section */}
                        <Link href="#home-section">
                            About Me
                        </Link>
                    </li>
                    <li className="cursor-pointer">
                        <Link href="#projects-section">
                            Projects
                        </Link>
                    </li>
                    <li className="cursor-pointer">
                        <Link href="/skills">Skills</Link>
                    </li>
                    <li className="cursor-pointer">
                        <Link href="/skills">Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
