// import { Navbar } from "./components/Navbar.js";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import style from "../src/style.css";

function App() {
  return (
    <div className="App">
      {/* <Navbar */}
      <Navbar bg="dark" variant="dark" className="nav-pills">
        <Container>
          <Navbar.Brand href="#home">IOMich</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home" className="bg-primary rounded-3 text-white">
              Home
            </Nav.Link>
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#pricing">Projects</Nav.Link>
          </Nav>
          <Nav className="col-85">
            <Nav.Link href="#home" className=" bg-secondary rounded-3">
              Contact
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="row col-12">
        <div className="mt-5 col-4">
          <p className="ms-3 text-center fs-3 fw-bold text-white">
            Hola, soy Michelle una desarrolladora
            <span className="bg-primary rounded-3 ms-2">Junior.</span>
          </p>
          <p className="ms-3 text-center fs-5">
            Soy diseñadora web, me enfoco en cumplir con las competencias
            necesarias para lograr ser una programadora full stack.
          </p>
          <center>
            <button className="bg-primary rounded-3 border-primary col-4 ms-4">
              Saber Más
            </button>
          </center>
        </div>
        <div className="col-6 mx-2 ms-auto mt-5">
          <img
            className="rounded-3"
            src="vite.jpg"
            alt="imagen"
            width={750}
            height={350}
          />
        </div>
      </div>
      <div className="mt-5">
        <p className="text-center text-white fw-lighter fw-bold fs-3">
          Habilidades
        </p>
        <p className="text-center fw-lighter fs-5 ">
          Dominio en HTML5, CSS, JAVASCRIPT, REACT, JAVA, NODEJS. Capacidad de
          liderazgo y trabajo en equipo, manejo de lenguajes para gestionar base
          de datos, conocimientos de diseño web.
        </p>
      </div>
      <div className="mt-5">
        <h2 className="fw-lighter bg-primary rounded-3 m-4">Educación</h2>
      </div>
      <nav
        id="navbar-example3"
        class="navbar navbar-light bg-light flex-column align-items-stretch p-3 rounded-4 m-4"
      >
       
        <nav class="nav nav-pills flex-column">
          <a class="nav-link" href="#item-1">
            Item 1
          </a>
          <nav class="nav nav-pills flex-column">
            <a class="nav-link ms-3 my-1" href="#item-1-1">
              Item 1-1
            </a>
            <a class="nav-link ms-3 my-1" href="#item-1-2">
              Item 1-2
            </a>
          </nav>
          <a class="nav-link" href="#item-2">
            Item 2
          </a>
          <a class="nav-link" href="#item-3">
            Item 3
          </a>
          <nav class="nav nav-pills flex-column">
            <a class="nav-link ms-3 my-1" href="#item-3-1">
              Item 3-1
            </a>
            <a class="nav-link ms-3 my-1" href="#item-3-2">
              Item 3-2
            </a>
          </nav>
        </nav>
      </nav>

      <div
        data-bs-spy="scroll"
        data-bs-target="#navbar-example3"
        data-bs-offset="0"
        tabindex="0"
      >
        <h4 id="item-1">Item 1</h4>
        <p>...</p>
        <h5 id="item-1-1">Item 1-1</h5>
        <p>...</p>
        <h5 id="item-1-2">Item 1-2</h5>
        <p>...</p>
        <h4 id="item-2">Item 2</h4>
        <p>...</p>
        <h4 id="item-3">Item 3</h4>
        <p>...</p>
        <h5 id="item-3-1">Item 3-1</h5>
        <p>...</p>
        <h5 id="item-3-2">Item 3-2</h5>
        <p>...</p>
      </div>
      <p className="text-white fs-5 text-center">
        Certificación en Diseño digital para video juegos y cine. Academy By
        Polygonus 2021-2022 Certificación Frontend HTML-CSS-JAVASCRIPT Academia
        Geek 2021-2022 Técnica Laboral Programación de software Universidad
        Pontificia Bolivariana 2022-2023
      </p>
    </div>
  );
}

export default App;
