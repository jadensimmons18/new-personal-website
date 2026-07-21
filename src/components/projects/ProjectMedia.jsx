export default function ProjectMedia({
  mediaLabel,
  mediaPlaceholder,
  mediaGradient,
  stripeAngle = 118,
  radialPosition = '68% 32%',
}) {
  return (
    <div
      className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-sky-200/15 shadow-[0_40px_90px_-40px_rgba(0,15,55,0.9)]"
      style={{ background: mediaGradient }}
    >
      <div
        className="absolute inset-0"
        style={{
          background: `repeating-linear-gradient(${stripeAngle}deg, rgba(120,170,255,0.055) 0 2px, transparent 2px 10px)`,
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(60% 60% at ${radialPosition}, rgba(90,150,255,0.28), transparent 70%)`,
        }}
      />
      <div className="absolute left-[18px] top-4 font-mono text-[10px] tracking-[0.12em] text-[rgba(180,205,255,0.55)]">
        {mediaLabel}
      </div>
      <div className="absolute inset-0 flex items-center justify-center font-mono text-xs tracking-[0.2em] text-[rgba(190,212,255,0.5)]">
        {mediaPlaceholder}
      </div>
    </div>
  )
}
