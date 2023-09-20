import React from "react";
import "./Category.css";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div className="category">
      <h1 className="cate-heading">New Category</h1>
      <div className="category-sec">
        <div className="category-box">
          <div className="category-name">Name</div>
          <div className="category-body">
            <div className="cate-list">
              <div className="numbering-cate">1</div>
              <div className="list-name">category</div>
            </div>
            <div className="cate-list">
              <div className="numbering-cate">1</div>
              <div className="list-name">category</div>
            </div>
            <div className="cate-list">
              <div className="numbering-cate">1</div>
              <div className="list-name">category</div>
            </div>
          </div>
          <div className="category-footer">
            <button>edit</button>
            <button>delete</button>
          </div>
        </div>
        <Link to="./category-add" className="listing ">
          <div id="create" className="category-box creatimg-cata">
            <label htmlFor="create3">create new Category</label>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Category;
