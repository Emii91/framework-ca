import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <div className="product-card">
      <img className="card-img" src={item.imageUrl} alt={item.name} />
      <div className="card-content">
        <h3>{item.title}</h3>
        <p>Price: ${item.price}</p>
        <Link to={`/product/${item.id}`}>
          <button className="view-btn">View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default Item;
