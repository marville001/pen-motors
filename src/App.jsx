import React from "react";
import { Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import CarDetails from "./pages/CarDetails";
import AllCars from "./pages/AllCars";
import Cart from "./pages/Cart";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/cars" component={AllCars} />
        <Route path="/details" component={CarDetails} />
        <Route path="/cart" component={Cart} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
