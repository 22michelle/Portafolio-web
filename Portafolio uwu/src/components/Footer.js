import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              {/* linkedin */}
              <a
                className=" border-primary"
                href="https://www.linkedin.com/in/michelle-mej%C3%ADa-parra-072148242/"
              >
                <img src={navIcon1} alt="Icon" />
              </a>
              {/* facebook */}
              <a
                className=" border-primary"
                href="https://www.facebook.com/profile.php?id=100009772033191"
              >
                <img src={navIcon2} alt="Icon" />
              </a>
              {/* Instagram */}
              <a
                className=" border-primary"
                href="https://www.instagram.com/liarista020/"
              >
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>

            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
