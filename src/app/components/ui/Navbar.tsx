"use client";
import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import fontStyles from '@/app/css/customfont.module.css';
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-lg border-b border-neutral-200 dark:border-neutral-800">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center">
                    <DotLottieReact
                        src="https://lottie.host/2d042266-c6a2-4e1c-832d-27edc5fa6451/TiFjcYZEp7.lottie"
                        loop
                        autoplay
                        style={{ height: '50px', width: '50px' }}
                    />
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-8 items-center">
                    <Link href="/" className="hover:text-blue-500 transition">Home</Link>
                    <Link href="/about" className="hover:text-blue-500 transition">About</Link>
                    <Link href="/projects" className="hover:text-blue-500 transition">Projects</Link>
                    <Link href="/contact" className="hover:text-blue-500 transition">Contact</Link>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden">
                    <button
                        onClick={toggleMenu}
                        className="focus:outline-none"
                    >
                        {isMenuOpen ? '✕' : '☰'}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white dark:bg-black"
                    >
                        <div className="flex flex-col items-center space-y-4 py-4">
                            <Link
                                href="/"
                                className="w-full text-center py-2 hover:bg-neutral-100 dark:hover:bg-neutral-900"
                                onClick={toggleMenu}
                            >
                                Home
                            </Link>
                            <Link
                                href="/about"
                                className="w-full text-center py-2 hover:bg-neutral-100 dark:hover:bg-neutral-900"
                                onClick={toggleMenu}
                            >
                                About
                            </Link>
                            <Link
                                href="/projects"
                                className="w-full text-center py-2 hover:bg-neutral-100 dark:hover:bg-neutral-900"
                                onClick={toggleMenu}
                            >
                                Projects
                            </Link>
                            <Link
                                href="/contact"
                                className="w-full text-center py-2 hover:bg-neutral-100 dark:hover:bg-neutral-900"
                                onClick={toggleMenu}
                            >
                                Contact
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;