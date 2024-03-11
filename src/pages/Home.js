import React from "react";
import Products from "../components/Products";

const Home = () => {
  return (
    <div>
      <div className="heading">Welcome to Redux Toolkit Store</div>
      <section>
        <h3>Products</h3>
        <Products />
      </section>
    </div>
  );
};

export default Home;
