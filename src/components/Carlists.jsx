import React from "react";
import { useSelector } from "react-redux";

import CarListCard from "./CarListCard";

const Carlists = ({ title }) => {
  const { cars } = useSelector((state) => state.cars);

  return (
    <div className="page-container">
      <h2 className="products-title">{title}</h2>
      <div className="list-container">
        {cars?.map((car) => (
          <CarListCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default Carlists;
