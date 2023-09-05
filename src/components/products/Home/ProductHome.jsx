import React,{useRef, useState} from 'react'
import { Link } from 'react-router-dom';
import './ProductHome.css'
import ProductCard, {UploadProductCard} from '../product-card/ProductCard';

const ProductHome = () => {
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(null);

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
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        </div>
      
    </div>
  )
}

export default ProductHome;