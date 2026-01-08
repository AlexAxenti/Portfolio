import { SiTypescript, SiRust, SiReact, SiNextdotjs, SiNestjs, SiPostgresql, SiDocker, SiGooglechrome, SiApple, SiRedis, SiSupabase, SiStripe, SiExpo } from "react-icons/si";
import { HiExternalLink } from "react-icons/hi";

export type ProjectStatus = "completed" | "in-progress"

export interface Project {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  projectStatus: ProjectStatus;
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

export const projects: Project[] = [
  {
    id: "TouchBase",
    title: "TouchBase",
    category: "Web and Chrome Extension SaaS",
    subtitle: "A lightweight, AI-powered networking CRM to organize contacts, track follow-ups, and stay intentional with professional relationships.",
    projectStatus: "completed",
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
    projectStatus: "completed",
    image: "/PostureCheck1.png",
    imageStyle: { objectFit: "cover", height: "260px" },
    techStack: [
      { icon: <SiReact />, label: "React Native", iconStyle: { color: "#61DAFB" } },
      { icon: <SiTypescript />, label: "TypeScript", iconStyle: { color: "#3178C6" } },
      { icon: <SiExpo />, label: "Expo", iconClassName: "nextjsIcon" },
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
    projectStatus: "completed",
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
    projectStatus: "completed",
    image: "/MiniCRM1.png",
    techStack: [
      { icon: <SiReact />, label: "React", iconStyle: { color: "#61DAFB" } },
      { icon: <SiNestjs />, label: "NestJS", iconStyle: { color: "#E0234E" } },
      { icon: <SiNextdotjs />, label: "Next.js", iconClassName: "nextjsIcon" },
      { icon: <SiRedis />, label: "Redis", iconStyle: { color: "#DC382D" } },
      { icon: <SiPostgresql />, label: "PostgreSQL", iconStyle: { color: "#4169E1" } },
      { icon: <SiDocker />, label: "Docker", iconStyle: { color: "#2496ED" } },
      { icon: <SiSupabase />, label: "Supabase", iconStyle: { color: "#3FCF8E" } },
    ],
    githubUrl: "https://github.com/AlexAxenti/mini-crm"
  },
];