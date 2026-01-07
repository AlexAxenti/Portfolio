import Image from "next/image";
import type { Metadata } from "next";
import { SiTypescript, SiSharp, SiRust, SiReact, SiNextdotjs, SiDotnet, SiNestjs, SiPostgresql, SiDocker, SiGooglechrome, SiApple, SiRedis, SiSupabase, SiStripe, SiExpo } from "react-icons/si";
import { HiExternalLink } from "react-icons/hi";
import Card from "@/app/_components/Card";
import TechBadge from "@/app/_components/TechBadge";
import ProjectCard, { type Project } from "@/app/_components/ProjectCard";
import styles from "./page.module.css";

const projects: Project[] = [
  {
    id: "TouchBase",
    title: "TouchBase",
    category: "Web and Chrome Extension SaaS",
    subtitle: "A lightweight, AI-powered networking CRM to organize contacts, track follow-ups, and stay intentional with professional relationships.",
    image: "/TouchBase1.png",
    techStack: [
      { icon: <SiReact />, label: "React", iconStyle: { color: "#61DAFB" } },
      { icon: <SiNestjs />, label: "NestJS", iconStyle: { color: "#E0234E" } },
      { icon: <SiTypescript />, label: "TypeScript", iconStyle: { color: "#3178C6" } },
      { icon: <SiPostgresql />, label: "PostgreSQL", iconStyle: { color: "#4169E1" } },
      { icon: <SiDocker />, label: "Docker", iconStyle: { color: "#2496ED" } },
      { icon: <SiSupabase />, label: "Supabase", iconStyle: { color: "#3FCF8E" } },
      { icon: <SiStripe />, label: "Stripe", iconStyle: { color: "#635BFF" } },
    ],
    externalLinks: [
      { url: "https://touch-base.ca/", label: "Web App", icon: <HiExternalLink /> },
      { url: "https://chromewebstore.google.com/detail/touchbase/dgmjggdiacoemgnjjlkijjcmdljnmhok", label: "Chrome Store", icon: <SiGooglechrome /> },
    ],
  },
  {
    id: "PostureCheck",
    title: "Posture Check",
    category: "Mobile App",
    subtitle: "A cross-platform mobile app that helps users improve posture through gentle reminders and habit tracking.",
    image: "/PostureCheck1.png",
    imageStyle: { objectFit: "cover", height: "260px" },
    techStack: [
      { icon: <SiReact />, label: "React Native", iconStyle: { color: "#61DAFB" } },
      { icon: <SiTypescript />, label: "TypeScript", iconStyle: { color: "#3178C6" } },
      { icon: <SiExpo />, label: "Expo", iconClassName: styles.nextjsIcon },
    ],
    externalLinks: [
      { url: "https://apps.apple.com/ca/app/posture-check/id6751126852", label: "App Store", icon: <SiApple /> },
    ],
  },
  {
    id: "ShellStash",
    title: "ShellStash",
    category: "CLI Tool",
    subtitle: "A cross-platform Rust CLI for saving, organizing, and reusing shell commands.",
    image: "/ShellStash1.png",
    techStack: [
      { icon: <SiRust />, label: "Rust", iconStyle: { color: "#CE422B" } },
    ],
    githubUrl: "https://github.com/AlexAxenti/ShellStash"
  },{
    id: "MiniCRM",
    title: "MiniCRM",
    category: "Systems Design Practice",
    subtitle: "A modular CRM built to explore and practice system design patterns, service boundaries, and scalability trade-offs.",
    image: "/MiniCRM1.png",
    techStack: [
      { icon: <SiReact />, label: "React", iconStyle: { color: "#61DAFB" } },
      { icon: <SiNestjs />, label: "NestJS", iconStyle: { color: "#E0234E" } },
      { icon: <SiNextdotjs />, label: "Next.js", iconClassName: styles.nextjsIcon },
      { icon: <SiRedis />, label: "Redis", iconStyle: { color: "#DC382D" } },
      { icon: <SiDocker />, label: "Docker", iconStyle: { color: "#2496ED" } },
    ],
    githubUrl: "https://github.com/AlexAxenti/mini-crm"
  },
];

