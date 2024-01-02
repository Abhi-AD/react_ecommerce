import React from "react";
import './Offers.css'
import exclusive_images from '../Assets/exclusive_image.png'

function Offer() {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>We offer:</h1>
        <h1>Offer For You</h1>
        <p>Only On Best Sellers Products</p>
        <button>Check Now</button>
      </div>
      <div className="offers-right">
        <img src={exclusive_images} alt=""/>
      </div>

    </div>
  );
}

export default Offer;
