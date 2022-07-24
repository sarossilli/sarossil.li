import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Navbar";
import Image from "next/image";
import { MYNAME } from "./utils/constants";
import logo from "./../../public/img/SarosLogo.png";
import Nav from "react-bootstrap/Nav";

function NavigationBar(props) {
  const pages = props.pages;
  return (
    <div className="nav">
      <Navbar className="align-items-center">
        <Container>
          <Nav className="me-auto">
            {pages.map((x, index) => (
              <Nav.Link href={"#"+x} key={index}> {x} </Nav.Link>
            ))}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
