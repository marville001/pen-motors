import React from "react";
import { Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import CarDetails from "./pages/CarDetails";
import AllCars from "./pages/AllCars";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import getCarsActions from "./redux/actions/carsActions";

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCarsActions());
  }, [dispatch])
  return (
    <>
      <Header />
      <div className="main-container">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/cars" component={AllCars} />
        <Route path="/details/:id" component={CarDetails} />
        <Route path="/cart" component={Cart} />
      </Switch>
      </div>
      <Footer />
    </>
  );
};

export default App;
