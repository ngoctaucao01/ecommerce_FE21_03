import React from 'react';
import Select from 'react-select';

const ProductsDetailChooseSize = ({ defaultValue, options, handler }) => {
  return (
    <div className="choose-size">
      <p className="title-label">Kích cỡ</p>
      <Select
        defaultValue={defaultValue}
        onChange={handler}
        options={options}
        placeholder="Chọn kích cỡ"
      />
    </div>
  )
}

export default ProductsDetailChooseSize;
