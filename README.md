# Harsh Bhatt — Personal Portfolio

Personal portfolio website built with Next.js and TypeScript.

## Overview

A single-page personal portfolio for Harsh Bhatt showcasing selected projects, work experience, published white papers, technical skills, and a short bio. The site is built with the Next.js Pages Router and styled with Chakra UI, and it uses Framer Motion for animated transitions throughout. Content is data-driven (projects, experience, skills, and white papers live in typed data files) and the interface is internationalized with English and French locales.

## Features

- **Animated hero section** with a looping gradient background and motion-based entrance animations.
- **Selected projects** section driven by a typed project list — each entry includes a screenshot, description, technology stack (rendered with brand icons), tags, and links to the live site and GitHub repo. Includes a marquee of additional projects and per-project dynamic routes at `/projects/[slug]`.
- **Work experience** timeline plus an open-source contributions list.
- **White papers** section linking to published documents.
- **Skill set** section grouping technologies into categorized skill boxes.
- **About Me** section with bio and profile image.
- **Responsive header** with an animated mobile navigation menu, plus a footer.
- **Internationalization (i18n)** via `next-i18next` with English and French translations (`public/locales`).
- **SEO** defaults configured through `next-seo` (Open Graph, Twitter, canonical, and language alternates).
- **Custom theming** with a dedicated Chakra UI theme and custom fonts.
- **Security headers** configured via `next-safe` in the Next.js config.
- A contact form component (built with React Hook Form + Zod) is included in the codebase but currently disabled on the home page.

## Tech Stack

- **Framework:** Next.js 14 (Pages Router), React 18
- **Language:** TypeScript
- **UI & styling:** Chakra UI, Emotion, custom Chakra theme
- **Animation:** Framer Motion
- **Internationalization:** next-i18next, i18next, react-i18next
- **SEO:** next-seo
- **Forms & validation:** React Hook Form, Zod, @hookform/resolvers
- **Icons:** react-icons
- **Analytics:** @vercel/analytics, posthog-js
- **Environment validation:** envsafe
- **Images:** sharp
- **Tooling:** ESLint, Prettier, Husky, lint-staged, Commitlint (Conventional Commits), Next.js Bundle Analyzer

## Getting Started

### Prerequisites

- Node.js 18+
- Yarn (a `pnpm-lock.yaml` is also committed, so pnpm works as well)

### Installation

```bash
git clone https://github.com/Harsh-BH/portfolio.git
cd portfolio
yarn install
```

### Running

```bash
# Start the development server (http://localhost:3000)
yarn dev

# Create a production build
yarn build

# Run the production build
yarn start
```

### Other scripts

```bash
yarn lint          # Run ESLint
yarn lint:fix      # Run ESLint with autofix
yarn type-check    # Type-check with tsc (no emit)
yarn analyze       # Build with the bundle analyzer enabled
```

## Project Structure

```
public/                 Static assets (images, icons, fonts, locales, manifest)
  locales/              en/ and fr/ translation files
  img/projects/         Project screenshots
src/
  pages/                Next.js pages (index, projects/[slug], _app, _document, 404)
  components/
    layouts/            Page layout wrapper
    structure/          Page sections (Hero, SelectedProjects, WorkExperience,
                        WhitePaper, SkillSet, aboutme, ContactMe, Header, Footer, ...)
    meta/               Shared meta components (fonts, motion helpers, icons)
    icons/              Custom icon components
  data/                 Typed content: projects, experience, skills, whitepaper,
                        aboutme, contributions
  config/               App config and environment schemas
  theme/                Chakra UI theme and component style overrides
  utils/                Hooks and shared types
next.config.js          Next.js config (security headers, i18n, redirects, rewrites)
next-i18next.config.js  Locale configuration
```

## Acknowledgements

This portfolio is based on the open-source [chr-ge.com](https://github.com/chr-ge/chr-ge.com) template by George Christeas, and is distributed under the GPL-2.0-or-later license (see `LICENSE`).
