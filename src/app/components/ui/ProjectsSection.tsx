"use client";

import React from "react";
import { motion } from "framer-motion";

interface Project {
  title: string;
  description: string;
  image: string;
}

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: false, margin: "-100px" }}
      className="w-full bg-neutral-900/50 rounded-xl p-6 hover:bg-neutral-800/50 transition-all duration-300 border border-neutral-700/50 backdrop-blur-sm"
    >
      <motion.div whileHover={{ scale: 1.02 }} className="flex flex-col gap-4">
        <div className="w-full h-48 bg-neutral-800 rounded-lg overflow-hidden">
          <div className="w-full h-full flex items-center justify-center text-neutral-400">
            {/* Updated image URL */}
            <img src={project.image} alt="Project Image" />
          </div>
        </div>

        <motion.h3
          className="text-2xl font-semibold text-white"
          whileHover={{ x: 10 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {project.title}
        </motion.h3>

        <p className="text-neutral-300 leading-relaxed">
          {project.description}
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-fit px-6 py-2 bg-green-500 text-black font-medium rounded-lg mt-2 hover:bg-green-400 transition-colors"
        >
          Source Code
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

const projectData = [
  {
    title: "Jobly - A job and internship portal",
    description:
      "Jobly is a interactive job and internship portal, providing wide range of functionalities.",
    image:
      "https://sfmrqycwibsrxzmucyzr.supabase.co/storage/v1/object/public/project-images/Screenshot%202024-11-11%20165238.png",
  },
  {
    title: "CampusHub - Android application for campus",
    description:
      "CampusHub is a feature rich android application. It provides various functionalities for the students and faculties.",
    image:
      "https://sfmrqycwibsrxzmucyzr.supabase.co/storage/v1/object/public/project-images/Screenshot%202024-04-07%20214227.png",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects-section" className="pt-20">
      <div className="w-full min-h-screen px-4 md:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, margin: "-100px" }}
          className="py-5"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-12">
            Some of my <span className="text-green-500">creations...</span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectData.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
