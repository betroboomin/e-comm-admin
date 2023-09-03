import React, { useState, useEffect } from 'react';
import "./Products.css";
import { ChromePicker } from 'react-color';
import axios from 'axios';
import { createProduct } from '../../api/Axios';

const Products = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [responseData, setResponseData] = useState(null);
  const [responseImage, setResponseImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);



  const handleFileUpload = async(e) => {
    e.preventDefault();
    const url = "http://localhost:4000/api/laptops/product";
    const formData = new FormData();
    formData.append('image', selectedFile);
    formData.append('name', name);
    formData.append('color', selectedColor);
    formData.append('price', price);
        try {
            
       const resp = await createProduct(url,formData);
       console.log(resp)
       const images = resp.image;
        setResponseData(resp.color);
        setResponseImage(images)
        } catch (error) {
            throw error;
        }
      
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleColorChange = (color) => {
    console.log('Selected color:', color);
    setSelectedColor(color.hex);
  };

  return (
    <div>
      <form encType="multipart/form-data">
        <input type='text' placeholder='enter Product name' onChange={handleNameChange} />
        <input type='number' placeholder='enter product price' onChange={handlePriceChange} />
        <input type='file' onChange={handleFileChange} />
        <ColorPicker onChange={handleColorChange} />
        <button onClick={handleFileUpload}>submit</button>
      </form>

      <h1>{name}</h1>
      <p>file name: {selectedFile ? selectedFile.name : 'none'}</p>
      <h1 >{selectedColor}</h1>
      <div> </div>
      <h1 >{responseData}</h1>
      <img alt="" src={`http://localhost:4000${responseImage}`} style={{ width: '600px' }}/>
    </div>
  );
};

const ColorPicker = (props) => {
  const { onChange } = props;
  const [color, setColor] = useState('#000000');

  const handleColorChange = (newColor) => {
    setColor(newColor.hex);
    if (typeof onChange === 'function') {
      onChange(newColor);
    }
  };

  return (
    <div>
      <ChromePicker color={color} onChange={handleColorChange} />
      <div style={{ backgroundColor: color, width: '100px', height: '100px' }}></div>
    </div>
  );
};

export default Products;