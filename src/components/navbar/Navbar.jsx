import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import Banner from '../banner/Banner'

const Navbar = () => {
  return (
    <>
      <div className="navbar-container">
      <nav className="navbar">
        <h1 className="navbar-logo">
          <NavLink to="/">Shop.</NavLink>
        </h1>
        <h2 className="seeCarrito">
          <NavLink to="/cart">🛒</NavLink>
        </h2>
      </nav>
    </div>
    <Banner />
    </>
  );
};

export default Navbar;
