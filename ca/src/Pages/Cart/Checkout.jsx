import React from "react";
import { Link } from "react-router-dom";
import "./Checkout.css";

const CheckoutSuccessPage = () => {
  return (
    <div>
      <Link className="breadcrumb" to="/">
        Go back to shop
      </Link>
      <h1>Order Successful!</h1>
      <div className="order-text">
        <p>Your order has been successfully placed.</p>
        <p>Thank you for shopping with us!</p>
      </div>
    </div>
  );
};

export default CheckoutSuccessPage;
