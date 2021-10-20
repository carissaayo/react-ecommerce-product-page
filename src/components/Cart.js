import React, { useState } from 'react';
import "./Cart.css";
const Cart = ({ setShowCart }) => {
  return (
    <main className="cart">
      <h3>Cart</h3>
      <hr></hr>
      <section>
        <div className="image-con">
          <img src="/images/image-product-2-thumbnail.jpg" alt="thumbnail" />
        </div>
        <p className="product-name">Fall Limited Edition Sneakers</p>
        <p className="product-price">
          $125 x 3 <span>$375.00</span>
        </p>
        <button className="delete-btn">
          <img src="/images/icon-delete.svg" alt="delete" />
        </button>
      </section>
      <button className="checkout-btn">Checkout</button>
    </main>
  );
};
export default Cart;
