import Navbar from "@/app/components/ui/Navbar";
import styles from "@/app/css/background.module.css";
import HomeSection from "@/app/components/ui/HomeSection";
import React from "react";
import Skills from "@/app/components/ui/ProjectsSection";
import ProjectsSection from "@/app/components/ui/ProjectsSection";
import AboutMeSection from "@/app/components/ui/AboutMeSection";

export default function Home() {
  return (
    <div className={`${styles.bg} min-h-screen w-full`}>
      <Navbar />
      <HomeSection />
      <ProjectsSection />
      <AboutMeSection />
    </div>
  );
}
