import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";
import { Container } from "./styles";

export function Contact() {
  return (
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Want to hire me? </p>
        <p>Contact me now</p>
      </header>
      <div className="contacts">
        <div>
          <a href="mailto:ankit.thapa10121998@gmail.com">
            <img src={emailIcon} alt="Email" />
          </a>
          <a href="mailto:ankit.thapa10121998@gmail.com">
            ankit.thapa10121998@gmail.com
          </a>
        </div>
        <div>
          <a href="tel:+919630576848">
            <img src={phoneIcon} alt="Phone No" />
          </a>
          <a href="tel:+919630576848">(+91) 8617015319</a>
        </div>
      </div>
    </Container>
  );
}
