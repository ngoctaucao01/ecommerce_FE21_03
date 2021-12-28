import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faSignal, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ProductsDetailExpress = () => {
  return (
    <div className="product-detail__express">
      <a href="/"><FontAwesomeIcon icon={faHeart} /> Yêu thích</a>
      <a href="/"><FontAwesomeIcon icon={faSignal} /> So sánh</a>
      <a href="/"><FontAwesomeIcon icon={faEnvelope} /> Email</a>
    </div>
  )
}

export default ProductsDetailExpress;
