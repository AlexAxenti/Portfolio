import Image from "next/image";
import type { Metadata } from "next";
import { 
  SiTypescript, 
  SiJavascript, 
  SiReact, 
  SiNextdotjs, 
  SiNestjs,
  SiSharp,
  SiDotnet,
  SiRust,
  SiPostgresql,
  SiRedis,
  SiMongodb,
  SiDocker,
  SiGit,
  SiGithubactions,
  SiAmazon,
  SiTauri,
  SiAngular,
  SiNodedotjs,
  SiJenkins,
  SiKubernetes,
  SiGoogle,
  SiPython
} from "react-icons/si";
import Card from "@/app/_components/Card/Card";
import TechBadge from "@/app/_components/TechBadge/TechBadge";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Alex Axenti — full-stack developer based in Burlington, Canada. Background, current focus areas, and the tools I use most often.",
  alternates: {
    canonical: "https://alexaxenti.com/about",
  },
  openGraph: {
    title: "About | Alex Axenti",
    description:
      "About Alex Axenti — full-stack developer based in Burlington, Canada. Background, current focus areas, and the tools I use most often.",
    url: "https://alexaxenti.com/about",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* Hero Profile Section */}
        <section className={styles.heroSection}>
          <Card className={styles.heroCard}>
            <h1 className={styles.heroName}>Alex Axenti</h1>
            <div className={styles.heroImageWrapper}>
              <Image
                src="/Profile.jpg"
                alt="Alex Axenti profile photo"
                width={240}
                height={240}
                className={styles.heroImage}
                priority
              />
            </div>
            
            <div className={styles.heroInfo}>
              <div className={styles.infoBlock}>
                <p className={styles.infoLabel}>Current Role</p>
                <p className={styles.infoValue}>Full-Stack Developer</p>
                <p className={styles.infoSubtext}>@ Evenica • December 2024 - Present</p>
              </div>
              
              <div className={styles.infoBlock}>
                <p className={styles.infoLabel}>Education</p>
                <p className={styles.infoValue}>Computer Science</p>
                <p className={styles.infoValue}>Bachelor of Applied Science</p>
                <p className={styles.infoSubtext}>McMaster University • 2019 - 2024</p>
              </div>
            </div>

            <div className={styles.socialLinks}>
              <a href="https://github.com/alexaxenti" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/alexaxenti/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="mailto:alex.axenti@gmail.com" aria-label="Email">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
                </svg>
              </a>
            </div>
          </Card>
          <Card className={styles.contentCard}>
            <h2 className={styles.cardHeading}>About Me</h2>
            <p className={styles.cardText}>
              I’m a full-stack developer based in Burlington, Canada, focused on building practical, 
              well-designed software. My work spans web, mobile, and desktop applications, and I enjoy 
              working across the stack to turn ideas into reliable, maintainable products.
            </p>
            <p className={styles.cardText}>
              Beyond writing code, I care deeply about understanding the problem being solved and the people it affects. 
              I spend time understanding requirements and context, then thinking through trade-offs and constraints. 
              Whether that means improving user experience, optimizing performance, or designing systems that can grow over time, 
              I take care to choose the right tools for the right problem.
            </p>
            <p className={styles.cardText}>
              I’m driven by continuous learning and self-improvement. Software is an endlessly deep field, and the more I learn, 
              the more I realize how much there is still to understand. To continue improving my craft, I enjoy building projects 
              and reading books to refine and challenge how I think about software design and architecture.
            </p>
            <br></br>
            <h2 className={styles.cardHeading} style={{ marginBottom: "0px"}}>Main Stack</h2>
            <p className={styles.cardText}>
                The tools I use most often at work and on side projects
            </p>

            <div className={styles.techCategory}>
              <h3 className={styles.techCategoryHeading}>Languages</h3>
              <div className={styles.techGrid}>
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
                  icon={<SiPython />}
                  label="Python"
                  iconStyle={{ color: '#3776AB' }}
                />
              </div>
            </div>

            <div className={styles.techCategory}>
              <h3 className={styles.techCategoryHeading}>Stack</h3>
              <div className={styles.techGrid}>
                <TechBadge 
                  icon={<SiReact />}
                  label="React"
                  iconStyle={{ color: '#61DAFB' }}
                />
                <TechBadge 
                  icon={<SiNextdotjs />}
                  label="Next.js"
                  iconClassName="nextjsIcon"
                />
                <TechBadge 
                  icon={<SiNestjs />}
                  label="NestJS"
                  iconStyle={{ color: '#E0234E' }}
                />
                <TechBadge 
                  icon={<SiDotnet />}
                  label=".NET"
                  iconStyle={{ color: '#512BD4' }}
                />
                <TechBadge 
                  icon={<SiNodedotjs />}
                  label="Node.js"
                  iconStyle={{ color: '#339933' }}
                />
                <TechBadge 
                  icon={<SiPostgresql />}
                  label="PostgreSQL"
                  iconStyle={{ color: '#4169E1' }}
                />
                <TechBadge 
                  icon={<SiDocker />}
                  label="Docker"
                  iconStyle={{ color: '#2496ED' }}
                />
              </div>
            </div>
          </Card>
        </section>

        {/* Two Column Content Grid */}
        <section className={styles.contentGrid}>
          {/* Current Focuses */}
          <Card className={styles.contentCard}>
            <h2 className={styles.cardHeading}>Current Focuses</h2>
            <h3 className={styles.cardHeading} style={{ fontSize: '18px' }}>Systems Design and Architecture</h3>

            <p className={styles.cardText}>
              I’m focused on improving how I plan and build systems from the ground up, taking ownership of projects, 
              making intentional design decisions, and delivering solutions that meet real user needs while remaining 
              scalable and resilient.
            </p>
            <h3 className={styles.cardHeading} style={{ fontSize: '18px' }}>Rust</h3>
            <p className={styles.cardText}>
              I’m exploring Rust to deepen my understanding of how software works under the hood and to write more 
              intentional, performance-conscious code, particularly for backend and systems-level development.
            </p>
          </Card>

          {/* My Journey */}
          <Card className={styles.contentCard}>
            <h2 className={styles.cardHeading}>My Journey</h2>
            <p className={styles.cardText}>
              My interest in programming started back in elementry school when I learned about coding games
              on Roblox using Lua. From there, I took computer science and computer engineering courses in
              high school, which solidified my passion for software development. 
            </p>
            <p className={styles.cardText}>
              At McMaster University (2019-2024), I studied everything from algorithms and data structures 
              to operating systems and networking. Next, I got to apply my learnings at my various
              internships as well as buildings apps and experimenting with new frameworks outside of class. 
              These experiences, and the people I've worked with, shaped how I think about software design and engineering today.
            </p>
          </Card>

          {/* Hobbies */}
          <Card className={styles.contentCard}>
            <h2 className={styles.cardHeading}>Beyond Work</h2>
            <p className={styles.cardText}>
              Outside of work and side projects, I enjoy social activities with friends and family, as well as staying active. 
            </p>
            <h5 className={styles.cardHeading} style={{ fontSize: '18px' }}>Some of my hobbies:</h5>
            <ul className={styles.bookList}>
              <li>Weightlifting & fitness</li>
              <li>Hiking</li>
              <li>Soccer</li>
              <li>Volleyball</li>
              <li>Video Games</li>
              <li>Reading fantasy books</li>
              <li>Traveling</li>
            </ul>
          </Card>

          {/* Books */}
          <Card className={styles.contentCard}>
            <h2 className={styles.cardHeading}>Books</h2>
            <p className={styles.cardText}>
              I love reading books as a way to learn Computer Science topics. I find that they often provide more
              depth and insights compared to other resources. Therefore, here's a list of books I've read and am reading!
            </p>

            <h5 className={styles.cardHeading} style={{ fontSize: '18px' }}>Finished reading:</h5>
            <ul className={styles.bookList}>
              <li><strong>The Pragmatic Programmer</strong> by Andrew Hunt & David Thomas</li>
              <li><strong>The Rust Programming Language</strong> by Steve Klabnik, Carol Nichols, and Chris Krycho</li>
              <li><strong>The Road to React</strong>  by Robin Wieruch</li>
            </ul>
            <h5 className={styles.cardHeading} style={{ fontSize: '18px', marginTop: '18px' }}>Next on my list:</h5>
            <ul className={styles.bookList}>
              <li><strong>A Philosophy of Software Design</strong> by John Ousterhout</li>
              <li><strong>Designing Data-Intensive Applications</strong> by Martin Kleppmann</li>
              <li><strong>Foundations of Software Architecture</strong> by Mark Richards and Neal Ford</li>
            </ul>
          </Card>
        </section>
      </main>
    </div>
  );
}
