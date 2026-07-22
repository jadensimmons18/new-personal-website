export default function ProjectMedia({
  mediaLabel,
  mediaPlaceholder,
  mediaGradient,
  stripeAngle = 118,
  radialPosition = '68% 32%',
}) {
  return (
    <div
      className="project-media"
      style={{ background: mediaGradient }}
    >
      <div
        className="project-media__layer"
        style={{
          background: `repeating-linear-gradient(${stripeAngle}deg, rgba(120,170,255,0.055) 0 2px, transparent 2px 10px)`,
        }}
      />
      <div
        className="project-media__layer"
        style={{
          background: `radial-gradient(60% 60% at ${radialPosition}, rgba(90,150,255,0.28), transparent 70%)`,
        }}
      />
      <div className="project-media__label">
        {mediaLabel}
      </div>
      <div className="project-media__placeholder">
        {mediaPlaceholder}
      </div>
    </div>
  )
}
