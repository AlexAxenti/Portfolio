"use client";

import { useState } from "react";
import ProjectCard from "@/app/_components/ProjectCard";
import { projects } from "@/data/projects";
import type { ProjectStatus } from "@/data/projects";
import styles from "./page.module.css";

export default function ProjectsClient() {
  const [activeTab, setActiveTab] = useState<ProjectStatus>("completed");

  const filteredProjects = projects.filter(
    (project) => project.projectStatus === activeTab
  );

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.projectsSection}>
          <h1 className={styles.pageHeading}>Projects</h1>
        
        {/* Tab Selector */}
          <div className={styles.tabContainer}>
            <button
              className={`${styles.tab} ${activeTab === "completed" ? styles.activeTab : ""}`}
              onClick={() => setActiveTab("completed")}
            >
              Completed
            </button>
            <button
              className={`${styles.tab} ${activeTab === "in-progress" ? styles.activeTab : ""}`}
              onClick={() => setActiveTab("in-progress")}
            >
              In Progress / Old
            </button>
          </div>

        {/* Projects Grid */}
          <div className={styles.projectsGrid}>
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))
            ) : (
              <p className={styles.emptyState}>
                No projects in this category yet.
              </p>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
