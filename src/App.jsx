import { projects } from './projects.js'

function App() {
  return (
    <div className="wrap">
      <header>
        <p className="eyebrow">Selected work</p>
        <h1>Olajide Olamide</h1>
        <p className="role">Web Programmer</p>
        <p className="intro">
          I build fast, practical websites and web apps for company sites, online stores,
          registration platforms and dashboards. Here are the projects built so far.
        </p>
      </header>

      <main className="work">
        <div className="work-head">
          <h2>Recent Websites built</h2>
          <span className="count">{projects.length} projects</span>
        </div>

        <div className="projects">
          {projects.map((project, index) => (
            <a
              className="project"
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              key={project.domain}
            >
              <span className="num">{String(index + 1).padStart(2, '0')}</span>
              <span>
                <span className="name">{project.domain}</span>
                <span className="desc">{project.description}</span>
              </span>
              <span className="arrow" aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </main>

      <footer>
        More projects can be shared if need be.
        <br />
        © 2026 Olajide Olamide
      </footer>
    </div>
  )
}

export default App
