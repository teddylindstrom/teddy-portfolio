import "../styles/about.css";

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">

        <div className="about-heading">
          <p className="section-label">OM MIG</p>

          <h2>
            Teknik möter
            <span> affär & kreativitet.</span>
          </h2>
        </div>

        <div className="about-content">
          <p>
            Jag har en bred bakgrund inom webbutveckling, affärsutveckling,
            kundservice och digital kommunikation. Jag trivs bäst när jag får
            kombinera teknik och problemlösning med förståelse för människor
            och verksamhet.
          </p>

          <p>
            Jag har erfarenhet av React, JavaScript, HTML, CSS och Python och
            tycker om att bygga lösningar som är tydliga, användarvänliga och
            funktionella.
          </p>

          <p>
            Min tidigare erfarenhet inom Customer Success och e-handel ger mig
            dessutom ett affärs- och kundperspektiv som jag tar med mig in i
            mitt arbete som utvecklare.
          </p>
        </div>

      </div>
    </section>
  );
}

export default About;