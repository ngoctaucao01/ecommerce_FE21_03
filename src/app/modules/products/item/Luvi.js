import React from 'react';
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faSignal, faCompress } from '@fortawesome/free-solid-svg-icons';
import ProductsItemTitle from '../../shared/product/Title';
import ProductsItemPrice from '../../shared/product/Price';

const ProductsItemLuvi = ({ product }) => {
  const { name, id, price, image_url } = product;
  return (
    <Col md={4}>
      <div className="products-item">
        <Link className="products-item__img" to="/">
          <span />
          <img src={image_url} alt={name} />
        </Link>
        <div className="products-item__view">
          <a href="/">
            <FontAwesomeIcon icon={faHeart} /> &nbsp; Yêu thích
          </a>
          <a href="/">
            <FontAwesomeIcon icon={faSignal} /> &nbsp; So sánh
          </a>
          <a href="/">
            <FontAwesomeIcon icon={faCompress} />
          </a>
        </div>
        <div className="products-item__info">
          <ProductsItemTitle title={name} path={`/products/${id}`} />
          <ProductsItemPrice newPrice={price.new} oldPrice={price.old} />
          <a className="btn btn-primary btn-wine" href="/">Add to card</a>
        </div>
      </div>
    </Col>
  )
};

export default ProductsItemLuvi;
