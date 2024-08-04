import React from "react";
import small_logo from "../assets/images/general/small_logo.png";

const Footer = () => {
  return (
    <footer>
      <section>
        <div className="company-info">
          <img src={small_logo} alt="logo" />
          <p>
            Little Lemon <br />
            Thessaloniki, Greece
          </p>
        </div>
        <div>
          <h3>Important Links</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/menu">Menu</a>
            </li>
            <li>
              <a href="/reservations">Reservations</a>
            </li>
            <li>
              <a href="/orders">Orders online</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
          </ul>
        </div>

        <div>
          <h3>Contact</h3>
          <ul>
            <li>Phone: +30 2310 123456</li>
            <li>Email: sample@mail.com </li>
            <li>Address: address sample</li>
          </ul>
        </div>

        <div>
          <h3>Social Media Links</h3>
          <ul>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Instagram</a>{" "}
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
