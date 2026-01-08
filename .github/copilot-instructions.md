# Portfolio Project - AI Agent Instructions

## Project Overview

This is a **Next.js 16.1.1** portfolio application using the **App Router** architecture with TypeScript, React 19, and CSS Modules. The project follows Next.js 15+ conventions with `react-jsx` JSX transform (not `preserve`).

## Architecture & Structure

- **App Router**: All routes live in `src/app/` (not Pages Router)
- **Path aliases**: Use `@/*` for imports from `src/` directory (e.g., `import Component from '@/components/MyComponent'`)
- **Styling**: CSS Modules (`.module.css`) for component-specific styles, global styles in `src/app/globals.css`
- **Fonts**: Geist Sans and Geist Mono loaded via `next/font/google` in [src/app/layout.tsx](src/app/layout.tsx) with CSS variables (`--font-geist-sans`, `--font-geist-mono`)

## Key Conventions

### Component Patterns
- Server components by default (no `'use client'` unless needed)
- Use `next/image` for images with explicit width/height
- CSS Module pattern: Import as `styles` object, apply via `className={styles.myClass}`

### Styling Approach
- **Dark mode**: Uses CSS `prefers-color-scheme` media queries with CSS variables
- **Color system**: CSS custom properties in [src/app/page.module.css](src/app/page.module.css) define theme colors (e.g., `--text-primary`, `--background`)
- **Responsive**: Mobile-first with breakpoints at `600px` and pointer-based hover states (`@media (hover: hover) and (pointer: fine)`)
- **Typography**: Primary font via `font-family: var(--font-geist-sans)` from layout

### TypeScript
- **Strict mode enabled** (`strict: true`)
- Use `import type` for type-only imports (e.g., `import type { Metadata } from "next"`)
- React 19 uses `react-jsx` transform (no need for React imports)

### ESLint Configuration
- Uses flat config format (`eslint.config.mjs`)
- Next.js Core Web Vitals + TypeScript rules enabled
- Ignores: `.next/`, `out/`, `build/`, `next-env.d.ts`

## Project-Specific Notes

- **Metadata**: Define in layouts/pages via `export const metadata: Metadata` (not in `_document`)
- **Static assets**: Place in `public/` directory (e.g., `/next.svg` → `public/next.svg`)
- **No API routes yet**: Create in `src/app/api/` following App Router conventions when needed
- This is a fresh project - avoid referencing legacy Pages Router patterns

Next.js Static Portfolio — SEO Must-Dos

Rendering

Use static generation (SSG) only

No runtime data fetching for core content

Avoid "use client" at page level (pages should be server components)

Routing

Clean, crawlable routes (/about, /projects/[slug])

One page per major project (indexable content)

Metadata

Global metadata in app/layout.tsx (title template, description, OG, Twitter)

Unique title + description per page

Set metadataBase to production domain

Content Structure

Exactly one <h1> per page

Logical heading hierarchy (h2, h3)

Real text content (not client-only rendered)

Structured Data

Add JSON-LD Person schema

Include sameAs links (GitHub, LinkedIn)

Optional: SoftwareApplication for projects

Indexing

Include sitemap.xml

Include robots.txt

Ensure all static routes are discoverable

Assets

alt text on meaningful images

Use optimized images (Next <Image>)

Performance

Keep JS minimal

Avoid large client bundles

Pass Core Web Vitals (LCP, CLS, INP)

External Signals

Link portfolio from GitHub + LinkedIn

Use consistent full name across platforms.

Make sure the pages are styled for both web and mobile viewing experiences.