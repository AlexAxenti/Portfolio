import Image from "next/image";
import Link from "next/link";
import { SiGithub } from "react-icons/si";
import { HiExternalLink } from "react-icons/hi";
import Card from "./Card";
import TechBadge from "./TechBadge";
import LinkButton from "./LinkButton";
import styles from "./ProjectCard.module.css";

export interface Project {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  image: string;
  imageClassName?: string;
  imageStyle?: React.CSSProperties;
  techStack: Array<{
    icon: React.ReactNode;
    label: string;
    iconStyle?: React.CSSProperties;
    iconClassName?: string;
  }>;
  githubUrl?: string;
  externalLinks?: Array<{
    url: string;
    label: string;
    icon: React.ReactNode;
  }>;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className={styles.projectCard}>
      <div className={styles.imageWrapper}>
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          width={320}
          height={280}
          className={`${styles.image} ${project.imageClassName || ''}`}
          style={project.imageStyle}
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
