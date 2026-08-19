import "../styles/experience.css";

function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="experience-container">

        <p className="section-label">ERFARENHET</p>

        <h2>Arbetslivserfarenhet</h2>

        <div className="timeline">

          <div className="timeline-item">
            <h3>Hanza / Lernia</h3>
            <span>2025</span>
            <p>
              Produktion av kretskort och arbete i tillverkningsmiljö.
            </p>
          </div>

          <div className="timeline-item">
            <h3>Hitta.se</h3>
            <span>2024</span>
            <p>
              Customer Success Agent med fokus på B2B-kunder, support och digitala lösningar.
            </p>
          </div>

          <div className="timeline-item">
            <h3>UC AB</h3>
            <span>2023</span>
            <p>
              Kundservice för både privat- och företagskunder.
            </p>
          </div>

          <div className="timeline-item">
            <h3>Rek.ai</h3>
            <span>2022</span>
            <p>
              Customer Success, onboarding, support och kundutveckling.
            </p>
          </div>

          <div className="timeline-item">
            <h3>H&M</h3>
            <span>2016–2022</span>
            <p>
              Floor Manager och Sales Advisor med ansvar för team och kundupplevelse.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Experience;