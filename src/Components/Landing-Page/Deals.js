import React, { useState, useEffect } from "react";
import { getRemainingTimeUntilMsTimestamp } from "../Landing-Page/CountdownTimerUtilities";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import Arrow from "../../Assets/Arrow.png";
import PlayButton from "../../Assets/PlayButton.png";
import StarTwo from "../../Assets/StarTwo.png";
import { Link } from "react-router-dom";


const defaultRemainingTime = {
  seconds: "00",
  minutes: "00",
  hours: "00",
  days: "00",
};

const Deals = ({ countdownTimestampMs }) => {
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime(countdownTimestampMs);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [countdownTimestampMs]);

  function updateRemainingTime(countdown) {
    setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
  }

  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch("cards.json")
      .then((res) => res.json())
      .then((card) => setCards(card));
  }, []);

  return (
    <div className="countdown-box p-5">
      <Container className="text-center">
        <h2>Deal of The Day</h2>
        <p>
          Vestibulum purus mus gravida ultrices consectetur morbi tomorbi
          faucibus ut eget nec tempor.{" "}
        </p>
        {/*d-flex justify-content-evenly text-center align-items-center border*/}
        <div className="d-flex justify-content-center">
          <div className="p-4">
            <div className="time">{remainingTime.days}</div>
            <div>days </div>
          </div>
          <div className="p-4">
            <div className="time">{remainingTime.hours}</div>
            <div>hours </div>
          </div>
          <div className="p-4">
            <div className="time">{remainingTime.minutes}</div>
            <div>minutes </div>
          </div>
          <div className="p-4">
            <div className="time">{remainingTime.seconds}</div>
            <div>seconds </div>
          </div>
        </div>
      </Container>
      <br />
      <br />
      <Container>
        <Row>
          {cards.map((course) => (
            <Col xs={12} sm={12} md={6} lg={4} key={course.id}>
            <Card className="card-design w-100 position-relative deal-cards">
              <Card.Img variant="top" src={course.img} />
              <a href={course.videolink} target="_blank">
                <div className="position-relative">
                  <img
                    src={PlayButton}
                    alt="PlayButton"
                    className="w-25 position-absolute bottom-50 start-50 mb-5 translate-middle"
                  />
                  {/*<Card.Text className="position-absolute">£{course.price}</Card.Text>*/}
                </div>
              </a>
              <Card.Body className="position-relative">
                <Card.Text className="text-secondary">
                  {course.category}
                </Card.Text>
                <img src={StarTwo} className="position-absolute end-0 bottom-100"/>
                <Card.Text className="card-price position-absolute end-0 bottom-100 me-3 mb-4">{course.price}</Card.Text>
                <Card.Title>{course.title}</Card.Title>
                <Card.Text className="text-muted">{course.details}</Card.Text>
                <div className="d-flex">
                <Card.Text className="text-muted">{course.instructor}</Card.Text>
                <Button className="ms-auto deal-cards-button" variant="outline-light">ADD TO CART</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Deals;
