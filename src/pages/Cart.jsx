import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCartActions,
} from "../redux/actions/carsActions";

const Cart = () => {
  const { cart } = useSelector((state) => state.cars);
  const dispatch = useDispatch();

  const [cartTotal, setCartTotal] = useState(0)
  const [discount, setDiscount] = useState(0)

  const calculateCartTotal = ()=>{
    const total = cart?.reduce((acc,value)=> acc +(value.price * value.quantity), 0)
    setCartTotal(total)
    calculateDiscount()
  }

  const calculateDiscount = ()=>{
    const totalCars = cart?.reduce((acc,value)=> acc +value.quantity, 0)
    if(totalCars>=5){
      setDiscount(Math.floor(0.05*cartTotal))
    }else{
      setDiscount(0)
    }
  }

  useEffect(() => {
    calculateCartTotal()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart])

  return (
    <div className="page-container">
      <h3 className="cart-heading">Your Cart</h3>
      {cart.length === 0 ? (
        <div className="empty-cart">
          <h5>YOUR CART IS EMPTY</h5>
        </div>
      ) : (
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
                {cart?.map((c) => (
                  <tr>
                    <td>
                      <img src={c.images[0]} alt="" />
                    </td>
                    <td>
                      <h4 className="cart-item-name">{c.name}</h4>
                    </td>
                    <td>
                      <h4 className="cart-item-price">Ksh {c.price}</h4>
                    </td>
                    <td>
                      <div
                        className="btn-group"
                        role="group"
                        aria-label="Basic example"
                      >
                        <button
                          onClick={() => {
                            if (c.quantity === 1) {
                              dispatch(removeFromCartActions(c.id));
                            } else {
                              dispatch(decrementQuantity(c.id));
                            }
                          }}
                          type="button"
                          className="btn btn-sm btn-primary px-2"
                        >
                          -
                        </button>
                        <button type="button" className="btn btn-sm btn-light">
                          {c.quantity}
                        </button>
                        <button
                          onClick={() => dispatch(incrementQuantity(c.id))}
                          type="button"
                          className="btn btn-sm btn-primary px-2"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td>
                      <h4 className="cart-item-total">
                        {c.price * c.quantity}
                      </h4>
                    </td>
                    <td>
                      <i
                        onClick={() => dispatch(removeFromCartActions(c.id))}
                        className="fa fa-trash"
                      ></i>
                    </td>
                  </tr>
                ))}
              </table>
            </div>
          </div>
          <div className="cart-total-container">
            <h4 className="cart-total-item">
              <span>Cart Price</span> <span>Ksh {cartTotal}</span>
            </h4>
            <h4 className="cart-total-item">
              <span>Discount</span> <span>Ksh {discount}</span>
            </h4>
            <h4 className="cart-total-item">
              <span>Total Price</span> <span>Ksh 6535356</span>
            </h4>
          </div>
        </div>
      )}
      <div className="cart-btns">
        <Link className="continue-btn" to="/cars">
          Continue Shopping
        </Link>
        <Link className="checkout-btn">Checkout</Link>
      </div>
    </div>
  );
};

export default Cart;
