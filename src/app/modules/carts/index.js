import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { sumBy } from 'lodash';
import { toast } from 'react-toastify';
import Loadable from 'react-loadable';
import { actionDeleteAllProduct } from './actions';
import { HeaderTitleMedium } from '../shared/header-title';
import { useTranslation } from 'react-i18next';

const Loading = () => <tr><td>Loading...</td></tr>

const CartItem = Loadable({
  loader: () => import('./components/Item'),
  loading: Loading,
  render(loaded, props) {
    let CartItem = loaded.default;
    return <CartItem {...props} />
  }
});

const CartFooter = Loadable({
  loader: () => import('./components/Footer'),
  loading: Loading,
  render(loaded, props) {
    let CartFooter = loaded.default;
    return <CartFooter {...props} />
  }
});

const NoCart = Loadable({
  loader: () => import('./components/NoCart'),
  loading: Loading
});

const Cart = ({ carts, deleteAllProduct }) => {
  const { t } = useTranslation();
  const renderCartItem = (carts) => {
    if (carts.length > 0) {
      return carts.map((cart, index) => {
        return <CartItem key={index} cart={cart} />
      });
    }
    return <NoCart />
  }

  const renderCartFooter = (carts) => {
    let totalQuantity = sumBy(carts, 'quantity');
    let totalPrice = sumBy(carts, (cart) => {
      return cart.product.price.new || cart.product.price * cart.quantity;
    });
    if (carts.length > 0) {
      return <CartFooter totalQuantity={totalQuantity} totalPrice={totalPrice} />
    }
    return null;
  }

  const onDeleteAll = () => {
    const confirm = window.confirm(t('NOTIFY.DELETE_ALL_PRODUCT_CONFIRM'));
    if (confirm) {
      deleteAllProduct();
      toast.error(t('NOTIFY.DELETE_ALL_PRODUCT_SUCCESS'));
    }
  }

  return (
    <div className="container">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/">{t('HOMEPAGE')}</Link></li>
          <li className="breadcrumb-item active" aria-current="page">{t('CART')}</li>
        </ol>
      </nav>
      <section>
        <HeaderTitleMedium title={t('CART')} path="/cart" />
        <table className="table table-cart">
          <thead>
            <tr>
              <th scope="col">{t('IMAGE')}</th>
              <th scope="col">{t('PRODUCT_NAME')}</th>
              <th scope="col">{t('PRODUCT_SIZE')}</th>
              <th scope="col">{t('PRODUCT_PRICE')}</th>
              <th scope="col">{t('PRODUCT_QUANTITY')}</th>
              <th scope="col">{t('TOTAL')}</th>
              <th scope="col">{t('DELETE')}</th>
            </tr>
          </thead>
          <tbody>
            {renderCartItem(carts)}
            {renderCartFooter(carts)}
          </tbody>
        </table>
        <div className="d-flex justify-content-end">
          <Link className="btn btn-wine" to="/products">{t('CONTINUE_BUYING')}</Link>
          <button onClick={() => onDeleteAll()} className="btn btn-wine mx-3" >{t('DELETE')}</button>
          <a className="btn btn-wine" href="/">{t('UPDATE')}</a>
        </div>
      </section>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    carts: state.cartsReducers.carts
  }
}

const mapDispathToProps = (dispatch, ownProps) => {
  return {
    deleteAllProduct: () => {
      dispatch(actionDeleteAllProduct());
    }
  }
}

export default connect(mapStateToProps, mapDispathToProps)(Cart);
