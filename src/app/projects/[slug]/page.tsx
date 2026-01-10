import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SiGithub } from "react-icons/si";
import { projects } from "@/data/projects";
import type { ProjectContentBlock } from "@/data/projects";
import ImageCarousel from "@/app/_components/ImageCarousel";
import TechBadge from "@/app/_components/TechBadge";
import LinkButton from "@/app/_components/LinkButton";
import styles from "./page.module.css";
import Card from "@/app/_components/Card";

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} - ${project.category}`,
    description: project.subtitle,
    openGraph: {
      title: `${project.title} - ${project.category}`,
      description: project.subtitle,
      type: "website",
    },
  };
}

function renderContentBlock(block: ProjectContentBlock, index: number) {
  switch (block.type) {
    case "paragraph":
      return (
        <p key={index} className={styles.paragraph}>
          {block.content}
        </p>
      );
    
    case "bullets":
      return (
        <ul key={index} className={styles.bulletList}>
          {block.items.map((item, i) => (
            <li key={i} className={styles.bulletItem}>
              {item}
            </li>
          ))}
        </ul>
      );
    
    case "section":
      return (
        <section key={index} className={styles.contentSection}>
          <h2 className={styles.sectionTitle}>{block.title}</h2>
          {block.blocks.map((subBlock, i) => renderContentBlock(subBlock, i))}
        </section>
      );
    
    default:
      return null;
  }
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <article className={styles.article}>
          {/* Header Section */}
          <header className={styles.header}>
            <h1 className={styles.title}>{project.title}</h1>
            <p className={styles.subtitle}>{project.subtitle}</p>
            {project.dateRange && (
              <p className={styles.dateRange}>{project.dateRange}</p>
            )}
          </header>

          {/* Image Carousel */}
          <div className={styles.carouselSection}>
            <ImageCarousel media={project.media} />
          </div>

          {/* Links and Tech Stack Section */}
          <Card className={styles.metaSection}>
            {/* Links */}
            {(project.githubUrl || project.externalLinks) && (
              <div className={styles.linksContainer}>
                <h2 className={styles.metaHeading}>Links</h2>
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
            )}

            {/* Tech Stack */}
            <div className={styles.techContainer}>
              <h2 className={styles.metaHeading}>Tech Stack</h2>
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
            </div>
          </Card>

          {/* Content Blocks */}
          <Card className={styles.metaSection}>          
            {project.content && project.content.length > 0 && (
                <div className={styles.contentContainer}>
                {project.content.map((block, index) => renderContentBlock(block, index))}
                </div>
            )}
          </Card>
        </article>
      </main>
    </div>
  );
}
