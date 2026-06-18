import { 
  SiTypescript, 
  SiRust, 
  SiReact, 
  SiNextdotjs, 
  SiNestjs, 
  SiPostgresql, 
  SiDocker, 
  SiGooglechrome, 
  SiApple, 
  SiRedis, 
  SiSupabase, 
  SiStripe, 
  SiExpo, 
  SiExpress, 
  SiSqlite, 
  SiGithub, 
  SiDotnet, 
  SiGooglecloud, 
  SiSharp, 
  SiAngular,
  SiRabbitmq,
  SiSpring,
  SiApachekafka} from "react-icons/si";
import { HiExternalLink } from "react-icons/hi";
import { FaMicrosoft, FaDatabase, FaJava } from "react-icons/fa";

// export type ProjectStatus = "completed" | "in-progress"

export enum ProjectStatus {
  Completed,
  InProgress
}

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
    projectStatus: ProjectStatus.Completed,
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
      { url: "https://touch-base.ca/", label: "Web App (Inactive)", icon: <HiExternalLink /> },
      { url: "https://chromewebstore.google.com/detail/touchbase/dgmjggdiacoemgnjjlkijjcmdljnmhok", label: "Chrome Store", icon: <SiGooglechrome /> },
    ],
    githubUrl: "https://github.com/orgs/theefellowship/repositories",
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
              "AI chat that uses your stored context to suggest conversation starters, advice on next steps, and generate structured message templates.",
              "AI output parsing system that surfaces generated templates as quick-save actions for faster workflows.",
              "Stripe subscriptions for paid features + usage limits",
              "Automated reminder scheduling via cron jobs to improve reliability and reduce redundant email platform calls.",
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
    id: "PortfolioTracker",
    title: "Portfolio Tracker",
    category: "Full Stack Web App",
    subtitle: "A portfolio management application for tracking trades, holdings, and investment performance.",
    projectStatus: ProjectStatus.Completed,
    media: [
      {
        type: "image",
        src: "/PortfolioTracker1.png",
        alt: "Portfolio Tracker Holdings View",
        caption: "Portfolio Holdings Dashboard",
      }
    ],
    content: [
      {
        type: "section",
        title: "Overview",
        blocks: [
          {
            type: "paragraph",
            content: "Portfolio Tracker is a personal project built primarily for learning modern Angular and ASP.NET Core development. The application allows users to track trades, manage holdings, and monitor portfolio performance while exploring common backend architecture patterns used in production systems."
          },
          {
            type: "paragraph",
            content: "The goal was to gain hands-on experience with Angular, Entity Framework Core, PostgreSQL, API design, deployment, and event-driven processing."
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
              "Create, edit, and delete stock trades.",
              "Automatically maintain portfolio holdings based on trade activity.",
              "Portfolio dashboard showing allocations, market value, and unrealized profit/loss.",
              "Historical trade and position tracking by ticker.",
              "Live market price refreshes using the Finnhub API.",
              "User authentication and secure portfolio isolation."
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
            content: "The backend follows a layered architecture using Controllers, Services, Repositories, DTOs, and Entity Framework Core. Business logic such as portfolio calculations and holdings management is isolated within the service layer while repositories handle database access."
          },
          {
            type: "paragraph",
            content: "To improve resilience around external API limits, price refresh requests are routed through a RabbitMQ queue and processed asynchronously by background consumers. Combined with caching and rate limiting, this allows refresh requests to be handled safely and without excess request dropping while still avoiding overwhelming third-party providers."
          },
          {
            type: "paragraph",
            content: "The frontend is built with Angular using standalone components, reactive forms, Angular Material, and RxJS. The project also includes Docker-based deployment, automated CI/CD pipelines, PostgreSQL hosting through Supabase, and VPS deployment for the API."
          }
        ]
      }
    ],
    techStack: [
      { icon: <SiAngular />, label: "Angular", iconStyle: { color: "#DD0031" } },
      { icon: <SiDotnet />, label: ".NET", iconStyle: { color: "#512BD4" } },
      { icon: <SiPostgresql />, label: "PostgreSQL", iconStyle: { color: "#336791" } },
      { icon: <SiRabbitmq />, label: "RabbitMQ", iconStyle: { color: "#FF6600" } },
      { icon: <SiDocker />, label: "Docker", iconStyle: { color: "#2496ED" } },
    ],
    externalLinks: [
      {
        url: "https://portfolio-tracker-ui-k3rz.onrender.com/",
        label: "Live Demo",
        icon: <HiExternalLink />
      },
      {
        url: "https://github.com/AlexAxenti/Portfolio-Tracker-API",
        label: "API Repository",
        icon: <SiGithub />
      },
      {
        url: "https://github.com/AlexAxenti/Portfolio-Tracker-UI",
        label: "UI Repository",
        icon: <SiGithub />
      }
    ],
    dateRange: "2026",
    displayHomepage: true,
  },
  {
    id: "ScreenTimeTracker",
    title: "Screen Time Tracker",
    category: "Windows App",
    subtitle: "A windows app and background agent that tracks screen time and application usage and provides detailed statistics.",
    projectStatus: ProjectStatus.Completed,
    media: [
      {
        type: "image",
        src: "/ScreenTime1.png",
        alt: "Screen Time Dashboard Screenshot",
        caption: "Screen Time Dashboard",
      },
      {
        type: "image",
        src: "/ScreenTime2.png",
        alt: "Screen Time Applications list Screenshot",
        caption: "Screen Time Applications List",
      },
      {
        type: "image",
        src: "/ScreenTime3.png",
        alt: "Screen Time App Usage Stats Screenshot",
        caption: "Screen Time App Usage Stats",
      },
      {
        type: "image",
        src: "/ScreenTime4.png",
        alt: "Screen Time Task Bar Agent Screenshot",
        caption: "Screen Time Task Bar Agent",
      }
    ],
    content: [
    { 
      type: "section", 
      title: "Overview", 
      blocks: [
        { 
          type: "paragraph", 
          content: "This is a Windows-only screen time + usage analytics app inspired by the iOS screen usage app. I built it mainly as a learning project to get stronger at systems-level Rust (background agents, OS APIs, concurrency, data modeling), but also with a strong focus on clean architecture, clear module boundaries, and keeping the codebase organized as it grows. My intent is to publish this for free."
        }, 
        { 
          type: "paragraph", 
          content: "Everything is local-only: no accounts, and nothing saved on the cloud. The app runs as a long-running background agent and stores data in a local SQLite database, and the desktop dashboard communicates with the Rust backend through explicit Tauri commands and DTOs rather than accessing the database directly." 
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
            "Tracks active foreground applications.",
            "Detects idle/AFK time so usage doesn’t keep counting when you’re away.",
            "Dashboard views for Daily / Weekly summaries, top apps, timelines and other interesting statistics.",
            "Settings to tailor performance + privacy (hide vs destroy on close, start on windows start up, disable tracking specific apps, pause / resume tracking).",
            "Local-first by design: all data stays on-device in SQLite.",
            "Aggregates raw samples into time segments for cleaner analytics and better DB performance.",
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
          content: "The app is built as a Rust background agent + a desktop UI (Tauri + React/TypeScript) that reads analytics from a shared SQLite database. I tried to keep the codebase organized with clear module boundaries (sampler collector and platform/Win32 layer, database layer, Tauri layer, UI bridge over IPC) with an emphasis on clean seperation of concerns and clear communication patterns between components." 
        },
        { 
          type: "paragraph", 
          content: "For performance and communication, the collector uses multiple threads (sampling vs writing) with channel-based communication, and the data is stored as merged “segments” to reduce database writes until focus changes. The UI talks to Rust through clear DTOs/commands over IPC (instead of sharing internals directly)" 
        },
        { 
          type: "paragraph", 
          content: "On the Windows side, it uses Win32 APIs to detect the active foreground window, handle idle detection, gather metadata like titles and icons, etc. I also added schema migrations early so updates don’t rely on manual DB changes once it’s installed on someone else’s machine." 
        }
      ]
    }
  ],
    techStack: [
      { icon: <SiRust />, label: "Rust", iconStyle: { color: "#CE422B" } },
      { icon: <SiReact />, label: "React", iconStyle: { color: "#61DAFB" } },
      { icon: <SiSqlite />, label: "SQLite", iconStyle: { color: "#003B57" } },
    ],
    externalLinks: [
      { url: "https://github.com/AlexAxenti/screen_time/releases", label: "Releases Installation", icon: <SiGithub /> },
    ],
    githubUrl: "https://github.com/AlexAxenti/screen_time",
    dateRange: "2026",
    displayHomepage: true,
  },
  {
    id: "BiteStash",
    title: "BiteStash",
    category: "Mobile App and ASP.NET Core API",
    subtitle: "A mobile app that helps you remember your favourite restaurants.",
    projectStatus: ProjectStatus.Completed,
    media: [
      {
        type: "image",
        src: "/bite_stash_icon.png",
        alt: "BiteStash Icon Screenshot",
        caption: "BiteStash Icon",
      }
    ],
    content: [
    { 
      type: "section", 
      title: "Overview", 
      blocks: [
        { 
          type: "paragraph", 
          content: "BiteStash is a full-stack mobile application built as a learning-focused project to deepen my understanding of modern backend development with ASP.NET Core. The app allows users to save and track restaurants they’ve visited or want to try, along with personal notes, ratings, and visit history."
        }, 
        { 
          type: "paragraph", 
          content: "While the core functionality is intentionally simple, the focus of the project was on building a production-style backend with proper architecture, external API integration, and cloud deployment." 
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
            "Search and select real-world restaurants using the Google Places Api.",
            "Save restaurants as 'Visited' or 'Want to Try'",
            "Add personal notes, ratings, and optional visit dates",
            "Open restaurants directly in Google Maps for full details",
            "Secure authentication with persistent login sessions",
          ]
        }
      ]
    },
    {
      type: "section",
      title: "API Key Features",
      blocks: [
        { 
          type: "bullets", 
          items: [
            "ASP.NET Core Web API with clean layered architecture (Controllers → Services → Data)",
            "JWT Authentication + Refresh Tokens using ASP.NET Identity for secure, persistent mobile sessions",
            "Hashed refresh token storage with support for multiple concurrent device sessions",
            "Cloud deployment on Azure Container Apps from container images published to GitHub Container Registry",
            "Azure SQL Database + Entity Framework Core for relational data access and migrations",
            "Secure secret management with Azure Key Vault",
            "Dockerized backend for consistent builds and deployment portability",
            "Google Places API Integration for accurate restaurant search and selection (place ID-based)",
            "Backend-only external API calls to protect API keys and centralize integrations",
            "DTO-based API design to enforce clear contracts between frontend and backen"
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
          content: "The backend is built with ASP.NET Core Web API using a clean layered architecture that separates controllers, business logic, and data access. Entity Framework Core is used for database interactions with Azure SQL, including migrations and schema management. The API uses DTOs for all request and response models to maintain clear boundaries between layers and avoid exposing internal database structures."
        },
        { 
          type: "paragraph", 
          content: "Authentication is implemented using ASP.NET Identity with JWT access tokens and refresh tokens to support persistent mobile sessions. Refresh tokens are securely stored in hashed form and allow multiple concurrent sessions across devices."
        }
      ]
    },
    {
      type: "section",
      title: "Cloud and Deployment",
      blocks: [
        { 
          type: "paragraph", 
          content: "One of the primary goals of this project was to gain hands-on experience with the Azure ecosystem and understand how backend applications are deployed in a more enterprise-oriented cloud environment."
        },
        { 
          type: "paragraph", 
          content: "This led to a deployment pipeline where the backend is containerized using Docker, published as an image to GitHub Container Registry (GHCR), and deployed to Azure Container Apps. The application uses Azure SQL Database for persistent storage, while Azure Key Vault is used to securely manage sensitive configuration such as connection strings and API keys, ensuring a clear separation between code and infrastructure."
        }
      ]
    }
  ],
    techStack: [
      { icon: <SiDotnet />, label: "ASP.NET", iconStyle: { color: "#512BD4" } },
      { icon: <FaMicrosoft />, label: "Azure", iconStyle: { color: "#0078D4" } },
      { icon: <SiGooglecloud />, label: "GCP Apis", iconStyle: { color: "#4285F4" } },
      { icon: <SiReact />, label: "React Native", iconStyle: { color: "#61DAFB" } },
      { icon: <SiSharp />, label: "C#", iconStyle: { color: "#68217A" } },
      { icon: <FaDatabase />, label: "Azure SQL", iconStyle: { color: "#0078D4" } },
    ],
    externalLinks: [
      { url: "https://github.com/AlexAxenti/BiteStashApi", label: "API Repo", icon: <SiGithub /> },
      { url: "https://github.com/AlexAxenti/BiteStashMobile", label: "Mobile Repo", icon: <SiGithub /> },
      { url: "https://apps.apple.com/us/app/bitestash/id6761634953", label: "App Store", icon: <SiApple /> },
    ],
    dateRange: "2026",
    displayHomepage: true,
  },
  {
    id: "PostureCheck",
    title: "Posture Check",
    category: "Mobile App",
    subtitle: "A cross-platform mobile app that helps users improve posture through gentle reminders and habit tracking.",
    projectStatus: ProjectStatus.Completed,
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
    projectStatus: ProjectStatus.Completed,
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
    projectStatus: ProjectStatus.Completed,
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
      { icon: <FaJava />, label: "Java", iconStyle: { color: "#ED8B00" } },
      { icon: <SiSpring />, label: "Spring Boot", iconStyle: { color: "#6DB33F" } },
      { icon: <SiApachekafka />, label: "Kafka", iconClassName: "nextjsIcon" },
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
    category: "Web App",
    subtitle: "A React Web app that provides real-time League of Legends stats, match history, and champion analytics using the Riot Games API.",
    projectStatus: ProjectStatus.InProgress,
    media: [],
    techStack: [
      { icon: <SiReact />, label: "React", iconStyle: { color: "#61DAFB" } },
      { icon: <SiExpress />, label: "Express", iconClassName: "nextjsIcon" },
    ],
    githubUrl: "https://github.com/AlexAxenti/League-API-App",
    dateRange: "2022",
    displayHomepage: false,
  },
];