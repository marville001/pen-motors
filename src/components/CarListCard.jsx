import React from "react";
import { Link } from "react-router-dom";
import { addToCartActions, decrementQuantity, incrementQuantity, removeFromCartActions } from "../redux/actions/carsActions";
import { useDispatch, useSelector } from "react-redux";

const CarListCard = ({
  car: { id, mileage, make, model, images, price, year, name },
}) => {
  const { cart } = useSelector((state) => state.cars);
  const dispatch = useDispatch();

  const inCart = () => {
    const item = cart.find((c) => c.id === id);
    if (item?.id) {
      return true;
    } else {
      return false;
    }
  };
  const fetchQuantity = () => {
    if (cart.length === 0) {
      return 0;
    } else {
      return cart?.find((c) => c.id === id).quantity;
    }
  };
  return (
    <div key={id} className="list-card">
      <Link to={`/details/${id}`}>
        <img src={images.length >= 1 && images[0]} alt="" />
      </Link>
      <h4>
        {name}
        <span style={{ marginLeft: "20px" }}>{year}</span>
      </h4>
      <h6 className="my-2">
        Mileage (Km) : <span className="text-primary">{mileage}</span>
      </h6>
      <h6>
        {make} - {model}
      </h6>
      <div className="price-cart">
        <h5 className="text-success">Ksh {price}</h5>
        {inCart() ? (
          <div className="btn-group" role="group" aria-label="Basic example">
            <button 
            onClick={() => {
              if (fetchQuantity() <= 1) {
                dispatch(removeFromCartActions(id));
              } else {
                dispatch(decrementQuantity(id));
              }
            }}
            type="button" className="btn btn-sm btn-primary px-2">
              -
            </button>
            <button type="button" className="btn btn-sm btn-light">
              {fetchQuantity()}
            </button>
            <button onClick={() => dispatch(incrementQuantity(id))} type="button" className="btn btn-sm btn-primary px-2">
              +
            </button>
          </div>
        ) : (
          <button
            onClick={() => dispatch(addToCartActions(id))}
            className="btn btn-outline-primary btn-sm"
          >
            Add <i className="fa fa-cart-plus"></i>
          </button>
        )}
      </div>
    </div>
  );
};

export default CarListCard;
