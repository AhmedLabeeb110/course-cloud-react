import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

import { connect } from "react-redux";
import { removeFromCart, adjustItemQty } from "../../redux/Shopping/shopping-actions";

const Cart = ({cart, removeFromCart}) => {
  console.log(cart)
  // const [courses, setCourses] = useState([]);
  // useEffect(() => {
  //   fetch("db.json")
  //     .then((res) => res.json())
  //     .then((data) => setCourses(data));
  // }, []);

  //{courses.map((course) => ())}

  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;

    cart?.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });

    setTotalItems(items);
    setTotalPrice(price);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  return (
  <div className="cart-main">
      <Container className="p-5">
      <p>Home / MyCart</p>
      <h3>Cart</h3>
      {cart?.map((item) => (
      <div className="cart-itens" key={item.id}>
        <div className="added-items border border-1 w-50">
          <img src="" alt="" />
          <p>{item.title}</p>
          <input value={item.qty} />
          <p onClick={() => removeFromCart(item.id)}>remove</p>
        </div>
      </div>))}

      <div className="sub-total">
        <h6>Total: ({totalItems})</h6>
        <h6>£: ({totalPrice})</h6>
      </div>
      </Container>
    </div>
  );
};

const mapStateToProps = (state, dispatch) => {
  return {
    cart: state?.shop?.cart,
    adjustQty: (id, value) => dispatch(adjustItemQty(id, value)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};

export default connect(null, mapStateToProps)(Cart);