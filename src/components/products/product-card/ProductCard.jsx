import React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";
import images from "../../../assets/images/rileysad.jpg";
const ProductCard = () => {
  return (
    <div className="productcard">
      <div
        className="product-card-image"
        style={{ backgroundImage: `url(${images})` }}
      >
        <div className="product-card-icon">
          <div className="triangle">
            <h1>c</h1>
          </div>
        </div>
      </div>
      <label>review</label>

      {/* <img className='product-card-image' src={images}  alt='' /> */}
    </div>
  );
};

export const UploadProductCard = () => {
  return (
    <div className="upload-card">
      <Link to="/create-product" className="listing">
        <h1 className="add-card-prod">add products</h1>
      </Link>
    </div>
  );
};

export default ProductCard;
