import { SiTypescript, SiRust, SiReact, SiNextdotjs, SiNestjs, SiPostgresql, SiDocker, SiGooglechrome, SiApple, SiRedis, SiSupabase, SiStripe, SiExpo } from "react-icons/si";
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
          { type: "paragraph", content: "TouchBase began as a solution to a common problem: staying meaningfully connected with professional contacts without letting relationships slip through the cracks. Built with modern web technologies, it combines a full-featured web application with a seamless Chrome extension to capture contacts on the fly." },
          { type: "paragraph", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris." }
        ]
      },
      {
        type: "section",
        title: "Key Features",
        blocks: [
          { 
            type: "bullets", 
            items: [
              "Intelligent contact management with AI-powered insights",
              "Chrome extension for quick contact capture from LinkedIn and other platforms",
              "Automated follow-up reminders and relationship tracking",
              "Subscription management with Stripe integration",
              "Real-time sync across web and extension"
            ]
          }
        ]
      },
      {
        type: "section",
        title: "Technical Highlights",
        blocks: [
          { type: "paragraph", content: "The application architecture leverages NestJS on the backend for scalable API development, with PostgreSQL handling persistent data storage and Supabase providing authentication and real-time capabilities. The frontend React application communicates seamlessly with the Chrome extension through message passing." },
          { type: "paragraph", content: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula." }
        ]
      }
    ],
    dateRange: "2024 - 2025",
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
          { type: "paragraph", content: "Posture Check was developed to address the growing issue of poor posture caused by prolonged device usage. The app provides gentle, customizable reminders to help users develop healthier habits throughout their day." },
          { type: "paragraph", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor." }
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
        title: "Development Approach",
        blocks: [
          { type: "paragraph", content: "Built with React Native and Expo, the app prioritizes simplicity and user experience. The notification system uses native APIs to ensure reliable reminders without draining battery life. TypeScript provides type safety throughout the codebase." },
          { type: "paragraph", content: "Nullam quis risus eget urna mollis ornare vel eu leo. Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor." }
        ]
      }
    ],
    dateRange: "2024",
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
          { type: "paragraph", content: "ShellStash is a command-line tool designed for developers who frequently reuse complex shell commands. Instead of searching through bash history or maintaining text files, ShellStash provides a clean interface for storing, tagging, and retrieving commands." },
          { type: "paragraph", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec sed odio dui." }
        ]
      },
      {
        type: "section",
        title: "Features",
        blocks: [
          {
            type: "bullets",
            items: [
              "Save frequently-used commands with descriptions and tags",
              "Cross-platform compatibility (Linux, macOS, Windows)",
              "Fast search and filtering capabilities",
              "JSON-based storage for easy backup and version control",
              "Zero dependencies at runtime"
            ]
          }
        ]
      },
      {
        type: "section",
        title: "Why Rust?",
        blocks: [
          { type: "paragraph", content: "Rust was chosen for its performance, memory safety, and excellent tooling for CLI applications. The resulting binary is fast, lightweight, and has no runtime dependencies, making it easy to distribute and use across different environments." },
          { type: "paragraph", content: "Sed posuere consectetur est at lobortis. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus." }
        ]
      }
    ],
    dateRange: "2024",
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
          { type: "paragraph", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas faucibus mollis interdum. Cras mattis consectetur purus sit amet fermentum." }
        ]
      },
      {
        type: "section",
        title: "Architecture Highlights",
        blocks: [
          {
            type: "bullets",
            items: [
              "Microservices architecture with separate contact, task, and analytics services",
              "Redis caching layer for frequently accessed data",
              "PostgreSQL for reliable data persistence",
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
          { type: "paragraph", content: "Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor fringilla. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum." }
        ]
      }
    ],
    dateRange: "2024",
  },
];