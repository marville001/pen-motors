import React from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div className="page-container">
      <h3 className="cart-heading">Your Cart</h3>
      {/* <div className="empty-cart">
                <h5>YOUR CART IS EMPTY</h5>
            </div> */}
      <div className="cart-container">
        <div className="cart-list">
          <div className="cart-item">
            <table>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Remove</th>
              </tr>
              <tr>
                <td>
                  <img
                    src="https://www.extremetech.com/wp-content/uploads/2019/12/SONATA-hero-option1-764A5360-edit.jpg"
                    alt=""
                  />
                </td>
                <td>
                  <h4 className="cart-item-name">Toyota Landcruiser</h4>
                </td>
                <td>
                  <h4 className="cart-item-price">2373773</h4>
                </td>
                <td>
                  <h4 className="cart-item-price">4</h4>
                </td>
                <td>
                  <h4 className="cart-item-total">578785578</h4>
                </td>
                <td>
                  <i className="fa fa-trash"></i>
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div className="cart-total-container">
          <h4 className="cart-total-item">
            <span>Cart Price</span> <span>Ksh 6535356</span>
          </h4>
          <h4 className="cart-total-item">
            <span>Tax</span> <span>Ksh 6535356</span>
          </h4>
          <h4 className="cart-total-item">
            <span>Total Price</span> <span>Ksh 6535356</span>
          </h4>
        </div>
      </div>
    <div className="cart-btns">
        <Link className="continue-btn" to="/cars">Continue Shopping</Link>
        <Link className="checkout-btn">Checkout</Link>
    </div>
    </div>
  );
};

export default Cart;
