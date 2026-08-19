import "../styles/projects.css";

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects-container">

        <p className="section-label">PROJEKT</p>

        <h2>Mina projekt</h2>

        <div className="projects-grid">

          <div className="project-card">
            <h3>BookClub Examination</h3>

            <p>
              Fullstack-projekt med React och Strapi där användare kan
              visa, filtrera och hantera böcker.
            </p>

            <a
              href="https://github.com/teddylindstrom/BookClubExamination"
              target="_blank"
              rel="noreferrer"
            >
              GitHub →
            </a>
          </div>

          <div className="project-card">
            <h3>Movie Vault</h3>

            <p>
              React-applikation som använder TMDB API för att visa filmer,
              söka och presentera detaljerad information.
            </p>

            <a
              href="https://github.com/teddylindstrom/react-exam-2.0"
              target="_blank"
              rel="noreferrer"
            >
              GitHub →
            </a>
          </div>

          <div className="project-card">
            <h3>Solaris</h3>

            <p>
              JavaScript-projekt som hämtar och presenterar data från ett API
              om vårt solsystem.
            </p>

            <a
              href="https://github.com/teddylindstrom/solaris"
              target="_blank"
              rel="noreferrer"
            >
              GitHub →
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Projects;