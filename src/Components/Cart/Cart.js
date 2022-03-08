// import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

const Cart = () => {
  // const [courses, setCourses] = useState([]);
  // useEffect(() => {
  //   fetch("db.json")
  //     .then((res) => res.json())
  //     .then((data) => setCourses(data));
  // }, []);

  //{courses.map((course) => ())}
  return (
    <div className="cart-main">
      <Container className="p-5">
        <p>Home / MyCart</p>
        <h3>Cart</h3>
        <div className="cart-itens">
        </div>
      </Container>
    </div>
  );
};

export default Cart;
