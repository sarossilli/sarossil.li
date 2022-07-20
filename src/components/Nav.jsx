import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Navbar";
import Image from "next/image"

function Nav() {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="/logo.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        React Bootstrap
      </Navbar.Brand>
    </Container>
  </Navbar>
  );
}

export default Nav;
