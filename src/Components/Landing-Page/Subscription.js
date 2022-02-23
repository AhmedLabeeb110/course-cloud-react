import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Subscription = () => {
  return (
    <div className="subsciption-section">
    <br />
    <br />
    <br />
      <Container className="text-center">
        <h3>Get Your Subscription & Avail Courses</h3>
        <p>
          Try condensed lessons, topic playlists, or binge right through a
          class. MasterClass fits in any part of your day.
        </p>
        <Button variant="warning">GET STARTED</Button>
      </Container>
      <br />
      <br />
    </div>
  );
};

export default Subscription;
