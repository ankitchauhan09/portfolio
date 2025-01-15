    "use client";

    import {BackgroundLines} from "./background-lines";
    import React from "react";
    const HomeSection = () => {
        return (
            <section id="home-section">
            <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 mt-20">
                <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
                    Hey there, I'm Ankit Chauhan
                </h2>

                <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
                    Enthusiastic software developer with a passion for building scalable, real-time applications. I blend
                    technical expertise with creativity to craft seamless user experiences, always seeking to solve complex
                    problems and bring innovative ideas to life.
                </p>
            </BackgroundLines>
            </section>
        );
    }

    export default HomeSection;