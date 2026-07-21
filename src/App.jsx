import HeroSection from './components/hero/HeroSection'
import ProjectsSection from './components/projects/ProjectsSection'
import SmoothScroll from './components/SmoothScroll'

function App() {
  return (
    <SmoothScroll>
      <div className="bg-white">
        <HeroSection />
        <ProjectsSection id="projects" />
      </div>
    </SmoothScroll>
  )
}

export default App
