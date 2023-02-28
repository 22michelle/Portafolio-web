import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            {/* Este espacio para que me consuma espacio y no se me centre  el copyright */}
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
              {/* github */}
              <a
                className=" border-primary"
                href="https://github.com/22michelle"
              >
                <img src={navIcon2} alt="Icon" />
              </a>
            </div>

            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
