import React from 'react';

const ProductsItemPrice = ({ newPrice, oldPrice }) => {
  return (
    <p className="price">
      <span className="price__new">{newPrice}<sup>đ</sup></span>
      <span className="price__old">{oldPrice}<sup>đ</sup></span>
    </p>
  )
}

export default ProductsItemPrice;
