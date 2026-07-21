import { AnimatePresence, motion } from 'framer-motion'
import { TAGLINES } from '../../lib/scrollConfig'

// Renders the inner markup for one tagline entry, chosen by its variant.
function TaglineBody({ tagline, animateOnMount }) {
  if (tagline.variant === 'headline') {
    return (
      <h1
        className={`m-0 text-hero-title font-bold text-mist-50 [text-shadow:0_4px_60px_rgba(0,20,60,0.9)] ${
          animateOnMount ? 'animate-reveal-up-delay-1' : ''
        }`}
      >
        Why should you
        <br />
        <span className="font-serif text-[1em] font-medium italic tracking-normal">
          Hire&nbsp;Me?
        </span>
      </h1>
    )
  }

  if (tagline.variant === 'punch') {
    return (
      <p className="m-0 font-bold uppercase tracking-[0.05em] text-mist-50 text-[clamp(1.6rem,4.4vw,2.7rem)] [text-shadow:0_2px_44px_rgba(120,170,255,0.55)]">
        {tagline.text}
      </p>
    )
  }

  // 'lead' and any default
  return (
    <p className="m-0 font-medium text-[rgba(200,218,255,0.86)] text-[clamp(1.05rem,2.5vw,1.5rem)]">
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
      className="pointer-events-none absolute inset-0 z-40 flex items-center justify-center px-6 text-center"
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