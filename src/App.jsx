import HeroSection from './components/hero/HeroSection'
import ProjectsSection from './components/projects/ProjectsSection'

function App() {
  return (
    <div className="bg-white">
      <HeroSection />
      <ProjectsSection id="projects" />
    </div>
  )
}

export default App
