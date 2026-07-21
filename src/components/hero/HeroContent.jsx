import { AnimatePresence, motion } from 'framer-motion'
import { TAGLINES } from '../../lib/scrollConfig'

export default function HeroContent({ activeTagline = 0, animateOnMount = true, opacity = 1 }) {
  const raw = TAGLINES[activeTagline] ?? TAGLINES[0]
  const tagline = typeof raw === 'string' ? { text: raw, emphasis: false } : raw

  return (
    <motion.div
      style={{ opacity }}
      className="pointer-events-none absolute inset-0 z-40 flex flex-col items-center justify-center px-6 text-center"
    >
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

      <div
        className={`relative mt-[30px] flex h-[72px] max-w-[560px] items-center justify-center ${
          animateOnMount ? 'animate-reveal-up-delay-2' : ''
        }`}
      >
        <AnimatePresence mode="wait" initial={false}>
          {tagline.text ? (
            <motion.p
              key={activeTagline}
              initial={{ opacity: 0, y: 14, filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -14, filter: 'blur(6px)' }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className={
                tagline.emphasis
                  ? 'absolute m-0 font-bold uppercase tracking-[0.05em] text-mist-50 text-[clamp(1.6rem,4.4vw,2.7rem)] [text-shadow:0_2px_44px_rgba(120,170,255,0.55)]'
                  : 'absolute m-0 font-medium text-[rgba(200,218,255,0.86)] text-[clamp(1.05rem,2.5vw,1.5rem)]'
              }
            >
              {tagline.text}
            </motion.p>
          ) : null}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}