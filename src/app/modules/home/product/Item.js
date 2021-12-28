import React from 'react';
import { Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faSignal, faCompress } from '@fortawesome/free-solid-svg-icons';
import ProductsItemTitle from '../../shared/product/Title';
import ProductsItemPrice from '../../shared/product/Price';

const checkStatusClass = status => {
  switch (status) {
    case 'sale':
      return 'products-item--sale';
    case 'new':
      return 'products-item--new';
    case 'hot':
      return 'products-item--hot';
    default:
      break;
  }
  return status
}

const HomeProductItem = ({ status = '' }) => {

  return (
    <Col sm={12} md={3}>
      <div className={`products-item ${checkStatusClass(status)}`}>
        <a className="products-item__img" href="/">
          <span />
          <img src="../assets/images/products/1.jpg" alt="Rượu vang Đà Lạt" />
        </a>
        <div className="products-item__view">
          <a href="/"><FontAwesomeIcon icon={faHeart} /> &nbsp; Yêu thích</a>
          <a href="/"><FontAwesomeIcon icon={faSignal} /> &nbsp; So sánh</a>
          <a href="/"><FontAwesomeIcon icon={faCompress} /></a>
        </div>
        <div className="products-item__info">
          <ProductsItemTitle title="Rượu vang Đà Lạt" path="/" />
          <ProductsItemPrice newPrice={370000} oldPrice={470000} />
          <a className="btn btn-primary btn-wine" href="/">Add to card</a>
        </div>
      </div>
    </Col>
  )
};

export default HomeProductItem;
