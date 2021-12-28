import React from 'react';

const ProductsDetailPrice = ({ price }) => {
  return <span className="product-info__price">{price}<sup>đ</sup></span>
}

export default ProductsDetailPrice;
