import ScrollAnimation from "react-animate-on-scroll";
import ankitThapa from "../../assets/ankit.png";
import angularIcon from "../../assets/angularIcon.png";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import htmlIcon from "../../assets/html-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import javaIcon from "../../assets/java.png";
import springIcon from "../../assets/spring.png";
import reactIcon from "../../assets/react-icon.svg";
import muiIcon from "../../assets/mui.png";
import typescriptIcon from "../../assets/typescript-icon.svg";
import { Container } from "./styles";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
            I am an enthusiastic full-stack developer with over 3+ years of
            experience in web development, specializing in technologies such as
            React, Angular, Spring Boot, and AWS. My journey in the tech
            industry has equipped me with the skills necessary to tackle complex
            challenges and deliver robust solutions. My primary focus has been
            on building dynamic and responsive web applications that provide
            seamless user experiences across various devices. I take great pride
            in my attention to detail and adherence to clean coding practices,
            which ensures maintainable and scalable codebases.
          </p>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInLeft"
          delay={0.2 * 1000}
          style={{ marginTop: "2rem", marginBottom: "2rem" }}
        >
          <p>
            My expertise extends to working with RESTful APIs, which are
            integral to modern web development, allowing for smooth
            communication between front-end and back-end systems. I am
            proficient in using Git and GitHub for version control, ensuring
            efficient collaboration and code management in team environments.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
            Additionally, my experience with Agile methodologies has honed my
            ability to adapt to changing requirements and deliver incremental
            improvements, fostering a productive and responsive development
            process. Staying up-to-date with the latest technologies is a
            priority for me, and I consistently seek opportunities for
            continuous learning and growth.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={typescriptIcon} alt="Typescript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={angularIcon} alt="angular" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
              <img src={htmlIcon} alt="Html" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
              <img src={cssIcon} alt="Css" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={boostrapIcon} alt="bootstrap" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={muiIcon} alt="mui" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={jsIcon} alt="JavaScript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={javaIcon} alt="java" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={springIcon} alt="spring" />
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.2 * 1000}>
          <img src={ankitThapa} alt="ankit" />
        </ScrollAnimation>
      </div>
    </Container>
  );
}
