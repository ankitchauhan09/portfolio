"use client";

import { BackgroundLines } from "./background-lines";
import React from "react";
import { TextGenerateEffect } from "@/app/components/ui/TextGenerateEffect";
import { motion } from "framer-motion";
import { cn } from "@/app/lib/utils"; // Adjust import path as needed

const words = "Enthusiastic software developer with a passion for building scalable, real-time applications. I blend technical expertise with creativity to craft seamless user experiences, always seeking to solve complex problems and bring innovative ideas to life."

const HomeSection = () => {
    return (
        <section
            id="home-section"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            <div className="absolute inset-0 z-0 pointer-events-none">
                <BackgroundLines
                    className="absolute inset-0 w-full h-full"
                    svgOptions={{
                        duration: 15, // Slightly longer duration for smoother effect
                    }}
                />
            </div>

            <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-center space-y-4 md:space-y-6"
                >
                    <h2 className={cn(
                        "bg-clip-text text-transparent",
                        "bg-gradient-to-b from-neutral-900 to-neutral-700",
                        "dark:from-neutral-600 dark:to-white",
                        "text-4xl sm:text-5xl md:text-6xl lg:text-7xl",
                        "font-bold tracking-tight",
                        "leading-tight"
                    )}>
                        Hey there, I'm Ankit Chauhan
                    </h2>

                    <TextGenerateEffect
                        className={cn(
                            "max-w-xl mx-auto",
                            "text-sm sm:text-base md:text-lg",
                            "text-neutral-700 dark:text-neutral-400",
                            "text-center",
                            "leading-relaxed"
                        )}
                        words={words}
                    />
                </motion.div>
            </div>
        </section>
    );
}

export default HomeSection;