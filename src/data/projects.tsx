import { SiTypescript, SiRust, SiReact, SiNextdotjs, SiNestjs, SiPostgresql, SiDocker, SiGooglechrome, SiApple, SiRedis, SiSupabase, SiStripe, SiExpo, SiExpress } from "react-icons/si";
import { HiExternalLink } from "react-icons/hi";

export type ProjectStatus = "completed" | "in-progress"

export interface Project {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  projectStatus: ProjectStatus;
  media: ProjectMediaItem[];
  // image: string;
  // imageClassName?: string;
  // imageStyle?: React.CSSProperties;
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
  content?: ProjectContentBlock[];
  dateRange?: string;
  displayHomepage?: boolean;
}

export interface ProjectMediaItem  {
  type: "image";
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  caption?: string;
}

export type ProjectContentBlock = 
  | { type: "paragraph"; content: string }
  | { type: "bullets"; items: string[] }
  | { type: "section"; title: string; blocks: ProjectContentBlock[] }

export const projects: Project[] = [
  {
    id: "TouchBase",
    title: "TouchBase",
    category: "Web and Chrome Extension SaaS",
    subtitle: "A lightweight, AI-powered networking CRM to organize contacts, track follow-ups, and stay intentional with professional relationships.",
    projectStatus: "completed",
    media: [
      {
        type: "image",
        src: "/TouchBase1.png",
        alt: "TouchBase Dashboard Screenshot",
        caption: "TouchBase Web App Dashboard",
      },
      {
        type: "image",
        src: "/TouchBase2.png",
        alt: "TouchBase AI Chat Screenshot",
        caption: "TouchBase Context Aware AI Chat",
      }
    ],
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
    content: [
      { 
        type: "section", 
        title: "Overview", 
        blocks: [
          { 
            type: "paragraph", 
            content: "TouchBase was created by me and a group of friends. Our goal was to make networking feel less awkward and more consistent. Instead of treating connections like a spreadsheet, it’s built around lightweight notes, follow-up reminders, and quick context so you don’t forget why you connected with someone in the first place." 
          },
          { 
            type: "paragraph", 
            content: "It ships as a web app plus a Chrome extension, allowing you to seemlessly capture interactions anywhere on the web, immediately." 
          }
        ]
      },
      {
        type: "section",
        title: "Key Features",
        blocks: [
          { 
            type: "bullets", 
            items: [
              "Contacts with tags, notes, and follow-up reminders.",
              "Works in Web + Chrome extension to capture and save people while you’re browsing anywhere on the web.",
              "AI chat that uses your stored context to suggest conversation starters, advice on next steps, and create message templates",
              "Stripe subscriptions for paid features + usage limits",
              "Template systems for saving common notes and messages",
            ]
          }
        ]
      },
      {
        type: "section",
        title: "Technical Highlights",
        blocks: [
          { 
            type: "paragraph", 
            content: "The tech stack consists of a React front-end for both the web app and chrome extension, paired with a NestJS backend API. Supabase is used for its authentication and PostgreSQL database. Docker was used for local backend and database development." 
          }
        ]
      }
    ],
    dateRange: "2025 - 2026",
    displayHomepage: true,
  },
  {
    id: "PostureCheck",
    title: "Posture Check",
    category: "Mobile App",
    subtitle: "A cross-platform mobile app that helps users improve posture through gentle reminders and habit tracking.",
    projectStatus: "completed",
    media: [
      {
        type: "image",
        src: "/PostureCheck1.png",
        alt: "Posture Check App Icon",
        style: { objectFit: "cover", height: "260px" },
        caption: "Posture Check App Icon",
      }
    ],
    techStack: [
      { icon: <SiReact />, label: "React Native", iconStyle: { color: "#61DAFB" } },
      { icon: <SiTypescript />, label: "TypeScript", iconStyle: { color: "#3178C6" } },
      { icon: <SiExpo />, label: "Expo", iconClassName: "nextjsIcon" },
    ],
    externalLinks: [
      { url: "https://apps.apple.com/ca/app/posture-check/id6751126852", label: "App Store", icon: <SiApple /> },
    ],
    content: [
      {
        type: "section",
        title: "Project Motivation",
        blocks: [
          { type: "paragraph", content: "Posture Check was developed to address the growing issue of poor posture caused by prolonged device and desk usage. The app provides gentle reminders to help users develop healthier habits throughout their day, while tracking statistics for habit formation." },
        ]
      },
      {
        type: "section",
        title: "Core Features",
        blocks: [
          {
            type: "bullets",
            items: [
              "Customizable notification intervals for posture reminders",
              "Streak tracking to build consistent habits",
              "Cross-platform support for iOS and Android",
              "Minimal, distraction-free interface",
              "Local data persistence for privacy"
            ]
          }
        ]
      },
      {
        type: "section",
        title: "Technical Highlights",
        blocks: [
          { type: "paragraph", content: "Built with React Native and Expo, the app prioritizes simplicity and user experience. The notification system uses native APIs to ensure reliable reminders without draining battery life or adding complexity." },
        ]
      }
    ],
    dateRange: "2025",
    displayHomepage: true,
  },
  {
    id: "ShellStash",
    title: "ShellStash",
    category: "CLI Tool",
    subtitle: "A cross-platform Rust CLI for saving, organizing, and reusing shell commands.",
    projectStatus: "completed",
    media: [
      {
        type: "image",
        src: "/ShellStash1.png",
        alt: "ShellStash Help Command Output",
        caption: "ShellStash CLI Help Command Output",
      }
    ],
    techStack: [
      { icon: <SiRust />, label: "Rust", iconStyle: { color: "#CE422B" } },
    ],
    githubUrl: "https://github.com/AlexAxenti/ShellStash",
    content: [
      {
        type: "section",
        title: "About the Project",
        blocks: [
          { type: "paragraph", content: "ShellStash is a command-line tool designed for developers who frequently reuse complex shell commands. Instead of searching through bash history or maintaining text files, ShellStash provides a clean interface for storing and retrieving commands." },
          { type: "paragraph", content: "I made this as my first real project using Rust. It targeted a pain point I face myself at work, and with the goal to help others and streamline distribution, I set up GitHub actions to automate builds and releases." }
        ]
      },
      {
        type: "section",
        title: "Features",
        blocks: [
          {
            type: "bullets",
            items: [
              "Save frequently-used commands",
              "Cross-platform compatibility (Linux, macOS, Windows)",
              "JSON-based storage for easy backup and version control",
            ]
          }
        ]
      },
    ],
    dateRange: "2025",
    displayHomepage: true,
  },{
    id: "MiniCRM",
    title: "MiniCRM",
    category: "Systems Design Practice",
    subtitle: "A modular CRM built to explore and practice system design patterns, service boundaries, and scalability trade-offs.",
    projectStatus: "completed",
    media: [
      {
        type: "image",
        src: "/MiniCRM1.png",
        alt: "MiniCRM Architecture Diagram",
        caption: "MiniCRM High-Level Architecture Diagram",
      }
    ],
    techStack: [
      { icon: <SiReact />, label: "React", iconStyle: { color: "#61DAFB" } },
      { icon: <SiNestjs />, label: "NestJS", iconStyle: { color: "#E0234E" } },
      { icon: <SiNextdotjs />, label: "Next.js", iconClassName: "nextjsIcon" },
      { icon: <SiRedis />, label: "Redis", iconStyle: { color: "#DC382D" } },
      { icon: <SiPostgresql />, label: "PostgreSQL", iconStyle: { color: "#4169E1" } },
      { icon: <SiDocker />, label: "Docker", iconStyle: { color: "#2496ED" } },
      { icon: <SiSupabase />, label: "Supabase", iconStyle: { color: "#3FCF8E" } },
    ],
    githubUrl: "https://github.com/AlexAxenti/mini-crm",
    content: [
      {
        type: "section",
        title: "Project Goals",
        blocks: [
          { type: "paragraph", content: "MiniCRM was created as a learning platform to explore microservices architecture, caching strategies, and scalable system design. The project implements common CRM features while emphasizing clean architecture and service separation." },
        ]
      },
      {
        type: "section",
        title: "Architecture Highlights",
        blocks: [
          {
            type: "bullets",
            items: [
              "Microservices architecture with separate contact and events services",
              "Redis caching layer for frequently accessed data",
              "Rate limiting and authentication via API Gateway",
              "Event-driven communication between services",
              "Docker containerization for consistent deployment"
            ]
          }
        ]
      },
      {
        type: "section",
        title: "Learning Outcomes",
        blocks: [
          { type: "paragraph", content: "This project provided hands-on experience with distributed systems, API design, database optimization, and deployment orchestration. The modular architecture allows for easy experimentation with different scaling strategies and design patterns." },
        ]
      }
    ],
    dateRange: "2025",
    displayHomepage: true,
  },
  {
    id: "LeagueAPIApp",
    title: "League-API-App",
    category: "Web App App",
    subtitle: "A React Web app that provides real-time League of Legends stats, match history, and champion analytics using the Riot Games API.",
    projectStatus: "in-progress",
    media: [],
    techStack: [
      { icon: <SiReact />, label: "React", iconStyle: { color: "#61DAFB" } },
      { icon: <SiExpress />, label: "Express", iconClassName: "nextjsIcon" },
    ],
    githubUrl: "https://github.com/AlexAxenti/League-API-App",
    dateRange: "2022",
    displayHomepage: false,
  }
];