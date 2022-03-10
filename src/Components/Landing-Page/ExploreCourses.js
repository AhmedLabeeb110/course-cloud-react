import React, { useEffect, useState } from "react";
import { Nav, Container, Card, Button, Row, Col } from "react-bootstrap";
import Arrow from "../../Assets/Arrow.png";
import PlayButton from "../../Assets/PlayButton.png";
import StarOne from "../../Assets/StarOne.png";
import { Link } from "react-router-dom";

import {connect} from 'react-redux';
import {
  loadCurrentItem,
  addToCart,
} from '../../redux/Shopping/shopping-actions.js' 

const ExploreCourses = ({productData, addToCart}) => {
  // const [courses, setCourses] = useState([]);
  // useEffect(() => {
  //   fetch("db.json")
  //     .then((res) => res.json())
  //     .then((data) => setCourses(data));
  // }, []);

  return (
    <Col xs={12} sm={12} md={6} lg={3} key={productData.id}>
    <Card className="card-design w-100 position-relative">
      <Card.Img variant="top" src={productData.img} />
      <a href={productData.videolink} target="_blank">
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
          {productData.category}
        </Card.Text>
        <img src={StarOne} className="position-absolute end-0 bottom-100"/>
        <Card.Text className="card-price position-absolute end-0 bottom-100 me-2">£{productData.price}</Card.Text>
        <Card.Title>{productData.title}</Card.Title>
        <Card.Text className="text-muted">{productData.details}</Card.Text>
        <div className="d-flex">
        <Card.Text className="text-muted">{productData.instructor}</Card.Text>
        <Button className="ms-auto" variant="outline-light" onClick={() => addToCart(productData.id)}>ADD TO CART</Button>
        </div>
      </Card.Body>
    </Card>
  </Col>


  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(ExploreCourses);