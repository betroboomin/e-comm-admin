import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../components/Dashboard/Dashboard";
import Products from "../components/products/Products";
import ProductHome from "../components/products/Home/ProductHome";


const Routing = () => {
  return (
    <Routes>
     <Route path='/' element={<Dashboard />} /> 
     <Route path='/create-product' element={<Products />} /> 
     <Route path='/product-home' element={<ProductHome />} /> 
      {/* <Route path='/' element={<Home />} /> 
      <Route path='/laptop' element={<Laptop />} /> 
      <Route path='/desktop' element={<Desktop />} /> 
      <Route path='/monitor' element={<Monitor />} />  */}
    </Routes>
  );
}

export default Routing;