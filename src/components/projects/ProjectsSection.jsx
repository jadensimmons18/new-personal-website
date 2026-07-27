import ProjectsGrid from './ProjectsGrid'
import projects from '../../data/projectsData'

export default function ProjectsSection({ id = 'projects' }) {
  return (
    <section id={id} className="light-section">
      <header className="projects-header">
        <div className="projects-header__index">
          PROJECTS&nbsp;
        </div>
        <h1 className="projects-header__title">
          What Have I
          <span className="projects-header__title-emphasis"> Built?</span>
        </h1>
      </header>

      <ProjectsGrid projects={projects} />

      <div className="projects-spacer" aria-hidden="true" />
    </section>
  )
}
