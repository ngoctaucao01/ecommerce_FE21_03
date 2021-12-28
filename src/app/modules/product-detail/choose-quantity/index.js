import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

const ProductsDetailChooseQuantity = ({ count, onCountChange, onDecrease, onIncrease, addToCart, product }) => {

  return (
    <div className="choose-quantity">
      <p className="title-label">Số lượng</p>
      <div className="d-flex">
        <div className="input-group">
          <div className="input-group-prepend">
            <button onClick={onDecrease} className="btn btn-sm" id="minus-btn">
              <FontAwesomeIcon icon={faMinus} />
            </button>
          </div>
          <input value={count} onChange={e => onCountChange(+e.target.value)} className="form-control form-control-sm" id="qty_input" type="number" min={1} />
          <div className="input-group-prepend">
            <button onClick={onIncrease} className="btn btn-sm" id="plus-btn">
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
        </div>
        <button onClick={() => addToCart(product)} className="btn btn-primary btn-wine">Add to card</button>
      </div>
    </div>
  )
}

export default ProductsDetailChooseQuantity;
