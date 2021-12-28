import React from 'react';
import { Row } from 'reactstrap';

const ProductsWrapper = ({ children }) => {
  return (
    <div className="product-list__wrapper">
      <Row>
        {children}
      </Row>
    </div>
  )
};

export default ProductsWrapper;
