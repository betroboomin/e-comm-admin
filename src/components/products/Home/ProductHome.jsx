import React from 'react'
import { Link } from 'react-router-dom';

const ProductHome = () => {
  return (
    <div>
        <Link className='listing' to='/create-product'>
        <button>add product</button>
        </Link>
    
    </div>
  )
}

export default ProductHome;