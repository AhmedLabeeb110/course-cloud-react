import React, { useEffect, useState } from "react";
import { Nav, Container, Card, Button, Row, Col } from "react-bootstrap";
import Arrow from "../../Assets/Arrow.png";
import PlayButton from "../../Assets/PlayButton.png";
import StarOne from "../../Assets/StarOne.png";
import { Link } from "react-router-dom";

const ExploreCourses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("db.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div className="explore-courses p-5">
      <Container>
        <h3 className="text-center">Explore Other Courses</h3>
        <br />
        <br />
        <Nav className="justify-content-start">
          <Nav.Item>
            <Nav.Link href="/home" className="explore-nav-items">
              Most Popular
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="explore-nav-items">
            <Nav.Link eventKey="link-1" className="explore-nav-items">
              Culinary Arts
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="explore-nav-items">
            <Nav.Link eventKey="link-2" className="explore-nav-items">
              Film & TV
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="explore-nav-items">
            <Nav.Link eventKey="link-2" className="explore-nav-items">
              Lifestyle
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="explore-nav-items">
            <Nav.Link eventKey="link-2" className="explore-nav-items">
              Sports & Games
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="ms-auto explore-nav-items ">
            <Nav.Link eventKey="link-2" className="explore-nav-items">
              See All Courses <img src={Arrow} alt="Arrow" />
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <br />
        <br />
        <br />

        <Row>
          {courses.map((course) => (
            <Col xs={12} sm={12} md={6} lg={3} key={course.id}>
              <Card className="card-design w-100 position-relative">
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
                  <img src={StarOne} className="position-absolute end-0 bottom-100"/>
                  <Card.Text className="card-price position-absolute end-0 bottom-100 me-2">£{course.price}</Card.Text>
                  <Card.Title>{course.title}</Card.Title>
                  <Card.Text className="text-muted">{course.details}</Card.Text>
                  <div className="d-flex">
                  <Card.Text className="text-muted">{course.instructor}</Card.Text>
                  <Button className="ms-auto" variant="outline-light">ADD TO CART</Button>
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

export default ExploreCourses;
