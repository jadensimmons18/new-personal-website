export const TAGLINES = [
  { variant: 'headline' }, // 0 — split-apart exit
  { text: 'Because I’m always…', emphasis: true }, // 1 — zooms in, then slides left
  { text: 'One keystroke ahead.', emphasis: true }, // 2 — slides in from the right
]

/**
 * Hero scroll choreography (normalized 0→1 over the pinned section).
 *
 * Why named phases: discrete index swaps feel laggy; continuous transforms
 * keyed to these ranges keep motion 1:1 with scroll (Lenis + Framer).
 */
export const SCROLL = {
  // Headline: brief hold, then line 1 rises / line 2 falls out of view
  headlineHoldEnd: 0.08,
  headlineExitEnd: 0.26,

  // Tagline 1: zooms into the vacated center, holds, then slides left off-screen
  tagline1EnterStart: 0.12,
  tagline1EnterEnd: 0.26,
  tagline1HoldEnd: 0.4,
  tagline1ExitEnd: 0.54,

  // Tagline 2 (punchline): slides in from the right as tagline 1 exits left
  tagline2EnterStart: 0.4,
  tagline2EnterEnd: 0.54,
  tagline2HoldEnd: 0.65,

  // Shared / stage effects (kept for darken + card shrink)
  taglineStart: 0.05,
  taglineEnd: 0.65,
  scaleStart: 0.75,
  scaleEnd: 0.95,
  scaleFrom: 1,
  scaleTo: 0.85,
  radiusTo: 24,
  scrollCueFadeEnd: 0.3,
  sectionHeight: '320vh',

  // Split / zoom / slide tuning
  splitDistance: '58vh',
  zoomFrom: 0.62,
  slideDistance: '110vw',
}
