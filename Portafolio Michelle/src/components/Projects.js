import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/notas.png";
import projImg2 from "../assets/img/peliculas.png";
import projImg3 from "../assets/img/calculadora.png";
import projImg4 from "../assets/img/project-img4.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Web Notes",
      description: "sitio web para crear notas",
      imgUrl: projImg1,
    },
    {
      title: "web movies",
      description: "Diseño de página web para películas",
      imgUrl: projImg2,
    },

    {
      title: "Calculadora de masa corporal",
      description: "Diseño web para medir la masa corporal de las personas",
      imgUrl: projImg3,
    },
    {
      title: "Web artista",
      description: "Diseño de sito web para diseño rtistico",
      imgUrl: projImg4,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={ 
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Mi experiencia con Proyectos </h2>
                  <p>
                    A lo largo de este tiempo vengo trabajando con proyectos
                    pequeños como los que se pueden llamar CRUD o Backends con
                    sus principales funciones básicas, aplicativos moviles con
                    android studio y Expo Go.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      
                      
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      
                      
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
