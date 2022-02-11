import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Container,
  Form,
  FormControl,
  Button,
  FloatingLabel,
  FormCheck,
} from "react-bootstrap";
import LoginModal from "./LoginModal";
import { Routes, Route, NavLink } from "react-router-dom";

import logo from "../../Assets/logo.png";
import GoogleIcon from "../../Assets/GoogleIcon.png";
import fbIcon from "../../Assets/fbIcon.png";

const NavBar = () => {
  const [showLogin, setLogin] = useState(false);
  const [changeLogin, setchangeLogin] = useState(false);

  const handleClose = () => {
    setLogin(false);
  };
  const handleOpen = () => {
    setLogin(true);
  };

  const handleClose3 = () => {
    setchangeLogin(false);
  };

  const handleCloseTwo = () => {
    setchangeLogin(false);
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
            <Button variant="warning" onClick={handleOpen}>
              LOG IN
            </Button>
          </Nav>
        </Navbar.Collapse>

        {showLogin && (
          <LoginModal handleClose={handleClose}>
            <Container>
              <h4 className="text-center mb-3">Log In</h4>
              <Button className="w-100 mb-3" id="google-button">
                {" "}
                <img src={GoogleIcon} alt="" /> Log In With Google
              </Button>
              <Button className="w-100" id="fb-button">
                {" "}
                <img src={fbIcon} alt="" /> Log In With facebook
              </Button>
              <p className="text-center mt-2">
                {" "}
                <span className="oneLine"></span> or{" "}
                <span className="oneLine"></span>
              </p>
              <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="mb-3"
              >
                <Form.Control type="email" placeholder="name@example.com" />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingPassword"
                label="Password"
                className="mb-3"
              >
                <Form.Control type="password" placeholder="Password" />
              </FloatingLabel>
              <Button className="w-100" id="LoginButton">
                Log In
              </Button>
              <div className="needAccount mt-2 text-center">
                <h6>
                  Need an account?
                  <span
                    className="text-decoration-underline"
                    onClick={setchangeLogin}
                  >
                    {" "}
                    Sign up
                  </span>
                </h6>
                <br />
                <span className="text-decoration-underline">
                  Forgot your password?
                </span>
                <br />
                <span>By logging in, you agree to our</span>
                <br />
                <span className="text-decoration-underline">
                  Privacy Policy and Terms od Service.
                </span>
              </div>
            </Container>
            {changeLogin && (
              <LoginModal handleClose={(handleClose, handleCloseTwo)}>
                <Container>
                  <h4 className="text-center mb-3">Create Account</h4>
                  <Button className="w-100 mb-3" id="google-button">
                    {" "}
                    <img src={GoogleIcon} alt="" /> Log In With Google
                  </Button>
                  <Button className="w-100" id="fb-button">
                    {" "}
                    <img src={fbIcon} alt="" /> Log In With facebook
                  </Button>
                  <p className="text-center mt-2">
                    {" "}
                    <span className="oneLine"></span> or{" "}
                    <span className="oneLine"></span>
                  </p>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className="mb-3"
                  >
                    <Form.Control type="email" placeholder="name@example.com" />
                  </FloatingLabel>
                  <FloatingLabel
                    controlId="floatingPassword"
                    label="Password"
                    className="mb-3"
                  >
                    <Form.Control type="password" placeholder="Password" />
                  </FloatingLabel>
                  <div className="checkSubscribe mb-2 d-flex gap-1">
                    <Form.Check aria-label="option 1" />
                    <span className="checkText">
                      Keep me up to date on class events and new releases
                    </span>
                  </div>
                  <Button className="w-100" id="LoginButton">
                    Create Account
                  </Button>
                  <div className="needAccount mt-2 text-center">
                    <h6>
                      Already have an account?
                      <span
                        className="text-decoration-underline"
                        onClick={handleClose3}
                      >
                        {" "}
                        Log in
                      </span>
                    </h6>
                    <br />
                    <br />
                    <span>
                      By signing up or creating an account, you agree to our
                    </span>
                    <br />
                    <span className="text-decoration-underline">
                      Privacy Policy and Terms od Service.
                    </span>
                  </div>
                </Container>
              </LoginModal>
            )}
          </LoginModal>
        )}
      </Container>
    </Navbar>
  );
};

export default NavBar;
