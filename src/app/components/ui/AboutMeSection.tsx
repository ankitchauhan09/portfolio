"use client";
import React from "react";
import { motion } from "framer-motion";
import { HoverEffect } from "@/app/components/ui/HoverEffect";

const AboutMeSection = () => {
  return (
    <section
      id="about-me-section"
      className="min-h-screen flex items-center justify-center bg-neutral-900 text-white py-20"
    >
      <div className="container mx-auto px-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-5">About Me</h2>
          <HoverEffect className="p-5">
            <p className="text-lg leading-relaxed">
              Hello! I'm a passionate developer with a love for creating dynamic
              and engaging web applications. With a strong foundation in modern
              web technologies and a keen eye for design, I strive to build
              user-friendly and visually appealing interfaces. My journey in the
              tech world has been driven by curiosity and a constant desire to
              learn and grow. Let's build something amazing together!
            </p>
          </HoverEffect>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMeSection;
