import { useState } from 'react'
import { education } from '../static/education'
import { experience } from '../static/experience'
import { certifications } from '../static/certifications'
import { skills } from '../static/skills'


const portfolioProjects = [
  {
    title: 'Uatu’s Codex',
    subtitle: 'Android app with Marvel API integration',
    bullets: [
      'Built a character browser app using Kotlin and REST APIs.',
      'Handled data parsing, pagination, and offline-safe state.',
      'Designed a polished mobile UI for browsing superpowered characters.'
    ]
  },
  {
    title: 'McDiver',
    subtitle: 'Java maze game with pathfinding',
    bullets: [
      'Implemented Dijkstra’s algorithm for shortest-path navigation.',
      'Created a maze-based collectible game with greedy scoring mechanics.',
      'Built the UI and game flow using Java Swing.'
    ]
  },
  {
    title: 'MiniBank',
    subtitle: 'OCaml database-backed banking simulation',
    bullets: [
      'Developed a banking system using OCaml and SQLite3.',
      'Built teller/customer workflows for deposits, withdrawals, and transfers.',
      'Modeled relational data and persistence cleanly in a functional style.'
    ]
  }
]

const topics = ['About', 'Resume', 'Portfolio', 'Skills', 'Contact']

const topicContent = {
  About: {
    caption: 'Hello — I’m Brandon.',
    paragraphs: [
      'I’m a software engineer and Cornell student building polished, human-centered experiences for education and health.',
      'I combine practical engineering with thoughtful design to deliver web applications, mobile tools, and data-driven systems that empower users and scale gracefully.'
    ]
  },
  Resume: {
    caption: 'Professional summary and recent roles.',
    paragraphs: [
      'Here are the experiences, education, and certifications that shape my professional profile.',
      'I bring both technical execution and collaborative delivery to every team I join.'
    ]
  },
  Portfolio: {
    caption: 'Featured work and technical highlights.',
    paragraphs: [
      'A selection of projects that showcase Android, web, and systems engineering work.',
      'Each project blends technical depth with practical problem solving.'
    ]
  },
  Skills: {
    caption: 'Core technologies and tools I use.',
    paragraphs: [
      'These are the languages and frameworks I use most often when building applications.',
      'I aim for breadth in tools and depth in fundamentals.'
    ]
  },
  Contact: {
    caption: 'Let’s connect.',
    paragraphs: [
      'Reach out by email to discuss projects, internships, or research collaborations.',
      'I’m open to opportunities in web engineering, data-driven systems, and product-focused teams.'
    ]
  }
}

function HomeSection() {
  const [activeTopic, setActiveTopic] = useState('About')

  const currentTopic = topicContent[activeTopic]

  return (
    <section id="home">
      <div className="hero-shell">
        <aside className="profile-card">
          <img className="profile-photo" src="/images/brandon.jpeg" alt="Brandon Boit" />
          <div className="profile-name">Brandon Boit</div>
          <div className="profile-role">Software Engineer</div>
          <div className="profile-divider" />
          <div className="topic-list">
            {topics.map((topic) => (
              <button
                key={topic}
                className={activeTopic === topic ? 'topic-button active' : 'topic-button'}
                onClick={() => setActiveTopic(topic)}
              >
                {topic}
              </button>
            ))}
          </div>
          <div className="profile-detail">
            <span className="detail-label">Email</span>
            <span>brandon@example.com</span>
          </div>
          <div className="profile-detail">
            <span className="detail-label">Location</span>
            <span>Ithaca, NY</span>
          </div>
        </aside>

        <div className="hero-panel">
          <div className="hero-label">Digital Identity</div>
          <div className="topic-header">
            <h1>{activeTopic}</h1>
            <p className="topic-caption">{currentTopic.caption}</p>
          </div>
          <div className="topic-content">
            {currentTopic.paragraphs?.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            {activeTopic === 'About' && (
              <div className="hero-details about-page">
                <div className="bio">
                  <h2>About Me</h2>
                  <div className="bio2">
                    <div className="bio-data">
                      <ul>
                        <li><em>Name:</em> Brandon Boit</li>
                        <li><em>School:</em> Cornell University</li>
                        <li><em>Pronouns:</em> he/him/his</li>
                        <li><em>Age:</em> 20 Years</li>
                        <li><em>Hometown:</em> Eldoret, Kenya</li>
                      </ul>
                    </div>
                    <p className="about">
                      I'm currently a sophomore at Cornell University, pursuing my dream of becoming a highly skilled software engineer. My journey into computer science has been exciting as I explore algorithms, data structures, NLP, and web development. I believe technology can transform lives and I want to use my skills to create meaningful change globally.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTopic === 'Resume' && (
              <div className="hero-details resume-page">
                <div className="experience">
                  <h2>Professional Experience</h2>
                  {experience.map((item) => (
                    <div key={item.title} className="work">
                      <div className="experience-header">
                        <div>
                          <h3>{item.title}</h3>
                          <p><em>{item.role}</em></p>
                        </div>
                        <div className="experience-meta">
                          <p>{item.period}</p>
                          <p>{item.location}</p>
                        </div>
                      </div>
                      <ul>
                        {item.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="education">
                  <h2>Education</h2>
                  {education.map((item) => (
                    <div key={item.heading} className="school">
                      <figure className="logo">
                        <img src={item.logo} alt={`${item.heading} logo`} />
                      </figure>
                      <div>
                        <h3>{item.heading}</h3>
                        <p>{item.period}</p>
                        {item.details.map((line) => (
                          <p key={line}>{line}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="extra">
                  <h2>Certifications & Activities</h2>
                  {certifications.map((item) => (
                    <div key={item.title} className="cert">
                      <h3>{item.title} - {item.date}</h3>
                      <ul>
                        {item.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTopic === 'Portfolio' && (
              <div className="hero-details portfolio-page">
                <h2>Featured Projects</h2>
                {portfolioProjects.map((project) => (
                  <div key={project.title} className="project-card">
                    <h3>{project.title}</h3>
                    <p className="project-subtitle">{project.subtitle}</p>
                    <ul>
                      {project.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {activeTopic === 'Skills' && (
              <div className="hero-details skills-page">
                <h2>Skills</h2>
                <div className="skills-grid">
                  {skills.map((skill) => (
                    <span key={skill} className="skill-pill">{skill}</span>
                  ))}
                </div>
              </div>
            )}

            {activeTopic === 'Contact' && (
              <div className="hero-details contact-page">
                <h2>Contact</h2>
                <div className="profile-detail">
                  <span className="detail-label">Email</span>
                  <span>brandon@example.com</span>
                </div>
                <div className="profile-detail">
                  <span className="detail-label">Location</span>
                  <span>Ithaca, NY</span>
                </div>
                <p>
                  I’m always interested in connecting with new teams, collaborators, and mentors. Send a note to start the conversation.
                </p>
              </div>
            )}
          </div>
          <div className="hero-stats">
            <div className="metric-card">
              <span className="metric-value">4+</span>
              <span className="metric-label">Professional roles</span>
            </div>
            <div className="metric-card">
              <span className="metric-value">8+</span>
              <span className="metric-label">Featured projects</span>
            </div>
            <div className="metric-card">
              <span className="metric-value">7+</span>
              <span className="metric-label">Core technologies</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeSection
