import React from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { actionBuyProduct } from '../../carts/actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faSignal } from '@fortawesome/free-solid-svg-icons';
import ProductsItemTitle from '../../shared/product/Title';
import ProductsItemPrice from '../../shared/product/Price';

const ProductsItemList = ({ product, buyProduct }) => {
  const { t } = useTranslation();
  const { name, id, price, description, image_url, size } = product;

  const addToCart = (product) => {
    const quantity = 1;
    const getDefaultFirstSize = size[0];
    buyProduct(product, quantity, getDefaultFirstSize);
    toast.success(t(`NOTIFY.ADD_TO_CART_SUCCESS`, { name: product.name }));
  }

  return (
    <Col md={12}>
      <div className="products-item products-item--list">
        <Row>
          <Col md={4}>
            <Link className="products-item__img" to="/">
              <span />
              <img src={image_url} alt={name} />
            </Link>
          </Col>
          <Col md={8}>
            <div className="products-item__info">
              <ProductsItemTitle title={name} path={`/products/${id}`} />
              <ProductsItemPrice newPrice={price.new} oldPrice={price.old} />
              <div className="products-item__desc">
                {description}
              </div>
              <div className="products-item__view">
                <button onClick={() => addToCart(product)} className="btn btn-primary btn-wine" type="button">{t('ADD_TO_CART')}</button>
                <a href="/">
                  <FontAwesomeIcon icon={faHeart} /> &nbsp; {t('FAVORITE')}
                </a>
                <a href="/">
                  <FontAwesomeIcon icon={faSignal} /> &nbsp; {t('COMPARE')}
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Col>
  );
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    buyProduct: (product, quantity, size) => {
      dispatch(actionBuyProduct(product, quantity, size))
    }
  }
}

export default connect(null, mapDispatchToProps)(ProductsItemList);
