import { motion } from 'framer-motion'

export default function ScrollCue({ opacity = 1 }) {
  return (
    <motion.div
      style={{ opacity }}
      className="absolute bottom-[34px] left-0 right-0 z-50 flex flex-col items-center gap-[11px]"
    >
      <div className="font-mono text-[10.5px] tracking-[0.34em] text-[rgba(180,205,255,0.72)]">
        EXPLORE&nbsp;
        <span className="text-[rgba(130,175,255,0.5)]">//</span>
        &nbsp;SCROLL&nbsp;DOWN
      </div>
      <svg
        width="20"
        height="30"
        viewBox="0 0 20 30"
        fill="none"
        className="animate-float-arrow"
        aria-hidden="true"
      >
        <rect
          x="7.5"
          y="1"
          width="5"
          height="17"
          rx="2.5"
          stroke="rgba(190,212,255,0.55)"
          fill="none"
        />
        <path
          d="M4 21 L10 27 L16 21"
          stroke="rgba(190,212,255,0.7)"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </motion.div>
  )
}
