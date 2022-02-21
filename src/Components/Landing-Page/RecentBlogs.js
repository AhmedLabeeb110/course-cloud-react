import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Bookmark from "../../Assets/Bookmark.png";

const RecentBlogs = () => {
  const [blogs, setblogs] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setblogs(data));
  }, []);

  return (
    <div className="recent-blogs">
      <br />
      <br />
      <Container>
        <Row>
          {blogs.map((blog) => (
            <Col xs={12} sm={12} md={6} lg={4}>
              <Card className="card-design w-100 position-relative">
                <Card.Img variant="top" src={blog.img} />
                <Card.Body className="position-relative">
                  <Card.Title>{blog.title}</Card.Title>
                  <Card.Text className="text-muted">{blog.details}</Card.Text>
                  <Card.Text className="text-muted">{blog.date}</Card.Text>
                  <div className="d-flex justify-content-between">
                    <Button
                      className="ms-end border border-warning read-more"
                      variant="outline-light"
                    >
                      READ MORE
                    </Button>
                    <img src={Bookmark} alt="Bookmark" />
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

export default RecentBlogs;
