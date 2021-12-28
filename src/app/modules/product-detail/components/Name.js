import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const ProductsDetailName = ({ name, match }) => {
  return (
    <h4 className="product-info__name">
      <Link to={match.url}>{name}</Link>
    </h4>
  )
}

export default withRouter(ProductsDetailName);
