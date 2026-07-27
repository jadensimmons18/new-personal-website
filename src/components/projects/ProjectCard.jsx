import { ArrowRight } from 'lucide-react'

export default function ProjectCard({
  index,
  category,
  title,
  titleLine2,
  titleItalic,
  subtitle,
  description,
  href,
  linkLabel = 'VIEW SITE',
}) {
  return (
    <div>
      <div className="project-card__meta">
        {String(index).padStart(2, '0')}&nbsp;&nbsp;·&nbsp;&nbsp;{category}
      </div>

      <h2 className="project-card__title">
        {title}
        {titleLine2 && (
          <>
            <br />
            {titleLine2}
          </>
        )}
        {titleItalic && (
          <>
            <br />
            <span className="project-card__title-italic">{titleItalic}</span>
          </>
        )}
      </h2>

      <div className="project-card__subtitle">{subtitle}</div>

      <p className="project-card__description">
        {description}
      </p>

      <a
        href={href}
        className="project-card__link"
        target="_blank"
        rel="noopener noreferrer"
      >
        {linkLabel.split(' ').join('\u00A0')}
        <ArrowRight size={14} strokeWidth={1.5} aria-hidden="true" />
      </a>
    </div>
  )
}
