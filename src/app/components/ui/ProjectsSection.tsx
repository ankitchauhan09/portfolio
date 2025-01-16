"use client";

import React from "react";
import { motion } from "framer-motion";
import { Timeline } from "@/app/components/ui/Timeline";
import Image from "next/image";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

// Define interfaces
interface Project {
  title: string;
  description: string;
  image: string;
}

interface TimelineItem {
  title: string;
  content: React.ReactNode;
}

interface TimelineProps {
  data: TimelineItem[];
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

const ProjectsSection = () => {
  const data: TimelineItem[] = [
    {
      title: "2025 - Jobly, a job and internship platform",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Built <span className="text-[#7364EB] ">Jobly</span>, a interactive
            job and internship platform. It has a strong & robust backend
            developed using Spring Boot framework..
          </p>
          <InteractiveHoverButton className="mb-2">
            Source Code
          </InteractiveHoverButton>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://sfmrqycwibsrxzmucyzr.supabase.co/storage/v1/object/public/project-images/Screenshot%202024-11-11%20165238.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://sfmrqycwibsrxzmucyzr.supabase.co/storage/v1/object/public/project-images/Screenshot%202024-12-16%20235012.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://sfmrqycwibsrxzmucyzr.supabase.co/storage/v1/object/public/project-images/Screenshot%202024-11-11%20165246.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2024 - CampusHub, one stop solution for all campus issues...",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
            CampusHub is a one stop solution for all the campus problems &
            requirements.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Want to share notes, attend live classes, mark attendances, create
            or join chat groups within the campus? Jobly is here to fulfill, all
            your desires..
          </p>
          <InteractiveHoverButton className="mb-2">
            Source Code
          </InteractiveHoverButton>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-20 md:h-44 lg:h-60">
              <Image
                src="https://sfmrqycwibsrxzmucyzr.supabase.co/storage/v1/object/public/project-images/Screenshot%202024-04-09%20154857.png"
                alt="hero template"
                fill
                className="rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06)]"
              />
            </div>
            <div className="relative h-20 md:h-44 lg:h-60">
              <Image
                src="https://sfmrqycwibsrxzmucyzr.supabase.co/storage/v1/object/public/project-images/Screenshot%202025-01-17%20010321.png"
                alt="feature template"
                fill
                className="rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06)]"
              />
            </div>
            <div className="relative h-20 md:h-44 lg:h-60">
              <Image
                src="https://sfmrqycwibsrxzmucyzr.supabase.co/storage/v1/object/public/project-images/Screenshot%202025-01-17%20010339.png"
                alt="bento template"
                fill
                className="rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06)]"
              />
            </div>
            <div className="relative h-20 md:h-44 lg:h-60">
              <Image
                src="https://sfmrqycwibsrxzmucyzr.supabase.co/storage/v1/object/public/project-images/Screenshot%202025-01-17%20010357.png"
                alt="bento template"
                fill
                className="rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06)]"
              />
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="projects-section min-h-screen" className="pt-20">
      <div className="w-full">
        <Timeline data={data} />
      </div>
    </section>
  );
};

export default ProjectsSection;
