export default function AboutSection() {
  return (
    <section id="about" className="light-section about-section">
      <div className="about-section__inner">
        <header className="about-header">
          <p className="about-header__eyebrow">About — Bio</p>
          <h2 className="about-header__title">
            Who am{' '}
            <span className="about-header__title-emphasis">I?</span>
          </h2>
        </header>

        <div className="about-layout">
          {/* Drop your photo at public/portrait.jpg (or change the src) */}
          <figure className="about-portrait">
            <img
              className="about-portrait__image"
              src="/portrait.jpg"
              alt="Portrait of Jaden Simmons"
              onError={(event) => {
                // Keep the circular frame; hide the broken-image icon until you add the file
                event.currentTarget.style.opacity = '0'
              }}
            />
          </figure>

          <div className="about-copy">
            <p className="about-body">
              I'm not just building apps, I'm building what's next. As a Computer
              Science student at UCF heading into my senior year, I'm laser-focused
              on full-stack development because that's where bold ideas become real,
              working products. I move fast, think big, and treat every project like
              it's the one that changes everything. The future of technology is being
              written right now, and I intend to be one of the people holding the pen.
            </p>

            <div className="about-skills">
              <h3 className="about-skills__heading">What I can do.</h3>
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
          </div>
        </div>
      </div>

      <div className="about-spacer" aria-hidden="true" />
    </section>
  )
}
