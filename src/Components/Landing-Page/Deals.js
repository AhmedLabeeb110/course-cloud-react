import React, { useState, useEffect } from "react";
import { getRemainingTimeUntilMsTimestamp } from "../Landing-Page/CountdownTimerUtilities";
import { Container, Card, Button, Row, Col } from "react-bootstrap";

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

  console.log(cards);

  return (
    <div className="countdown-box p-5">
      <Container className="text-center">
        <h2>Deal of The Day</h2>
        <p>
          Vestibulum purus mus gravida ultrices consectetur morbi tomorbi
          faucibus ut eget nec tempor.{" "}
        </p>
        {/*d-flex justify-content-evenly text-center align-items-center border*/}
        <span>{remainingTime.days}</span>
        <span>days </span>
        <span className="two-numbers">{remainingTime.hours}</span>
        <span>hours </span>
        <span className="two-numbers">{remainingTime.minutes}</span>
        <span>minutes </span>
        <span className="two-numbers">{remainingTime.seconds}</span>
        <span>seconds </span>
      </Container>
      <br />
      <br />
      <Container>
        <Row>
          {cards.map((card) => (
            <Col xs={12} sm={12} md={6} lg={4}>
              <Card className="card-design-two w-100" key={card.id}>
                <Card.Img variant="top" src={card.img} />
                <Card.Body>
                  <Card.Text className="text-secondary">
                    {card.category}
                  </Card.Text>
                  <Card.Text>£{card.price}</Card.Text>
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Text className="text-muted">{card.details}</Card.Text>
                  <Button>ADD TO CART</Button>
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
