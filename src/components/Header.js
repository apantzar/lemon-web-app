import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <section>
        <div className="banner">
          <h2>Little Lemon</h2>
          <h3>Thessaloniki, Greece</h3>
          <p>Just a demo project using React & Redux</p>

          <button
            className="btn btn-primary"
            onClick={() => {
              window.location.href = "/booking";
            }}
          >
            Reserve Table
          </button>
        </div>
      </section>
    </header>
  );
};

export default Header;
