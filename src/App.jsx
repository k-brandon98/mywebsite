import { useState } from 'react'
import Aside from './components/aside'
import Panel from './components/Panel'
import ProjectsSection from './components/ProjectsSection'
import { projects } from './static/projects'

function App() {
  const [selectedProjectId, setSelectedProjectId] = useState(null)

  return (
    <div className="app">
      <main>
        <section id="home">
          <div className="hero-shell">
            <Aside />
            <Panel projects={projects} />
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
