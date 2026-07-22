export default function AboutSection() {
  return (
    <section id="about" className="light-section about-section">
      <header className="about-header">
        <h2>Who am I?</h2>
      </header>

      <p className="about-body">
        I'm not just building apps, I'm building what's next. As a Computer
        Science student at UCF heading into my senior year, I'm laser-focused on
        full-stack development because that's where bold ideas become real,
        working products. I move fast, think big, and treat every project like
        it's the one that changes everything. The future of technology is being
        written right now, and I intend to be one of the people holding the pen.
      </p>

      <div className="about-skills">
        <h3>What I can do.</h3>
        <ul className="about-skills-list">
            <li>MERN stack</li>
            <li>MongoDB</li>
            <li>MySQL</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Express</li>
        </ul>
      </div>
    </section>
  );
}
