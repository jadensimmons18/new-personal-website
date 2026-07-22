import Navbar from './components/layout/Navbar'
import HeroSection from './components/hero/HeroSection'
import ProjectsSection from './components/projects/ProjectsSection'
import SmoothScroll from './components/SmoothScroll'
import AboutSection from './components/about/aboutSection'

function App() {
  return (
    <SmoothScroll>
      <Navbar />
      <div className="app-shell">
        <HeroSection />
        <AboutSection />
        <ProjectsSection id="projects" />
      </div>
    </SmoothScroll>
  )
}

export default App
