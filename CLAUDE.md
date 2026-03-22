# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website built with Next.js 16 (Pages Router), Tailwind CSS, and Framer Motion. Based on the codebucks27 developer portfolio starter.

## Commands

- `npm run dev` - Start development server
- `npm run build` - Production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint (flat config in `eslint.config.mjs`)

## Architecture

**Tech stack:** Next.js 16 (Pages Router), React 19, Tailwind CSS 3.4, Framer Motion 12, ESLint 9

**Routing:** Uses `src/pages/` directory with four pages: `index.js` (home), `about.js`, `projects.js`, `articles.js`.

**Layout pattern:** `_app.js` wraps all pages with `NavBar`, `Footer`, and Framer Motion's `AnimatePresence` for page transitions. Each page uses the `Layout` component for consistent padding and the `TransitionEffect` component for animated page entry.

**Theming:** Dark/light mode via Tailwind's `darkMode: "class"` strategy, toggled by `useThemeSwitcher` hook in `src/components/hooks/`. Colors defined in `tailwind.config.js`: `dark` (#1b1b1b), `light` (#f5f5f5), `primary` (#B63E96), `primaryDark` (#58E6D9).

**Font:** Montserrat loaded via `next/font/google`, exposed as CSS variable `--font-mont` and mapped to Tailwind's `font-mont`.

**Responsive breakpoints:** Tailwind config uses `max-width` breakpoints (desktop-first): 2xl (1535px), xl (1279px), lg (1023px), md (767px), sm (639px), xs (479px). Mobile nav appears at `lg` breakpoint.

**Key components:**
- `NavBar` - Desktop nav with social links + hamburger mobile menu
- `Skills` - Radial skill display using circular background gradients
- `Experience` / `Education` - Timeline components with `LiIcon` scroll indicator
- `AnimatedText` - Framer Motion text reveal animation
- `HireMe` - Floating circular "hire me" badge with slow spin animation
- `Icons` - SVG icon components (social icons, sun/moon theme toggle)

**Path aliases:** `@/` maps to `src/` (configured in `jsconfig.json`).

**Static assets:** Images in `public/images/` (profile pics, project screenshots, SVGs). Resume at `public/dummy.pdf`.
