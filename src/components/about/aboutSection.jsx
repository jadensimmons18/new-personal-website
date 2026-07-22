import { about } from '../../data/aboutData'

export default function AboutSection() {
  return (
    <section id="about" className="light-section about-section">
      <header>
        {about.title}
      </header>
      {about.paragraphs}
      {about.skills}
    </section>
  )
}
