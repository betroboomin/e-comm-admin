import React,{useRef, useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import './ProductHome.css'
import ProductCard, {UploadProductCard} from '../product-card/ProductCard';
import AllProduct from '../all-product-display/AllProduct';
import { getProduct } from '../../../api/Axios';

const ProductHome = () => {
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(null);
  const [items, setItems] = useState([]);

  const handleMouseDown = (event) => {
    setIsDragging(true);
    setStartX(event.clientX);
  };

  const handleMouseMove = (event) => {
    if (!isDragging) return;

    const delta = event.clientX - startX;
    containerRef.current.scrollLeft -= delta;
    setStartX(event.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };
useEffect(() => {
  handleproductfromserver()

 
}, [])

  const handleproductfromserver = async() => {
   const url = "http://localhost:4000/api/laptops/product";

   try {
    const products  = await getProduct(url);
  setItems(products);
   } catch (error) {
    throw error
   }
  
  }
  return (
    
    <div className='productname'>
        <Link className='add-prod-btn listing' to='/create-product'>
       Add product
        </Link>

        <div
        className="product-display-container"
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        <div className="product-display">
          <UploadProductCard />
          <ProductCard />
          
        </div>
        </div>
        <div className='all-product-section'>
        <AllProduct prodItems={items}/>
        
        </div>
      
    </div>
  )
}

export default ProductHome;