import React, { useState, useEffect } from "react";
import "./EditProduct.css";
import "../Products.css";
import { getProduct, updateProduct } from "../../../api/Axios";
import { useParams } from "react-router-dom";
import { ColorPicker } from "../Products";

const EditProduct = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [responseData, setResponseData] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [imageText, setImageText] = useState("");
  const [colorChange, setColorChange] = useState("");
  const [imageChange, setImageChange] = useState(null);
  const [error, setError] = useState("");
  const [isOpen, setIsOpen] = useState(false)
  const apiUrl = `http://localhost:4000/api/laptops/product/${id}`;
 const imageUrl = `http://localhost:4000${imageText}`;
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const dataCollected = await getProduct(apiUrl);
      setData(dataCollected);
      setName(dataCollected.name);
      setPrice(dataCollected.price);
      setImageText(dataCollected.image);
      setColorChange(dataCollected.color);
    } catch (error) {
      console.log(error);
    }
  };

  const handleColorChange = (color) => {
    setColorChange(color.hex);
  };
  const handlecolorbtn = () => {
    setIsOpen(!isOpen);
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImageChange(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("color", colorChange);
      formData.append("image", imageChange);
      formData.append("price", price);

      const response = await updateProduct(apiUrl, formData);
      console.log(response.updatedProduct)
    setResponseData(response.updatedProduct)
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="edit-product">
      <h1>Edit product</h1>
      <form className="edit-form" onSubmit={handleSubmit}>
        <div className="grid-input">
          <div className="input-section sec1">
            <label className="edit-label" htmlFor="name">
              Name:
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="input-section sec2">
            <label className="edit-label" htmlFor="price">
              Price:
            </label>
            <input
              type="number"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
        </div>

        <div className="input-section upload-img">
          <input type="file" id="file" onChange={handleFileChange} />
          {imageChange ? (
            <label className="img-background selected-image" htmlFor="file">
             <span className="selected-image-text"> {imageChange.name}</span>
            </label>
          ) : (
            <div className="img-background">
              <span className="text-background">{imageText}</span>
              <img src={imageUrl} alt="" className="product-image-edit"></img>
            </div>

            // <label className="img-background" htmlFor="file" style={{ backgroundImage: `url(${imageUrl})`, height: "400px", color:"white" }}><span className="text-background">{imageText}</span></label>
          )}
          <label cla htmlFor="file" className="product-select-image">
            Choose image
          </label>
        </div>
        <div className="input-section edit-color-sec">
          {isOpen && (
            <div className="open-color">
              <ColorPicker
                initialColor={colorChange}
                onChange={handleColorChange}
              />
            </div>
          )}
          {/* <h1>select color: </h1> */}
          <div className="select-color-sec center-color-sec">
            <label className="select-color-text">Select products color: </label>
            <button
              style={{ backgroundColor: colorChange }}
              className="color-picker border-1"
              onClick={handlecolorbtn}
            >
              <span className="select-color-text-bg">{colorChange}</span>
            </button>
          </div>
        </div>
        <div className="input-section submit-sec">
          <button
            type="submit"
            className="color-picker submit-btn"
            style={{ backgroundColor: "blue", color: "white" }}
          >
            Submit
          </button>
        </div>
      </form>
      {/* {responseData.name && <div style={{ marginTop:"10rem" }}>{responseData.name} has been updated successfully!</div>}
      <img src={imageUrl} alt="" style={{ width: "400px", backgroundColor:"grey",padding:"4rem" }} /> */}
    </div>
  );
};

export default EditProduct;