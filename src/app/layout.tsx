import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alexaxenti.com"),
  title: {
    default: "Alex Axenti - Full-Stack Developer",
    template: "%s | Alex Axenti",
  },
  description:
  "Full-stack developer building scalable web applications with a focus on clean architecture, performance, and production-ready systems.",
  keywords: ["Alex Axenti", "Full-Stack Developer", "Web Developer", "TypeScript", "React", "Next.js"],
  authors: [{ name: "Alex Axenti", url: "https://alexaxenti.com" }],
  creator: "Alex Axenti",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alexaxenti.com",
    siteName: "Alex Axenti",
    title: "Alex Axenti - Full-Stack Developer",
    description: "Full-stack developer specializing in TypeScript, React, Next.js, and Node.js.",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
