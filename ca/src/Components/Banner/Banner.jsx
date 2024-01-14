import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";
import Headset from "../Assets/headset.png";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-left">
        <h2>New arrivals</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ratione
          modi similique impedit hic soluta laboriosam, animi officia cumque
          dolorem, ut unde neque alias!
        </p>
        <Link to="/product" className="banner-btn">
          View more
        </Link>
      </div>
      <div className="banner-right">
        <img src={Headset} alt="Headset" />
      </div>
    </div>
  );
};

export default Banner;
