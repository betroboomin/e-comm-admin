import React, { useState, useEffect } from 'react';
import './AllProduct.css';
import { deleteProduct } from '../../../api/Axios';
import { Link } from 'react-router-dom';

const AllProduct = (props) => {
  const [deleteMessage, setDeleteMessage] = useState([]);
  const [deletedProductId, setDeletedProductId] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const { prodItems } = props;

  const handleDeleteBtn = async (id) => {
    try {
      setDeletedProductId(id);
      const url = `http://localhost:4000/api/laptops/product/${id}`;
      const deletedData = await deleteProduct(url);
      console.log(deletedData           )
      setIsOpen(true);
      setDeleteMessage(deletedData.message);
    } catch (error) {
      setDeleteMessage(error);
    }
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const filteredProdItems = prodItems.filter((item) => item._id !== deletedProductId);

  return (
    <div className='allproducts'>
      <h2 className='prod-heading'>All Products</h2>
      <div className="all-prod-sec">
        {filteredProdItems.map((item, i) => (
          <div className="all-prod-row" key={item._id}>
            <div className="prod-sn">{i + 1}</div>
            <div className="prod-name">{item.name}</div>
            <div className="prod-name prod-price">{item.price}</div>
            <div className="prod-name prod-category">{item.color}</div>
            <div className="prod-name prod-btns">
              <Link to={`/editprod/${item._id}`} className='listing'>
                <button className='edit'>Edit</button>
              </Link>
              <button className='delete' onClick={() => handleDeleteBtn(item._id)}>Delete</button>
            </div>
          </div>
        ))}
        {isOpen && (
          <div className='is-open'>
            <div className="is-open-center">
              <h1>{deleteMessage}</h1>
              <button onClick={closeModal}>Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllProduct;