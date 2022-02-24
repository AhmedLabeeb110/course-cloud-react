import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import logo from "../../Assets/logo.png";
import GooglePlay from "../../Assets/GooglePlay.png";
import ApplePlay from "../../Assets/ApplePlay.png";

const Footer = () => {
  return (
    <div className="text-center text-lg-start bg-light text-muted p-5 footerMain">
      <section className="footerMain">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <img src={logo} alt="logo" />
              </h6>
              <p>
                Quis consectetur orci proin massa, et. Fermentum fringilla
                pharetra arcu mauris dis tristique sit id mattis. Pretium
                quisque phasellus dictum duis dapibus hendrerit curabitur.
              </p>
              <p>89 Crown Street, LONDON, SW3 1AQ</p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <a href="#!" className="text-reset">
                  Affiliate program
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Careers
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  About
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Privacy
                </a>
              </p>
            </div>

            {/*<div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="#!" className="text-reset">
                  Pricing
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Settings
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Orders
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Help
                </a>
              </p>
              </div>*/}

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <img src={GooglePlay} alt="" />
                <img src={ApplePlay} alt="" />
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="text-center p-4">© 2022 Copyright: Course Cloud</div>
    </div>
  );
};

export default Footer;
