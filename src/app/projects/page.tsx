import type { Metadata } from "next";
import ProjectsClient from "./projects-client";

export const metadata: Metadata = {
  title: "Projects | Alex Axenti",
  description:
    "A selection of projects by Alex Axenti, including web apps, mobile apps, SaaS tools, and system design experiments.",
  alternates: {
    canonical: "https://alexaxenti.com/projects",
  },
  openGraph: {
    title: "Projects | Alex Axenti",
    description:
      "Explore Alex Axenti’s projects across web, mobile, desktop, and systems design.",
    url: "https://alexaxenti.com/projects",
    siteName: "Alex Axenti",
    type: "website",
  },
};

export default function ProjectsPage() {
  
  return <ProjectsClient />
}
