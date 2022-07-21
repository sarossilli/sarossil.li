import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Navbar";
import Image from "next/image";
import {MYNAME} from "./utils/constants";
import logo from "./../../public/img/SarosLogo.png"
import Nav from "react-bootstrap/Nav";

function NavigationBar() {
  return (
    <div className="shadow bg-white rounded">
      <Navbar bg="dark" variant="dark" expand="lg" className="align-items-center">
      <Container>
        <Navbar.Brand href="#home">
          <Image
            alt=""
            src={logo}
            width="40"
            height="40"
            className="d-inline-block"
          />
          {' '}
          <h2 className="d-inline-flex align-top pl-2">{MYNAME}</h2>
        </Navbar.Brand>
      </Container>
      <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
        </Nav>
    </Navbar>
  </div>
  );
}

export default NavigationBar;
