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
  const [selectedImage, setSelectedImage] = useState(null);
  const [color, setColor] = useState('')
  
const [isOpen, setIsOpen] = useState(false)


  const handleFileUpload = async(e) => {
    e.preventDefault();
    const url = "http://localhost:4000/api/laptops/product";
    const formData = new FormData();
    formData.append('image', selectedImage);
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
    const file = e.target.files[0];
    setSelectedImage(e.target.files[0]);
    const reader = new FileReader();

    reader.onload = () => {
      setSelectedFile(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleColorChange = (color) => {
    console.log('Selected color:', color);
    setSelectedColor(color.hex);
  };
  const handlebuttoncolor = (e) => {
    e.preventDefault();
if(isOpen){
  setIsOpen(false)
}else{
  setIsOpen(true)
}
  }
  const handlebuttondone = (e) => {
    e.preventDefault();
setColor(selectedColor);
setIsOpen(!isOpen)
  }

  return (
    <div className='create-product'>
      <div className="left-section-create-product">
      <h1>Create New Product</h1>
      <form encType="multipart/form-data">
        <div className="left-form">

        </div>
        <label className='label-text'>
          Product Name:
        </label>
        <input type='text' placeholder='enter Product name' onChange={handleNameChange} />
        <label className='label-text'>
          Product Price:
        </label>
        <input type='number' placeholder='enter product price' onChange={handlePriceChange} />
         
        <input type='file'  className='file-input' id='file' onChange={handleFileChange} />
        {/* {selectedFile && <img style={{ width: "300px" , marginBottom: "1rem"}} src={selectedFile} alt="Selected" />} */}
        {color ? (<button style={{ backgroundColor: color, color: "white" }} onClick={handlebuttoncolor}>{color}</button>) : (<button style={{  backgroundColor: "blue", color:"white" }} onClick={handlebuttoncolor}> select color</button>)}
        {isOpen ? (<div className='color-picker-container'>

        <div className='colorpicker-sec'>
        <ColorPicker onChange={handleColorChange} />
          <button onClick={handlebuttondone}>done</button>
        </div>
          
          
        </div>) : (<>
        
        </>)}
        
        <button onClick={handleFileUpload}>submit</button>
      </form>
      </div>
      <div className="right-section-create-producct">
      <img alt=""
      //  src={`http://localhost:4000${responseImage}`}
       src={selectedFile}
       style={{ width: '420px' }}/>
       <label for="file" className='upload-btn'>
         {selectedFile ? `${ selectedImage.name}` : " select an image"}
        </label> 
    
      </div>
     </div>
  );
};

export const ColorPicker = (props) => {
  const { onChange } = props;
  const [color, setColor] = useState('#000000');

  const handleColorChange = (newColor) => {
    setColor(newColor.hex);
    if (typeof onChange === 'function') {
      onChange(newColor);
    }
  };

  return (
    <div className='color-picker-sec'>
      <ChromePicker color={color} onChange={handleColorChange} />
      <div style={{ backgroundColor: color, width: '100px', height: '260px' }}></div>
    </div>
  );
};

export default Products;