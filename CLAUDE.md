# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Single-page personal portfolio site (React + Vite). Sections: Hero → About → Projects → Footer, composed in `src/App.jsx`.

## Commands

```bash
npm run dev      # start Vite dev server
npm run build    # production build to dist/
npm run preview  # preview the production build
npm run lint     # oxlint (see .oxlintrc.json)
```

There is no test runner configured in this project.

## Architecture

**Scroll-driven hero animation** (`src/components/hero/HeroSection.jsx`): a tall (`300vh`) container with a `position: sticky` inner stage. Framer Motion's `useScroll`/`useTransform` map scroll progress within that container to: canvas darkening, hero card scale/border-radius (Apple-style "shrink into the page" effect), a 3-step tagline crossfade, and scroll-cue fade-out. All the actual scroll-progress breakpoints (`taglineStart/End`, `scaleStart/End`, etc.) live in `src/lib/scrollConfig.js` — tune animation timing there, not with magic numbers in the component. `useReducedMotion()` short-circuits to a static, non-pinned layout for accessibility.

**Custom smooth scroll** (`src/components/SmoothScroll.jsx`): wraps the whole app in Lenis (`ReactLenis`) driven by Framer Motion's `frame`/`cancelFrame` ticker instead of Lenis's own RAF loop, so Lenis and Framer Motion scroll-linked animations stay in sync on one clock. Also disabled under `prefers-reduced-motion`, falling back to native scroll.

**Hero canvas background** (`src/hooks/useAtmosphericCanvas.js` + `src/components/hero/HeroCanvas.jsx`): an imperative canvas 2D animation (300 rotating light "rays" + radial bloom/gradient, `globalCompositeOperation: 'lighter'`) run in a `requestAnimationFrame` loop, isolated in a hook that returns a `canvasRef`. `HeroSection` pauses the loop via an `IntersectionObserver`-driven `enabled` prop when the hero scrolls out of view (perf), rather than unmounting the canvas.

**Projects section** (`src/components/projects/`): `ProjectsGrid` maps over `src/data/projectsData.js` and alternates each row's text/media order based on a `layout: 'text-left' | 'text-right'` field per project. `ProjectMedia` renders a project's `<video>` (autoplay-on-hover, from `src/assets/*.mp4`) if present, else an `image`, else a gradient/stripe placeholder built from `mediaGradient`/`stripeAngle`/`radialPosition` fields — all project copy and media config is data-driven from `projectsData.js`, not hardcoded in JSX.

**Custom cursor** (`src/components/CustomCursor.jsx`): only activates on fine-pointer devices (`matchMedia('(hover: hover) and (pointer: fine)')`); toggles `is-hover`/`is-light` classes based on `closest()` checks against interactive elements and `.light-section` ancestors, so any new section placed over a light background must carry the `.light-section` class for the cursor to invert correctly.

## Content still in progress

`src/data/aboutData.js` currently holds placeholder/TODO copy (title, paragraphs) — check with the user before treating its contents as final when working on the About section.
