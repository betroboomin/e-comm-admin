import React , {useState , useEffect}from 'react';
import './AllProduct.css';
import { deleteProduct } from '../../../api/Axios';

const AllProduct = (props) => {
    const [deleteMessage, setDeleteMessage] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    // const [id, SetId] = useState(null);
    
  const { prodItems } = props;


const handledeletebtn = async(id) => {
    try {
        const url = `http://localhost:4000/api/laptops/product/${id}`
        const deletedata = await deleteProduct(url);
        setIsOpen(true);
        setDeleteMessage(deletedata.message);
    } catch (error) {
        setDeleteMessage(error)
    }
}
const closeModal = () => {
   
    setIsOpen(false)
    window.location.reload();
}


  return (
    <div className='allproducts'>
      <h2 className='prod-heading'>All Products</h2>
      <div className="all-prod-sec">
        {
          prodItems.map((item, i) => (
            <div className="all-prod-row" key={i}>
                
                
              <div className=" prod-sn">
                {i + 1}
              </div>
              <div className="prod-name">
                {item.name}
              </div>
              <div className="prod-name prod-price">
                {item.price}
              </div>
              <div className="prod-name prod-category">
                {item.color}
              </div>
              <div className="prod-name prod-btns">
                <button className='edit' >Edit</button>
                <button className='delete' onClick={() => handledeletebtn(item._id)}>Delete</button>
              </div>
            </div>
          ))
        }
        {
            isOpen ? (<div className='is-open'>
                <div className="is-open-center">
                <h1>{deleteMessage}</h1>
            <button onClick={()=>closeModal()}>close</button>
            
                </div>
               </div>) : ""
        }
      </div>
      
    </div>
  );
};

export default AllProduct;