import React from "react";
import {  NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header bg-light">
      <nav className="page-container navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            Pen Motors
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" activeClassName="active" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink
                  to="/cars"
                  activeClassName="active"
                  className="nav-link"
                >
                  Cars
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/cart"
                  activeClassName="active"
                  className="nav-link position-relative"
                >
                  Cart <i className="fa fa-shopping-cart"></i>
                </NavLink>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
