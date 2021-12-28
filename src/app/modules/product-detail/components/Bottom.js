import React from 'react';

const ProductsDetailBottom = ({ children }) => {
  const divStyle = {
    width: '100%',
  };

  return (
    <div className="product-detail__bottom" style={divStyle}>
      <div className="row">
        {children}
      </div>
    </div>
  )
}
export default ProductsDetailBottom;