export const metadata: Metadata = {
  title: "Alex Axenti - Full-Stack Developer",
  description: "Full-stack developer building scalable web applications with a focus on clean architecture, performance, and user experience. Based in Burlington, Canada.",
};

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* Top Section */}
        <section className={styles.topSection}>
          {/* Profile Card - Left */}
          <Card className={styles.profileCard}>
            <h1 className={styles.profileName}>Alex Axenti</h1>
            <div className={styles.profileImageWrapper}>
              <Image
                src="/Profile.jpg"
                alt="Profile photo"
                width={200}
                height={200}
                className={styles.profileImage}
                priority
              />
            </div>
            <div className={styles.profileInfo}>
              <p className={styles.profileRole}>Full-Stack Developer</p>
              <p className={styles.profileCompany}>@ Evenica</p>
            </div>
            <p className={styles.profileLocation}>📍 Burlington, Canada</p>
            
            <div className={styles.socialLinks}>
              <a href="https://github.com/alexaxenti" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/alexaxenti/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="mailto:alex.axenti@gmail.com" aria-label="Email">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
                </svg>
              </a>
            </div>
          </Card>

          {/* Intro Card - Right */}
          <Card className={styles.introCard}>
            {/* <h2 className={styles.introHeading}>Driven by curiosity and continuous learning.</h2> */}
            <h2 className={styles.introHeading}>Driven by curiosity, continuous learning, and meaningful impact.</h2>
            <p className={styles.introText}>
              I design and build scalable web applications with a focus on clean architecture, performance, and user experience, 
              taking ideas from concept to production.
            </p>
            
            <div className={styles.techStack}>
              <h3 className={styles.techStackHeading}>Tech Stack</h3>
              <div className={styles.techStackGrid}>
                <TechBadge 
                  icon={<SiTypescript />}
                  label="TypeScript"
                  iconStyle={{ color: '#3178C6' }}
                />
                <TechBadge 
                  icon={<SiSharp />}
                  label="C#"
                  iconStyle={{ color: '#239120' }}
                />
                <TechBadge 
                  icon={<SiRust />}
                  label="Rust"
                  iconStyle={{ color: '#CE422B' }}
                />
                <TechBadge 
                  icon={<SiReact />}
                  label="React"
                  iconStyle={{ color: '#61DAFB' }}
                />
                <TechBadge 
                  icon={<SiNextdotjs />}
                  label="Next.js"
                  iconClassName={styles.nextjsIcon}
                />
                <TechBadge 
                  icon={<SiDotnet />}
                  label=".NET"
                  iconStyle={{ color: '#512BD4' }}
                />
                <TechBadge 
                  icon={<SiNestjs />}
                  label="NestJS"
                  iconStyle={{ color: '#F1455F' }}
                />
              </div>
            </div>
          </Card>
        </section>

        {/* Bottom Section */}
        <section className={styles.projectsSection}>
          <h2 className={styles.sectionHeading}>Featured Projects</h2>
          <div className={styles.projectsGrid}>
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      </main>

      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "@id": "https://alexaxenti.com/#person",
            name: "Alex Axenti",
            jobTitle: "Full-Stack Developer",
            worksFor: {
              "@type": "Organization",
              name: "Evenica",
              url: "https://evenica.com"
            },
            image: "https://alexaxenti.com/Profile.jpg",
            url: "https://alexaxenti.com",
            sameAs: [
              "https://github.com/alexaxenti",
              "https://www.linkedin.com/in/alexaxenti/",
            ],
            address: {
              "@type": "PostalAddress",
              addressLocality: "Burlington",
              addressCountry: "Canada",
            },
            knowsAbout: [
              "Full-stack web development",
              "TypeScript",
              "React",
              "Next.js",
              "NestJS",
              ".NET",
              "Rust",
              "PostgreSQL",
              "Redis",
              "Docker",
              "System design",
              "Backend systems",
            ],
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "professional inquiries",
              email: "alex.axenti@gmail.com",
              availableLanguage: ["English"]
            }
          }),
        }}
      />
    </div>
  );
}
