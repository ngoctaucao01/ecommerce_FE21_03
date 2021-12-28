import React from 'react';

const ProductsDetailChooseColor = () => {
  return (
    <div className="choose-color">
      <p className="title-label">Màu sắc</p>
      <input id="yellow" type="radio" name="radio1" defaultValue="yellow" />
      <label className="yellow-label" htmlFor="yellow"></label>
      <input id="black" type="radio" name="radio1" defaultValue="black" defaultChecked="checked" />
      <label className="black-label" htmlFor="black"></label>
      <input id="red" type="radio" name="radio1" defaultValue="red" />
      <label className="red-label" htmlFor="red"></label>
    </div>
  )
}

export default ProductsDetailChooseColor;
