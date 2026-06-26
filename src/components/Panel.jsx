import { useState } from 'react'
import { topics, topicContent } from '../static/topics'
import ProjectsSection from './ProjectsSection'
import Resume from './ResumeSection'
import SkillsSection from './SkillsSection'
import AboutSection from './AboutSection'

function Panel({ projects }) {
  const [activeTopic, setActiveTopic] = useState('About')
  const currentTopic = topicContent[activeTopic]

  return (
    <div className="hero-panel">
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
      <div className="topic-header">
        <h1>{activeTopic}</h1>
        <p className="topic-caption">{currentTopic.caption}</p>
      </div>
      <div className="topic-content">

        {activeTopic === 'About' && <AboutSection />}
        {activeTopic === 'Resume' && <Resume />}
        {activeTopic === 'Portfolio' && <ProjectsSection projects={projects} />}
        {activeTopic === 'Skills' && <SkillsSection />}
      </div>
    </div>
  )
}

export default Panel
