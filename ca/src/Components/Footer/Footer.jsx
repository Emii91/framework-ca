import React from "react";
import "./Footer.css";
import Logo from "../Assets/logoo.png";
import NavLink from "../Navbar/NavLink";

const Footer = () => {
  const handleSetActive = () => {};

  return (
    <div className="footer">
      <div className="footer-logo">
        <img className="footer-img" src={Logo} alt="logo" />
      </div>
      <ul className="footer-links">
        <NavLink to="/" setActive={handleSetActive} active={false}>
          Shop
        </NavLink>
        <NavLink to="/product" setActive={handleSetActive} active={false}>
          Product
        </NavLink>
        <NavLink to="/contact" setActive={handleSetActive} active={false}>
          Contact
        </NavLink>
      </ul>
      <p>Copyright 2024</p>
    </div>
  );
};

export default Footer;
