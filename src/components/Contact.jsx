import "../styles/contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">

        <p className="section-label">KONTAKT</p>

        <h2>Let's build something together.</h2>

        <p className="contact-text">
          Är du intresserad av att samarbeta eller vill veta mer om mina projekt?
          Hör gärna av dig.
        </p>

       <div className="contact-links">
  <a
    href="mailto:teddy.lindstrom.work@gmail.com?subject=Kontakt via portfolio"
  >
    Maila mig
  </a>

  <a
    href="https://www.linkedin.com/in/teddy-lindstr%C3%B6m-374271b2/"
    target="_blank"
    rel="noreferrer"
  >
    LinkedIn
  </a>

  <a
    href="https://github.com/teddylindstrom"
    target="_blank"
    rel="noreferrer"
  >
    GitHub
  </a>
</div>
</div>
    </section>
  );
}   


export default Contact;