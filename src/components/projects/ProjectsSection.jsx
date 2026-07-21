import Navbar from '../layout/Navbar'
import ProjectsGrid from './ProjectsGrid'
import projects from '../../data/projectsData'

export default function ProjectsSection({ id = 'projects' }) {
  return (
    <section
      id={id}
      className="relative z-10 min-h-screen overflow-hidden bg-white font-sans text-neutral-950"
    >
      <Navbar variant="projects" />

      <header className="relative z-40 px-6 pb-[30px] pt-[88px] text-center md:px-6">
        <div className="mb-[26px] font-mono text-[11px] tracking-[0.4em] text-brand-600">
          PROJECT&nbsp;INDEX&nbsp;—&nbsp;2019&nbsp;·&nbsp;2026
        </div>
        <h1 className="m-0 text-projects-title font-bold text-neutral-950">
          Selected
          <br />
          <span className="font-serif font-medium italic tracking-normal">Works.</span>
        </h1>
      </header>

      <ProjectsGrid projects={projects} />

      <div className="h-24" aria-hidden="true" />
    </section>
  )
}
