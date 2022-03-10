import React, { useEffect, useState } from "react";
import { Container, ToastContainer, Toast } from "react-bootstrap";

import { connect } from "react-redux";
import { removeFromCart } from "../../redux/Shopping/shopping-actions";

const Cart = ({cart,removeFromCart}) => {
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

    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });

    setTotalItems(items);
    setTotalPrice(price);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  // const removeItem = (id)=> {
  //   const filterCart = cart.filter(item=> item.id!==id);
  // }

  return (
  <div className="cart-main">
      <Container className="p-5">
        <p>Home / MyCart</p>
        <h3>Cart</h3>
        {cart.map((item) => (
        <div className="cart-itens" key={item.id}>
          <div className="added-items border border-1 w-50">
            <img src={item.img} alt="" />
            <p>{item.title}</p>
            <p>£ {item.price}</p>
            <p>{item.level}</p>
            <input value={item.qty} style={{color: "white", background: "#191C21"}}/>
            </div>
            <p className="text-white" onClick={()=>removeFromCart(item.id)}>Remove</p>
        </div>))}
        <div className="sub-total">
          <h6>Total Items: {totalItems}</h6>
          <h6>Total Price: £ {totalPrice}</h6>
        </div>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  
  };
};
const mapDispatchToProps = (dispatch)=>{
  return{
  removeFromCart: (id)=> dispatch(removeFromCart(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);