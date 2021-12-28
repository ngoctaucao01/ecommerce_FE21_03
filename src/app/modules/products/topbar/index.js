import React from 'react';

const ProductsTopbar = ({ children }) => {
  return (
    <div className="product-list__topbar d-flex justify-content-center align-items-center">
      {children}
    </div>
  );
};

export default ProductsTopbar;
