import Navbar from './components/layout/Navbar'
import HeroSection from './components/hero/HeroSection'
import ProjectsSection from './components/projects/ProjectsSection'
import SmoothScroll from './components/SmoothScroll'
import AboutSection from './components/about/aboutSection'
import FooterSection from './components/footer/footerSection'

function App() {
  return (
    <SmoothScroll>
      <Navbar />
      <div className="app-shell">
        <HeroSection />
        <AboutSection />
        <ProjectsSection id="projects" />
        <FooterSection/>
      </div>
    </SmoothScroll>
  )
}

export default App
