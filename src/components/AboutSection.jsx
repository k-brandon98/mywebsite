function AboutSection() {
  const highlights = [
    'Cornell CS graduate',
    'Full-stack developer',
    'AI/ML + information retrieval',
    'Building for real-world impact'
  ]

  const facts = [
    ['Name', 'Brandon Boit'],
    ['School', 'Cornell University'],
    ['Focus', 'Software Engineering, AI, Full-Stack Development'],
    ['Hometown', 'Eldoret, Kenya'],
    ['Languages', 'English, Swahili, French, Kalenjin']
  ]

  return (
    <div className="hero-details about-page">
      <section className="about-showcase">
        <div className="section-kicker">About Me</div>

        <div className="about-hero">
          <div>
            <h2>Software engineer building practical, human-centered tools.</h2>
            <p className="about-summary">
              I’m Brandon Boit, a Cornell Computer Science graduate from Eldoret, Kenya,
              focused on full-stack software engineering, AI-powered applications, and
              systems that make technology more useful and accessible. My work spans
              web platforms, mobile apps, information retrieval, machine learning, and
              backend systems, with a growing interest in products that support education,
              healthcare, and scientific discovery.
            </p>
          </div>

          <div className="about-fact-card">
            {facts.map(([label, value]) => (
              <div key={label} className="about-fact">
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
        </div>

        <div className="about-highlight-grid">
          {highlights.map((item) => (
            <div key={item} className="about-highlight-card">
              {item}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default AboutSection