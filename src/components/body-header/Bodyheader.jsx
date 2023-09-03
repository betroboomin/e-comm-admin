import React, { useEffect, useState } from "react";
import './Bodyheader.css'
import DropdownButton from "../dropdown-button/DropdownButton";
import { getProduct } from "../../api/Axios";
import ProductIcon from "../../assets/icon/product-icon";
import { Link } from "react-router-dom";
import DashboardIcon from "../../assets/icon/dashboard-icon";



const Bodyheader = () => {
  const [ProductNumber, setProductNumber] = useState('');
  const homecards = [
    {
      producticon: <ProductIcon width="45px" height="45px" fill="white" color=""/>,
      productnumb: ProductNumber,
      cardLabel: "Total products",
      color:` rgb(0, 81, 255)`,
      link: "/product-home"

    },
    {
      producticon: <DashboardIcon width="45px" height="45px" fill="white" color=""/>,
      productnumb: ProductNumber,
      cardLabel: "Total products",
      link: "/product-home"
    },
    
    {
      producticon: <DashboardIcon width="45px" height="45px" fill="white" color=""/>,
      productnumb: ProductNumber,
      cardLabel: "Total products",
      link: "/product-home"
    },
   
  ]
  useEffect(() => {
    ProductIdea();
  }, [])
  
  const ProductIdea = async() =>{
    try {
      const data = await getProduct('http://localhost:4000/api/laptops/product')
      const count = data.length;
      setProductNumber(count);
    } catch (error) {
      throw error
    }
  }
  return (
    <div>
<div className="body-header">
      <div className="body-header-top">
        <div className="body-header-top-left">
            <div className="body-header-top-left-heading">
                Good morning, <span className="bold"> Betro Boomin</span>
            </div>
            <div className="body-header-top-left-text">
                Your performance summery this week
            </div>
        </div>
        <div className="body-header-top-right">
        <DropdownButton  text="select category" height="3rem" width="8rem"/>
        </div>
      </div>
      <div className="body-header-low">
        {
          homecards.map((item,i) => (
            <div className="card product-card">
            <div className="icon-bg" style={{ backgroundColor: item.color }}>
            {item.producticon}
            </div>
           
           
           <div className="product-card-content">
           <h1>{item.productnumb}</h1>
            <label>{item.cardLabel}</label>
           </div>
           <Link className="listing" to={item.link}>
           <div className="dot3" >
            <h1>.</h1>
            <h1>.</h1>
            <h1>.</h1>
           </div></Link>
           
           
           </div>
          ))
        }
           
      </div>
    </div>
    </div>
    
  );
};

export default Bodyheader;
