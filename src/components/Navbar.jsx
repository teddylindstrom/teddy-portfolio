import { useState, useEffect } from "react";
import { FiMenu, FiX, FiDownload } from "react-icons/fi";
import { Link } from "react-scroll";

import "../styles/navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-container">

        <Link
          to="home"
          smooth={true}
          duration={500}
          className="navbar-logo"
          onClick={closeMenu}
        >
          Teddy<span>.</span>
        </Link>

        <nav className={`navbar-links ${menuOpen ? "active" : ""}`}>
          <Link to="about" smooth={true} duration={500} onClick={closeMenu}>
            About
          </Link>

          <Link to="skills" smooth={true} duration={500} onClick={closeMenu}>
            Skills
          </Link>

          <Link to="projects" smooth={true} duration={500} onClick={closeMenu}>
            Projects
          </Link>

          <Link
            to="experience"
            smooth={true}
            duration={500}
            onClick={closeMenu}
          >
            Experience
          </Link>

          <Link to="contact" smooth={true} duration={500} onClick={closeMenu}>
            Contact
          </Link>

          <a
            href="/Teddy-Lindstrom-CV.pdf"
            className="navbar-cv"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            <FiDownload />
            CV
          </a>
        </nav>

        <button
          className="navbar-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Stäng meny" : "Öppna meny"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

      </div>
    </header>
  );
}

export default Navbar;