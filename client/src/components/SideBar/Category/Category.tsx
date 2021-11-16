import React from "react";
import "./category.css";

function Category({ category, children }) {
  return (
    <div className={`category ${category}`}>
      <h3>{category}</h3>
      {children}
    </div>
  );
}

export default Category;
