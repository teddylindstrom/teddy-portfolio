import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiPython,
  SiNodedotjs,
  SiExpress,
  SiGit,
  SiGithub,
  SiVite,
  SiStrapi,
} from "react-icons/si";

import "../styles/skills.css";

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills-container">

        <div className="skills-heading">
          <p className="section-label">KOMPETENSER</p>

          <h2>
            Verktygen jag
            <span> bygger med.</span>
          </h2>
        </div>

        <div className="skills-groups">

          <div className="skill-group">
            <h3>Frontend</h3>

            <div className="skill-grid">
              <div className="skill-card">
                <SiReact />
                <span>React</span>
              </div>

              <div className="skill-card">
                <SiJavascript />
                <span>JavaScript</span>
              </div>

              <div className="skill-card">
                <SiHtml5 />
                <span>HTML</span>
              </div>

              <div className="skill-card">
                <SiCss />
                <span>CSS</span>
              </div>

              <div className="skill-card">
                <SiVite />
                <span>Vite</span>
              </div>
            </div>
          </div>

          <div className="skill-group">
            <h3>Backend & data</h3>

            <div className="skill-grid">
              <div className="skill-card">
                <SiNodedotjs />
                <span>Node.js</span>
              </div>

              <div className="skill-card">
                <SiExpress />
                <span>Express</span>
              </div>

              <div className="skill-card">
                <SiStrapi />
                <span>Strapi</span>
              </div>

              <div className="skill-card">
                <SiPython />
                <span>Python</span>
              </div>
            </div>
          </div>

          <div className="skill-group">
            <h3>Tools & workflow</h3>

            <div className="skill-grid">
              <div className="skill-card">
                <SiGit />
                <span>Git</span>
              </div>

              <div className="skill-card">
                <SiGithub />
                <span>GitHub</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Skills;