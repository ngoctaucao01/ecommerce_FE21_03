import React from 'react';
import { Link } from 'react-router-dom';

const ProductsItemTitle = ({ title, path }) => {
  return (
    <h5 className="products-item__info__name">
      <Link to={path}>{title}</Link>
    </h5>
  )
}

export default ProductsItemTitle;
