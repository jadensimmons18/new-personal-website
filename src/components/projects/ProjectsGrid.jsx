import ProjectCard from './ProjectCard'
import ProjectMedia from './ProjectMedia'

export default function ProjectsGrid({ projects }) {
  return (
    <div className="projects-grid">
      {projects.map((project) => {
        const isTextRight = project.layout === 'text-right'

        return (
          <div key={project.id} className="project-row">
            <div
              className={
                isTextRight ? 'project-row__text--right' : 'project-row__text--left'
              }
            >
              <ProjectCard {...project} />
            </div>
            <div
              className={
                isTextRight ? 'project-row__media--left' : 'project-row__media--right'
              }
            >
              <ProjectMedia
                mediaLabel={project.mediaLabel}
                mediaPlaceholder={project.mediaPlaceholder}
                mediaGradient={project.mediaGradient}
                stripeAngle={project.stripeAngle}
                radialPosition={project.radialPosition}
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}
