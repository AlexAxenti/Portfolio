import Image from "next/image";
import Link from "next/link";
import { SiGithub } from "react-icons/si";
import Card from "../Card/Card";
import TechBadge from "../TechBadge/TechBadge";
import LinkButton from "../LinkButton/LinkButton";
import styles from "./ProjectCard.module.css";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  if (!project.media[0]) return null;

  const image = project.media[0];
 
  return (
    <Card className={styles.projectCard}>
      <div className={styles.imageWrapper}>
        <Image
          src={image.src}
          alt={image.alt}
          width={320}
          height={280}
          className={`${styles.image} ${image.className || ''}`}
          style={image.style}
          priority
        />
      </div>
      
      <div className={styles.content}>
        <div className={styles.topBar}>
          <div className={styles.header}>
            <Link href={`/projects/${project.id}`} className={styles.titleLink}>
              <h3 className={styles.title}>{project.title}</h3>
            </Link>
            <span className={styles.category}>({project.category})</span>
          </div>
          <Link href={`/projects/${project.id}`} className={styles.viewDetailsLink}>
            View Details →
          </Link>
        </div>
        
        <p className={styles.subtitle}>{project.subtitle}</p>
        
        <div className={styles.techStack}>
          {project.techStack.map((tech, index) => (
            <TechBadge
              key={index}
              icon={tech.icon}
              label={tech.label}
              iconStyle={tech.iconStyle}
              iconClassName={tech.iconClassName}
            />
          ))}
        </div>
        
        <div className={styles.links}>
          {project.githubUrl && (
            <LinkButton
              href={project.githubUrl}
              icon={<SiGithub />}
              label="View Code"
            />
          )}
          {project.externalLinks?.map((link, index) => (
            <LinkButton
              key={index}
              href={link.url}
              icon={link.icon}
              label={link.label}
            />
          ))}
        </div>
      </div>
    </Card>
  );
}
