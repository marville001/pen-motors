import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DetailsCarousel from "../components/DetailsCarousel";
import { getCarActions } from "../redux/actions/carsActions";

const CarDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { car, loading, error } = useSelector((state) => state.cars);

  useEffect(() => {
    dispatch(getCarActions(id));
  }, []);
  if (error) {
    return <h4 style={{ textAlign: "center", color: "red" }}>{error}</h4>;
  }

  return (
    <div className="details page-container">
      {loading ? (
        <h4 style={{ textAlign: "center" }}>Loading...</h4>
      ) : (
        <>
          <div className="row my-5">
            <div className="col col-12 col-md-6">
              {car.images && <DetailsCarousel images={car?.images} />}
            </div>
            <div className="col col-12 col-md-6 ml-4">
              <h2 className="mt-3 text-success">{car?.name}</h2>
              <h3 className="mt-4">
                Year : <span className="text-success">{car.year}</span>
              </h3>
              <h5 className="mb-5 mt-3">
                Price Ksh <span className="text-success">{car.price}</span>
              </h5>
              <div className="mt-3 price-cart"></div>
              <button className="btn btn-outline-primary btn-sm">
                Add <i className="fa fa-cart-plus"></i>
              </button>
              {/* <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-sm btn-primary px-2">-</button>
                        <button type="button" className="btn btn-sm btn-light">3</button>
                        <button type="button" className="btn btn-sm btn-primary px-2">+</button>
                    </div> */}
              <div className="details-items">
                <div className="details-item">
                  <h4>Make</h4>
                  <h5 className="text-success">{car.make}</h5>
                </div>
                <div className="details-item">
                  <h4>Model</h4>
                  <h5 className="text-success">{car.model}</h5>
                </div>
                <div className="details-item">
                  <h4>Mileage</h4>
                  <h5 className="text-success">{car.mileage}</h5>
                </div>
                <div className="details-item">
                  <h4>Fuel</h4>
                  <h5 className="text-success">{car.fuel}</h5>
                </div>
                <div className="details-item">
                  <h4>Transmission</h4>
                  <h5 className="text-success">{car.transmission}</h5>
                </div>
                <div className="details-item">
                  <h4>Engine size</h4>
                  <h5 className="text-success">{car.engine_size}</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="description my-2">
            <h4>Description</h4>
            <p>{car.description}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default CarDetails;
