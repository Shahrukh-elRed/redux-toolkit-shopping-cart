import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const items = useSelector((state) => state.cart);
  const currentRoute = useLocation();
  
  return (
    <div className="navBarContainer">
      <span className="logo">REDUX TOOLKIT STORE</span>
      <div>
        <Link className={currentRoute.pathname === "/" ? "activeNavLink" : "navLink"} to="/">
          Home
        </Link>
        <Link className={currentRoute.pathname === "/cart" ? "activeNavLink" : "navLink"} to="/cart">
          Cart
        </Link>
        <span className="cartCount">Cart items : {items.length}</span>
      </div>
    </div>
  );
};

export default Navbar;
