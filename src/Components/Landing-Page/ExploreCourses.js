import React, { useEffect, useState } from "react";
import { Nav, Container, Card, Button, Row, Col } from "react-bootstrap";
import Arrow from "../../Assets/Arrow.png";

const ExploreCourses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("db.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  console.log(courses);

  return (
    <div className="explore-courses p-5">
      <Container>
        <h3 className="text-center">Explore Other Courses</h3>
        <br />
        <br />
        <Nav className="justify-content-start">
          <Nav.Item className="explore-nav-items">
            <Nav.Link href="/home" style={{ color: "white" }}>
              Most Popular
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="explore-nav-items">
            <Nav.Link eventKey="link-1" style={{ color: "white" }}>
              Culinary Arts
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="explore-nav-items">
            <Nav.Link eventKey="link-2" style={{ color: "white" }}>
              Film & TV
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="explore-nav-items">
            <Nav.Link eventKey="link-2" style={{ color: "white" }}>
              Lifestyle
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="explore-nav-items">
            <Nav.Link eventKey="link-2" style={{ color: "white" }}>
              Sports & Games
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="ms-auto explore-nav-items  ">
            <Nav.Link eventKey="link-2" style={{ color: "white" }}>
              See All Courses <img src={Arrow} alt="Arrow" />
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <br />
        <br />
        <br />

        <Row>
          <Col  >
            {courses.map((course) => (
              <Card className="card-design" key={course.id}>
                <Card.Img variant="top" src={course.img} />
                <Card.Body>
                  <Card.Text>{course.category}</Card.Text>
                  <Card.Text>£{course.price}</Card.Text>
                  <Card.Title>{course.title}</Card.Title>
                  <Card.Text>{course.title}</Card.Text>
                  <Button variant="primary">ADD TO CART</Button>
                  <Card.Text>{course.instructor}</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ExploreCourses;
