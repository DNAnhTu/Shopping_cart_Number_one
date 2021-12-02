import React, { useEffect, useState } from "react";
import rmv from "../assets/images/remove.svg";
import inc from "../assets/images/increase.png";
import decr from "../assets/images/decrease.png";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../components/Cart.css";
import {
  removeCart,
  itemIncrease,
  itemDecrease,
} from "../redux/actions/actionProducts";
import Modal from "./Modal";


const Cart = ({ cart, removeCart, itemIncrease, itemDecrease, }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const[openModal, setOpenModal] = useState(false)

  useEffect(() => {
    let items = 0;
    let price = 0;
    cart.forEach((item) => {
      items += item.quantity;
      price += item.quantity * item.price;
    });
    setTotalPrice(price.toLocaleString());
    setTotalItems(items.toLocaleString());
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  return (
    <div className="cart-container">
      {cart.length === 0 ? (
        <h3>Giỏ hàng trống</h3>
      ) : (
        <>
          {" "}
          <div className="cart-list-head">
            <strong className="head-product">Sản phẩm</strong>
            <strong className="head-price">Giá</strong>
            <strong className="head-total">Tổng </strong>
          </div>
          {cart.map((item) => (
            <>
              <div className="cart-list" key={item.id}>
                <div className="cart-info">
                  <div className="item-img">
                    <img src={item.img} className="img-cart" alt="img" />
                  </div>
                  <div className="product-info">
                    <div className="product_inf_detail">
                      <strong>{item.name}</strong>
                    </div>
                    <div className="price">
                      <strong className="price-child">{item.price.toLocaleString()} USD</strong>
                    </div>
                    <div className="price total">
                      <strong>{item.price * item.quantity} USD</strong>
                    </div>
                    <div className="quantity">
                      <div className="quantity-inside">
                        <a onClick={() => itemIncrease(item.id)}>
                          <img src={inc} alt="increase" className="increase" />
                        </a>
                        <span>{item.quantity}</span>
                        {item.quantity === 1 ? (
                          <a onClick={() => removeCart(item.id)}>
                            <img
                              src={decr}
                              alt="decrease"
                              className="decrease"
                            />
                          </a>
                        ) : (
                          <a onClick={() => itemDecrease(item.id)}>
                            <img
                              src={decr}
                              alt="decrease"
                              className="decrease"
                            />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="hover-remove">
                    <div className="delete-product">
                      <a onClick={() => removeCart(item.id)}>
                        {" "}
                        <img src={rmv} alt="icon" className="rmv-icon" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </>
      )}

      {cart.length === 0 ? null : (
        <div className="total-cart">
          <span className="total-text">Tổng tiền:</span>
          <span>{totalPrice.toLocaleString()} USD</span>
          <div className="check-div-btn">
            <Link to="/">
              <button className="contine-btn">Quay lại sản phẩm</button>
            </Link>
            <div className="PopUp">
            <button className="check-btn" onClick={() =>{setOpenModal(true);}}>
              Thanh toán</button>
              {openModal && <Modal closeModal={setOpenModal}/>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateProps = (state) => {
  return {
    cart: state.productsAll.cart,
  };
};

export default connect(mapStateProps, {
  removeCart,
  itemIncrease,
  itemDecrease,
})(Cart);
