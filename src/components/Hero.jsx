import "../styles/hero.css";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="hero-eyebrow">FRONTEND DEVELOPER</p>

        <h1>
          Hej, jag är <span>Teddy Lindström.</span>
        </h1>

        <p className="hero-description">
          Jag kombinerar webbutveckling, affärsförståelse och kundfokus
          för att skapa moderna och användarvänliga digitala lösningar.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="hero-button primary">
            Mina projekt
          </a>

          <a href="/Teddy-Lindstrom-CV.pdf" className="hero-button secondary">
            Ladda ner CV
          </a>
        </div>

        <div className="hero-tech">
          <span>React</span>
          <span>JavaScript</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>Git</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;