import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../Assets/logoo.png";
import Cart from "../Assets/shoppingcart.png";
import NavLink from "./NavLink";
import { useCart } from "../../Pages/Cart/CartContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { cartState } = useCart();

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={Logo} alt="Logo" />
      </div>
      <ul className="nav-menu">
        <NavLink
          to="/"
          setActive={() => setMenu("shop")}
          active={menu === "shop"}
        >
          Shop
        </NavLink>
        <NavLink
          to="/product"
          setActive={() => setMenu("product")}
          active={menu === "product"}
        >
          Product
        </NavLink>
        <NavLink
          to="/contact"
          setActive={() => setMenu("contact")}
          active={menu === "contact"}
        >
          Contact
        </NavLink>
      </ul>
      <div className="nav-login-cart">
        <Link to="/cart">
          <img src={Cart} alt="Shopping cart" />
        </Link>
        <div className="nav-cart-count">{cartState.items.length}</div>
      </div>
    </div>
  );
};

export default Navbar;
