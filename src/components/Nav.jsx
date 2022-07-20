import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Navbar";
import Image from "next/image"

function Nav() {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home">
          <Image
            alt=""
            src="/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          React Bootstrap
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Nav;
