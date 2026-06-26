import { skillGroups } from "../static/skills"

function SkillsSection() {
  return (
    <div className="hero-details skills-page">
      <div className="section-kicker">Technical Toolkit</div>
      <h2>Skills</h2>
      <p className="section-intro">
        A practical mix of software engineering, full-stack development, AI/ML,
        data, and systems tools I’ve used across coursework, internships, and projects.
      </p>

      <div className="skill-category-grid">
        {skillGroups.map((group) => (
          <section key={group.title} className="skill-category-card">
            <div className="skill-category-header">
              <span className="skill-icon">{group.icon}</span>
              <div>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
              </div>
            </div>

            <div className="skills-grid">
              {group.skills.map((skill) => (
                <span key={skill} className="skill-pill">
                  {skill}
                </span>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}

export default SkillsSection