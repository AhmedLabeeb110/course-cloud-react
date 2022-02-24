import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import BannerFinal from "../Common/../../Assets/BannerFinal.png";
import AwardingLogos from "../Common/../../Assets/AwardingLogos.png";

const HeroSection = () => {
  return (
    <div className="Hero-Banner">
      <br />
      <div className="hero-image">
        <Container className="d-flex flex-row-reverse py-5">
          <Col xs={0} sm={6} md={7} lg={5}>
            <Row>
              <img src={BannerFinal} alt="Banner IMG" />
            </Row>
          </Col>
          <Col xs={12} sm={7} md={5} lg={7} className="banner-info">
            <br />
            <br />
            <h3>A LEARNING CURVE</h3>
            <h1>IS ESSENTIAL TO GROWTH</h1>
            <p>All of CourseCloud.Free for 3 days.</p>
            <Button variant="warning" className="banner-button">
              GET STARTED
            </Button>{" "}
            <p>
              <br />
              $15/month (billed annually)
              <br />
              <span className="text-decoration-underline"> Offer terms apply </span>
            </p>
            <br />
            <Row>
              <img src={AwardingLogos} alt="AwardingLogos" className="w-50" />
            </Row>
          </Col>
        </Container>
      </div>
      <br />
    </div>
  );
};

export default HeroSection;
