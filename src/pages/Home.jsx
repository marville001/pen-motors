import React from "react";
import { useSelector } from "react-redux";
import Carlists from "../components/Carlists";
import Carousel from "../components/Carousel";

const Home = () => {
  const { loading, error } = useSelector((state) => state.cars);
  return (
    <div>
      <Carousel />
      {error && <h4 style={{textAlign: "center", color:"red"}}>{error}</h4>}
      {loading ? <h4 style={{textAlign: "center"}}>Loading....</h4> : <Carlists title="Top Cars" />}
    </div>
  );
};

export default Home;
