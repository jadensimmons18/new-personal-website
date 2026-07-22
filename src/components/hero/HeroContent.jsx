import { AnimatePresence, motion } from 'framer-motion'
import { TAGLINES } from '../../lib/scrollConfig'

// Renders the inner markup for one tagline entry, chosen by its variant.
function TaglineBody({ tagline, animateOnMount }) {
  if (tagline.variant === 'headline') {
    return (
      <h1
        className={`hero-headline${animateOnMount ? ' animate-reveal-up-delay-1' : ''}`}
      >
        Why should you
        <br />
        <span className="hero-headline__emphasis">
          Hire&nbsp;Me?
        </span>
      </h1>
    )
  }

  if (tagline.variant === 'punch') {
    return (
      <p className="hero-punch">
        {tagline.text}
      </p>
    )
  }

  // 'lead' and any default
  return (
    <p className="hero-lead">
      {tagline.text}
    </p>
  )
}

export default function HeroContent({ activeTagline = 0, animateOnMount = true, opacity = 1 }) {
  const rawEntry = TAGLINES[activeTagline] ?? TAGLINES[0]
  // Normalize: accept plain strings, and fall back to the old `emphasis` flag if present.
  const tagline =
    typeof rawEntry === 'string'
      ? { text: rawEntry, variant: 'lead' }
      : { variant: rawEntry.emphasis ? 'punch' : 'lead', ...rawEntry }

  return (
    <motion.div
      style={{ opacity }}
      className="hero-content"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={activeTagline}
          initial={{ opacity: 0, y: 16, filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -16, filter: 'blur(6px)' }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <TaglineBody tagline={tagline} animateOnMount={animateOnMount} />
        </motion.div>
      </AnimatePresence>
    </motion.div>
  )
}
