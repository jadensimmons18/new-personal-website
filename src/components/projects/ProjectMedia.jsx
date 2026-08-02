import { useRef, useState } from 'react'

export default function ProjectMedia({
  image,
  video,
  mediaLabel,
  mediaPlaceholder,
  mediaGradient,
  stripeAngle = 118,
  radialPosition = '68% 32%',
}) {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const hasMedia = Boolean(image || video)

  const playVideo = () => {
    const el = videoRef.current
    if (!el) return
    el.play()
      .then(() => setIsPlaying(true))
      .catch(() => {})
  }

  const stopVideo = () => {
    const el = videoRef.current
    if (!el) return
    el.pause()
    el.currentTime = 0
    setIsPlaying(false)
  }

  return (
    <div
      className="project-media"
      style={!hasMedia ? { background: mediaGradient } : undefined}
      onMouseEnter={video ? playVideo : undefined}
      onMouseLeave={video ? stopVideo : undefined}
    >
      {image ? (
        <img
          src={image}
          alt=""
          className="project-media__image"
        />
      ) : null}

      {video ? (
        <video
          ref={videoRef}
          className={[
            'project-media__image',
            'project-media__video',
            isPlaying ? 'is-playing' : '',
          ]
            .filter(Boolean)
            .join(' ')}
          src={video}
          poster={image}
          muted
          loop
          playsInline
          preload="metadata"
        />
      ) : null}

      {!image && !video ? (
        <>
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
          <div className="project-media__placeholder">
            {mediaPlaceholder}
          </div>
        </>
      ) : null}

      <div className="project-media__label">
        {mediaLabel}
      </div>
    </div>
  )
}
