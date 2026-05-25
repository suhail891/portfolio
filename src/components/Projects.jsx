import '../static/Projects.css';

function Projects() {

  return (

    <section>

      <h2>Latest Projects</h2>

      <div className="projects">

        <div className="project-card">
          <h3>Just Convert</h3>
          <button>Demo</button>
          <a href="https://github.com/suhail891/justConvert" target="_blank" rel="noopener noreferrer">
            <button>Github</button>
          </a>
        </div>

        <div className="project-card">
          <h3>Foods Reel Scrolling</h3>
          <button>Demo</button>
          <a href="https://github.com/suhail891/ds-algo-visualizer" target="_blank" rel="noopener noreferrer">
            <button>Github</button>
          </a>
        </div>

      </div>

    </section>

  );
}

export default Projects;