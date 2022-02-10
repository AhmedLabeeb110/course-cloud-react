import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Container,
  Form,
  FormControl,
  Button,
  FloatingLabel,
} from "react-bootstrap";
import LoginModal from "./LoginModal";
import { Routes, Route, NavLink } from "react-router-dom";

import logo from "../../Assets/logo.png";
import GoogleIcon from "../../Assets/GoogleIcon.png";
import fbIcon from "../../Assets/fbIcon.png"; 

const NavBar = () => {
  const [showLogin, setLogin] = useState(false);

  const handleClose = () => {
    setLogin(false);
  };

  return (
    <Navbar bg="light" expand="lg" className="TopNav-Bground">
      <Container fluid="xl">
        <Navbar.Brand>
          <NavLink to="/">
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
          <Container>
            <h4 className="text-center mb-3">Log In</h4>
            <Button className="w-100 mb-3" id='google-button'>
              {" "}
              <img src={GoogleIcon} alt="" /> Log In With Google
            </Button>
            <Button className="w-100" id='fb-button'>
              {" "}
              <img src={fbIcon} alt="" /> Log In With facebook
            </Button>
            <p className="text-center mt-2"> <span className="oneLine"></span> or <span className="oneLine"></span></p>
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3"
            >
              <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
              <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>
            <Button className="w-100" id='LoginButton'>Log In</Button>
            <div className="needAccount mt-2 text-center">
             <h6>Need an account?<span className="text-decoration-underline" onClick={() => setLogin(false)}> Sign up</span></h6>
              <br />
              <span className="text-decoration-underline">Forgot your password?</span>
              <br />
              <span>By logging in, you agree to our</span>
              <br />
              <span className="text-decoration-underline">Privacy Policy and Terms od Service.</span>
            </div>
            </Container>
          </LoginModal>
        )}
      </Container>
    </Navbar>
  );
};

export default NavBar;
