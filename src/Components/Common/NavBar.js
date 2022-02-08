import React from "react";
import {
  Navbar,
  Nav,
  Container,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import logo from "../../Assets/logo.png";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg" className="TopNav-Bground">
      <Container fluid="xl">
        <Navbar.Brand href="#">
          {" "}
          <img src={logo} alt="Logo" />{" "}
        </Navbar.Brand>
        <Navbar.Toggle />

        <Navbar.Collapse>
        <br />
          <Form>
            <FormControl
              type="search"
              placeholder="Search..."
              aria-label="Search"
              className="input-color"
              style={{ color: "white" }}
            />
          </Form>
          <Nav className="ms-auto my-2 my-lg-0 p-2" navbarScroll>
            <Nav.Link href="#action1" style={{ color: "white" }}>
              HOME
            </Nav.Link>
            <Nav.Link href="#action2" style={{ color: "white" }}>
              FREE QUIZ
            </Nav.Link>
            <Nav.Link href="#action2" style={{ color: "white" }}>
              SUPPORT
            </Nav.Link>
            <Button variant="warning">LOG IN</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
