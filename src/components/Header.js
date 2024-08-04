import React from "react";
import { Link } from "react-router-dom";
import banner from "../assets/images/general/restauranfood.jpg";

const Header = () => {
  return (
    <header className="header">
      <section>
        <div className="banner">
          <h2>Little Lemon</h2>
          <h3>Thessaloniki, Greece</h3>
          <p>Just a demo project using React & Redux</p>

          <Link to="/booking" aria-label="On Click">
            <button>Reserve Table</button>
          </Link>
        </div>

        <div className="banner-img">
          <img src={banner} alt="restaurant" />
        </div>
      </section>
    </header>
  );
};

export default Header;
