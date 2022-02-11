import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import GroupOne from "../../Assets/GroupOne.png";
import GroupTwo from "../../Assets/GroupTwo.png";

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
              <h3> Become an Instructor - Earn by Teaching Online at Course Cloud </h3>
              <br />
              <p>Watch thousands of lessons from the best as they share their stories, skills, shortcuts, failures, and successes.</p>
            </div>
          </Row>
          <Row>
            <img src={GroupOne} alt="GroupOne" className="col-sm-12" />
          </Row>
        </Col>
      </Container>
    </div>
  );
};

export default BecomeInstructor;
