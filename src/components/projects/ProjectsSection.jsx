import ProjectsGrid from './ProjectsGrid'
import projects from '../../data/projectsData'

export default function ProjectsSection({ id = 'projects' }) {
  return (
    <section id={id} className="light-section">
      <header className="projects-header">
        <div className="projects-header__index">
          PROJECT&nbsp;INDEX&nbsp;—&nbsp;2019&nbsp;·&nbsp;2026
        </div>
        <h1 className="projects-header__title">
          Selected
          <br />
          <span className="projects-header__title-emphasis">Works.</span>
        </h1>
      </header>

      <ProjectsGrid projects={projects} />

      <div className="projects-spacer" aria-hidden="true" />
    </section>
  )
}
