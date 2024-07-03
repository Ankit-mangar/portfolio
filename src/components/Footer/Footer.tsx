import githubIcon from "../../assets/github.svg";
import instagramIcon from "../../assets/instagram.svg";
import linkedin from "../../assets/linkedin.svg";
import medium from "../../assets/medium.png";
import telegram from "../../assets/telegram.svg";
import whatsapp from "../../assets/whatsapp.svg";
import { Container } from "./styles";

export function Footer() {
  return (
    <Container className="footer">
      <a href="https://ankitthapa.in" className="logo">
        <span>www.ankit</span>
        <span>thapa.in</span>
      </a>
      <div className="social-media">
        <a
          href="http://www.linkedin.com/in/ankit-thapa"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="Linkedin" />
        </a>
        <a
          href="https://github.com/Ankit-mangar/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a
          href="https://api.whatsapp.com/send/?phone=%2B918617015319&text=Hello+Ankit"
          target="_blank"
          rel="noreferrer"
        >
          <img src={whatsapp} alt="Whatsapp" />
        </a>
        <a href="https://t.me/Craazyyyyy" target="_blank" rel="noreferrer">
          <img src={telegram} alt="telegram" />
        </a>
        <a
          href="https://www.instagram.com/ankit_mangar"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a>
        <a
          href="https://medium.com/@ankit.thapa10121998"
          target="_blank"
          rel="noreferrer"
        >
          <img src={medium} alt="Instagram" />
        </a>
      </div>
    </Container>
  );
}
