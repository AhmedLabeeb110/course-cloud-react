import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import GroupOne from "../../Assets/GroupOne.png";
import GroupTwo from "../../Assets/GroupTwo.png";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const BecomeInstructor = () => {
  return (
    <div className="group-images p-5">
      <Container>
        <Col>
          <Row>
            <img
              src={GroupTwo}
              alt="GroupTwo"
              className="col-lg-6 col-md-6 col-sm-12"
            />
            <div className="col-lg-6 col-md-6 col-sm-12 mt-5 ">
              <h3>
                {" "}
                Become an Instructor - Earn by Teaching Online at Course Cloud{" "}
              </h3>
              <br />
              <p>
                Watch thousands of lessons from the best as they share their
                stories, skills, shortcuts, failures, and successes.
              </p>
              <br />
              <Button className="p-3 instructor-button">
                BECOME A INSTRUCTOR
              </Button>
            </div>
          </Row>
          <br />
          <Row>
              <img src={GroupOne} alt="GroupOne" />
          </Row>
        </Col>
      </Container>
    </div>
  );
};

export default BecomeInstructor;
