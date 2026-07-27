import { motion, useTransform } from 'framer-motion'
import { SCROLL, TAGLINES } from '../../lib/scrollConfig'

function normalizeTagline(rawEntry) {
  if (typeof rawEntry === 'string') {
    return { text: rawEntry, variant: 'lead' }
  }
  return { variant: rawEntry.emphasis ? 'punch' : 'lead', ...rawEntry }
}

function TaglineCopy({ tagline }) {
  if (tagline.variant === 'punch') {
    return <p className="hero-punch">{tagline.text}</p>
  }
  return <p className="hero-lead">{tagline.text}</p>
}

/**
 * Scroll-scrubbed taglines — transforms track scrollYProgress directly so
 * motion feels like the page is moving, not a timed crossfade.
 *
 * TODO (optional polish): add a tiny spring via useSpring(scrollYProgress)
 * if Lenis alone still feels stiff on trackpads.
 */
export default function HeroContent({
  scrollYProgress,
  opacity = 1,
  animateOnMount = true,
  staticTaglineIndex = null,
}) {
  const lead = normalizeTagline(TAGLINES[1])
  const punch = normalizeTagline(TAGLINES[2])

  // —— Headline: line 1 up, line 2 down ——
  const line1Y = useTransform(
    scrollYProgress,
    [SCROLL.headlineHoldEnd, SCROLL.headlineExitEnd],
    ['0vh', `-${SCROLL.splitDistance}`],
  )
  const line2Y = useTransform(
    scrollYProgress,
    [SCROLL.headlineHoldEnd, SCROLL.headlineExitEnd],
    ['0vh', SCROLL.splitDistance],
  )
  const headlineFadeMid =
    SCROLL.headlineHoldEnd +
    (SCROLL.headlineExitEnd - SCROLL.headlineHoldEnd) * 0.72
  const headlineOpacity = useTransform(
    scrollYProgress,
    // Explicit endpoints keep opacity stable outside the exit window
    [0, SCROLL.headlineHoldEnd, headlineFadeMid, SCROLL.headlineExitEnd, 1],
    [1, 1, 0.25, 0, 0],
  )

  // —— Tagline 1: zoom into center, then slide left as punchline arrives ——
  const tagline1Scale = useTransform(
    scrollYProgress,
    [SCROLL.tagline1EnterStart, SCROLL.tagline1EnterEnd],
    [SCROLL.zoomFrom, 1],
  )
  const tagline1X = useTransform(
    scrollYProgress,
    [SCROLL.tagline1HoldEnd, SCROLL.tagline1ExitEnd],
    ['0vw', `-${SCROLL.slideDistance}`],
  )
  const tagline1Opacity = useTransform(
    scrollYProgress,
    [
      SCROLL.tagline1EnterStart,
      SCROLL.tagline1EnterEnd,
      SCROLL.tagline1HoldEnd,
      // Stay readable while sliding; fade only near the edge
      SCROLL.tagline1HoldEnd +
        (SCROLL.tagline1ExitEnd - SCROLL.tagline1HoldEnd) * 0.8,
      SCROLL.tagline1ExitEnd,
    ],
    [0, 1, 1, 1, 0],
  )

  // —— Tagline 2: slide in from the right ——
  const tagline2X = useTransform(
    scrollYProgress,
    [SCROLL.tagline2EnterStart, SCROLL.tagline2EnterEnd],
    [SCROLL.slideDistance, '0vw'],
  )
  const tagline2Opacity = useTransform(
    scrollYProgress,
    [
      SCROLL.tagline2EnterStart,
      SCROLL.tagline2EnterStart +
        (SCROLL.tagline2EnterEnd - SCROLL.tagline2EnterStart) * 0.2,
      SCROLL.tagline2EnterEnd,
      SCROLL.tagline2HoldEnd,
    ],
    [0, 1, 1, 1],
  )

  // Reduced-motion / static fallback: show one tagline, no scrubbing
  if (staticTaglineIndex != null) {
    const raw = TAGLINES[staticTaglineIndex] ?? TAGLINES[TAGLINES.length - 1]
    const tagline = normalizeTagline(raw)
    return (
      <motion.div style={{ opacity }} className="hero-content">
        <div className="hero-content__layer">
          {tagline.variant === 'headline' ? (
            <h1
              className={`hero-headline${animateOnMount ? ' animate-reveal-up-delay-1' : ''}`}
            >
              Why should you
              <br />
              <span className="hero-headline__emphasis">Hire&nbsp;Me?</span>
            </h1>
          ) : (
            <TaglineCopy tagline={tagline} />
          )}
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div style={{ opacity }} className="hero-content">
      {/* Layer 0 — headline splits vertically with scroll */}
      <motion.div
        className="hero-content__layer"
        style={{ opacity: headlineOpacity }}
        aria-hidden={false}
      >
        <h1
          className={`hero-headline hero-headline--split${animateOnMount ? ' animate-reveal-up-delay-1' : ''}`}
        >
          <motion.span className="hero-headline__line" style={{ y: line1Y }}>
            Why should you
          </motion.span>
          <motion.span
            className="hero-headline__line hero-headline__emphasis"
            style={{ y: line2Y }}
          >
            Hire&nbsp;Me?
          </motion.span>
        </h1>
      </motion.div>

      {/* Layer 1 — zooms in, then slides left off-screen */}
      <motion.div
        className="hero-content__layer"
        style={{ opacity: tagline1Opacity, scale: tagline1Scale, x: tagline1X }}
      >
        <TaglineCopy tagline={lead} />
      </motion.div>

      {/* Layer 2 — slides in from the right */}
      <motion.div
        className="hero-content__layer"
        style={{ opacity: tagline2Opacity, x: tagline2X }}
      >
        <TaglineCopy tagline={punch} />
      </motion.div>
    </motion.div>
  )
}
