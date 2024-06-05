import ScrollAnimation from "react-animate-on-scroll";
import externalLink from "../../assets/external-link.svg";
import { Container } from "./styles";

export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
          <div id="project-card-1" className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://www.nodmd.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a> </div>
            </header>
            <div className="body">
              <h3>NodMd</h3>
              <p> Nod is a telehealth platform designed by specialists to treat patients wherever they are. We bring specialist treatment to critical access hospitals, skilled nursing facilities, post-acute rehab centers, and even directly to the patient's home. </p>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div id="project-card-2" className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://wazotechnology.com/en/home" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" /></a>
              </div>
            </header>
            <div className="body">
              <h3>Wazo</h3>
              <p>
              WAZO technology provides a platform for the landlord, owner and tenants to map and manage their properties. WAZO is a platform that helps to manage Real Estate portfolios. Allows users to store and access all required documents related to Building, Apartments, Tenants also Billing information. It also allows us to create Leases for Tenants and manage properties accordingly.
              </p>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div id="project-card-3" className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://anewhealthcare-provider.production-insights.restoreskills.com/" target="\_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Restore</h3>
              <p>
              Restore is a healthcare project focused on therapy services, aimed at aiding individuals in their recovery from injuries or surgeries. Restore offer personalized rehabilitation programs delivered by expert therapists, accessible at hospitals, rehabilitation centers, or even at home. Through teletherapy solutions and a network of skilled professionals, Restore facilitates seamless healing journeys, promoting independence and improved quality of life.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>XGBoost</li>
                <li>Pandas</li>
                <li>Matplotlib</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div id="project-card-4" className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://emr.mind.clinic/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Mind Clinic</h3>
              <p> MindClinic offers accessible mental health support through personalized counseling and therapy sessions. Mind Clinic connects individuals with licensed professionals for tailored care, fostering emotional resilience and well-being.</p>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}