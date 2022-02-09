import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Container,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import LoginModal from "./LoginModal";
import { Routes, Route, NavLink } from "react-router-dom";


import logo from "../../Assets/logo.png";

const NavBar = () => {
  const [showLogin, setLogin] = useState(false);

  const handleClose = () => {
    setLogin(false);
  };

  return (
    <Navbar bg="light" expand="lg" className="TopNav-Bground">
      <Container fluid="xl">
        <Navbar.Brand>
          <NavLink to='/'>
            <img src={logo} alt="Logo" />
            </NavLink>
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
            <Button variant="warning" onClick={setLogin}>
              LOG IN
            </Button>
          </Nav>
        </Navbar.Collapse>

        {showLogin && (
          <LoginModal handleClose={handleClose}>
            <h2>10% Off Coupon Code!!</h2>
            <p>10% Off Coupon Code!!</p>
          </LoginModal>
        )}
      </Container>
    </Navbar>
  );
};

export default NavBar;
