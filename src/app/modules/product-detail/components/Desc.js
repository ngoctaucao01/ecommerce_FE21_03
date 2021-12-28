import React from 'react';

const ProductsDetailDesc = ({ desc }) => {
  return (
    <div className="product-detail__desc">
      <p className="title-label">Mô tả</p>
      <p className="text-desc">{desc}</p>
    </div>
  );
}

export default ProductsDetailDesc;
