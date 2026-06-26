function ProjectLinks({ project }) {
  const links = [
    project.github && { label: 'Code', href: project.github },
    project.demo && { label: 'Demo', href: project.demo },
    project.caseStudy && { label: 'Case study', href: project.caseStudy }
  ].filter(Boolean)

  if (!links.length) return null

  return (
    <div className="project-links">
      {links.map((link) => (
        <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
          {link.label}
        </a>
      ))}
    </div>
  )
}

function ProjectsSection({ projects }) {
  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <section id="projects" className="projects portfolio-showcase">
      <div className="portfolio-intro">
        <p className="eyebrow">Selected work</p>
        <h2>Software projects built across AI, full-stack, systems, and data.</h2>
        <p>
          A focused collection of projects that show how I build useful products: from backend
          systems and search pipelines to interactive applications and applied machine learning.
        </p>
      </div>

      <div className="portfolio-metrics" aria-label="Portfolio summary">
        <div>
          <strong>{projects.length}</strong>
          <span>projects</span>
        </div>
        <div>
          <strong>{featuredProjects.length}</strong>
          <span>featured builds</span>
        </div>
        <div>
          <strong>10+</strong>
          <span>tools & frameworks</span>
        </div>
      </div>

      <div className="featured-grid">
        {featuredProjects.map((project) => (
          <article key={project.id} className="featured-project-card">
            <div className="project-card-topline">
              <span>{project.type}</span>
              <span>{project.year}</span>
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul>
              {project.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
            <div className="tech-stack">
              {project.tech.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
            <ProjectLinks project={project} />
          </article>
        ))}
      </div>

      <div className="portfolio-section-heading">
        <h3>More projects</h3>
        <p>Earlier coursework and personal builds that strengthened my fundamentals.</p>
      </div>

      <div className="project-list refined-project-list">
        {otherProjects.map((project) => (
          <article key={project.id} className="project-card refined-project-card">
            <div className="project-card-topline">
              <span>{project.type}</span>
              <span>{project.year}</span>
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack compact">
              {project.tech.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
            <ul>
              {project.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
            <ProjectLinks project={project} />
          </article>
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection
