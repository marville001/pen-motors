import React from "react";
import Carlists from "../components/Carlists";
import Carousel from "../components/Carousel";

const Home = () => {
  return (
    <div>
      <Carousel />
      <Carlists title="Top Cars" />
    </div>
  );
};

export default Home;
