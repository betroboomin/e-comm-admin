import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../components/Dashboard/Dashboard";
import Products from "../components/products/Products";
import ProductHome from "../components/products/Home/ProductHome";
import EditProduct from "../components/products/edit-product/EditProduct";
import Category from "../components/category/Category";
import AddCategory from "../components/category/add-category/AddCategory";


const Routing = () => {
  return (
    <Routes>
     <Route path='/' element={<Dashboard />} /> 
     <Route path='/create-product' element={<Products />} /> 
     <Route path='/product-home' element={<ProductHome />} /> 
     <Route path='/editprod/:id' element={<EditProduct />} /> 
     <Route path='/category' element={<Category />} /> 
     <Route path='/category/category-add' element={<AddCategory />} /> 
    </Routes>
  );
}

export default Routing;