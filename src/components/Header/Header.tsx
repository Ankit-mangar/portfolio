import { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { HashLink, NavHashLink } from "react-router-hash-link";
import Resume from "../../assets/ankit-cv.pdf";
import logo from "../../assets/logo.png";
import { Container } from "./styles";

export function Header() {
  const [isActive, setActive] = useState(false);

  function toggleTheme() {
    let html = document.getElementsByTagName("html")[0];
    html.classList.toggle("light");

    let projectCard1 = document.getElementById("project-card-1");
    if (projectCard1) projectCard1.classList.toggle("project-light");

    let projectCard2 = document.getElementById("project-card-2");
    if (projectCard2) projectCard2.classList.toggle("project-light");

    let projectCard3 = document.getElementById("project-card-3");
    if (projectCard3) projectCard3.classList.toggle("project-light");

    let projectCard4 = document.getElementById("project-card-4");
    if (projectCard4) projectCard4.classList.toggle("project-light");
  }

  function closeMenu() {
    setActive(false);
  }

  useEffect(() => {
    toggleTheme();
  }, []);

  return (
    <Container className="header-fixed">
      <Router>
        <HashLink smooth to="#home" className="logo d-flex">
          <img src={logo} alt="logo" width={"45px"} />
        </HashLink>
        <input
          onChange={toggleTheme}
          className="container_toggle"
          type="checkbox"
          id="switch"
          name="mode"
          defaultChecked
        />
        <label htmlFor="switch">Toggle</label>
        <nav className={isActive ? "active" : ""}>
          <NavHashLink smooth to="#home" onClick={closeMenu}>
            Home
          </NavHashLink>
          <NavHashLink smooth to="#about" onClick={closeMenu}>
            About me
          </NavHashLink>
          <NavHashLink smooth to="#project" onClick={closeMenu}>
            Project
          </NavHashLink>
          <NavHashLink smooth to="#contact" onClick={closeMenu}>
            Contact
          </NavHashLink>
          <a href={Resume} target="_blank" className="button">
            Resume
          </a>
        </nav>
        <div
          aria-expanded={isActive ? "true" : "false"}
          aria-haspopup="true"
          aria-label={isActive ? "Fechar menu" : "Abrir menu"}
          className={isActive ? "menu active" : "menu"}
          onClick={() => {
            setActive(!isActive);
          }}
        ></div>
      </Router>
    </Container>
  );
}
