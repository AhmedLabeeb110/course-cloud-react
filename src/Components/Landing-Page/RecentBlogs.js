import React, {useState, useEffect} from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const RecentBlogs = () => {
  const [blogs, setblogs] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setblogs(data));
  }, []);

  return (
    <Container className="">
      <Row>
        {blogs.map((blog) => (
          <Col xs={12} sm={12} md={6} lg={4}>
            <Card className="card-design-two w-100" key={blog.id}>
              <Card.Img variant="top" src={blog.img} />
              <Card.Body>
                {/*                
                <Card.Text className="text-secondary">
                  {card.category}
                </Card.Text>
              <Card.Text>£{card.price}</Card.Text>
            */}
                <Card.Title>{blog.title}</Card.Title>
                <Card.Text className="text-muted">{blog.details}</Card.Text>
                <Button>ADD TO CART</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default RecentBlogs;
