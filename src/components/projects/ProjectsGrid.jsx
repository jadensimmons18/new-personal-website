import ProjectCard from './ProjectCard'
import ProjectMedia from './ProjectMedia'

export default function ProjectsGrid({ projects }) {
  return (
    <div className="mx-auto flex max-w-projects flex-col gap-[130px] px-6 py-14 pb-8 md:px-[46px]">
      {projects.map((project) => {
        const isTextRight = project.layout === 'text-right'

        return (
          <div
            key={project.id}
            className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-[78px]"
          >
            <div className={isTextRight ? 'lg:order-2' : 'lg:order-1'}>
              <ProjectCard {...project} />
            </div>
            <div className={isTextRight ? 'lg:order-1' : 'lg:order-2'}>
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
