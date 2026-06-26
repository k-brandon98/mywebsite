import { education } from "../static/education"
import { experience } from "../static/experience"
import { certifications } from "../static/certifications"

function Resume() {
  return (
    <div className="hero-details resume-page resume-showcase">
      <section className="resume-intro" aria-labelledby="resume-heading">
        <p className="eyebrow">Resume</p>
        <h2 id="resume-heading">Builder experience across full-stack, data, teaching, and service.</h2>
        <p>
          A focused snapshot of the roles, education, and activities that shaped how I build reliable,
          user-centered software — from production web apps to academic systems and community-facing work.
        </p>
      </section>

      <div className="resume-metrics" aria-label="Resume highlights">
        <div>
          <strong>{experience.length}+</strong>
          <span>Roles</span>
        </div>
        <div>
          <strong>{education.length}</strong>
          <span>Education</span>
        </div>
        <div>
          <strong>{certifications.length}+</strong>
          <span>Certifications</span>
        </div>
      </div>

      <section className="resume-section experience-section" aria-labelledby="experience-heading">
        <div className="resume-section-heading">
          <p className="eyebrow">Experience</p>
          <h2 id="experience-heading">Professional Experience</h2>
        </div>

        <div className="timeline-list">
          {experience.map((item) => (
            <article key={`${item.title}-${item.period}`} className="timeline-card work">
              <div className="timeline-marker" aria-hidden="true" />
              <div className="experience-header refined-experience-header">
                <div>
                  <p className="resume-card-kicker">{item.role}</p>
                  <h3>{item.title}</h3>
                </div>
                <div className="experience-meta meta-pills">
                  <span>{item.period}</span>
                  <span>{item.location}</span>
                </div>
              </div>
              <ul className="impact-list">
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="resume-section education-section" aria-labelledby="education-heading">
        <div className="resume-section-heading">
          <p className="eyebrow">Education</p>
          <h2 id="education-heading">Education</h2>
        </div>

        <div className="education-grid">
          {education.map((item) => (
            <article key={item.heading} className="education-card school">
              <figure className="logo education-logo">
                <img src={item.logo} alt={`${item.heading} logo`} />
              </figure>
              <div>
                <p className="resume-card-kicker">{item.period}</p>
                <h3>{item.heading}</h3>
                <div className="education-details">
                  {item.details.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="resume-section activities-section" aria-labelledby="activities-heading">
        <div className="resume-section-heading">
          <p className="eyebrow">Beyond coursework</p>
          <h2 id="activities-heading">Certifications</h2>
        </div>

        <div className="activity-grid">
          {certifications.map((item) => (
            <article key={`${item.title}-${item.date}`} className="activity-card cert">
              <div className="activity-card-header">
                <h3>{item.title}</h3>
                <span>{item.date}</span>
              </div>
              <ul className="impact-list compact-list">
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Resume
