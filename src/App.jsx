import Navbar from './components/layout/Navbar'
import HeroSection from './components/hero/HeroSection'
import ProjectsSection from './components/projects/ProjectsSection'
import SmoothScroll from './components/SmoothScroll'
import AboutSection from './components/about/aboutSection'
import FooterSection from './components/footer/footerSection'
import CustomCursor from './components/CustomCursor'

function App() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <Navbar />
      <div className="app-shell">
        <HeroSection />
        <AboutSection />
        <ProjectsSection id="projects" />
        <FooterSection />
      </div>
    </SmoothScroll>
  )
}

export default App
