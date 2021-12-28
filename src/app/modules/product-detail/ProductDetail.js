import React, { useState, useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Container, Col } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { withFirebase } from '../firebase';
import { actionBuyProduct } from '../carts/actions';
import Loading from '../loading/Loading';
import ProductsDetailBottom from './components/Bottom';
import ProductsDetailChooseColor from './choose-color';
import ProductsDetailChooseQuantity from './choose-quantity';
import ProductsDetailChooseSize from './choose-size';
import ProductsDetailDesc from './components/Desc';
import ProductsDetailExpress from './components/Express';
import ProductsDetailInfo from './components/Info';
import ProductsDetailLeft from './components/Left';
import ProductsDetailName from './components/Name';
import ProductsDetailNavTabs from './components/NavTabs';
import ProductsDetailPrice from './components/Price';
import ProductsDetailReview from './components/Review';
import ProductsDetailRight from './components/Right';
import ProductsDetailThumbs from './components/Thumbs';
import useChooseQuantity from '../shared/choose-quantity';

const ProductDetailPage = () => {
  return (
    <Container>
      <div className="product-detail">
        <ProductDetail />
      </div>
    </Container>
  )
}

const ProductDetailHookBase = ({ firebase, match, buyProduct }) => {
  const productId = match.params.id;
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [sizeOptions, setSizeOptions] = useState([]);
  const [selectedSize, setSelectedSize] = useState({ label: "Loại nhỏ", value: 'small' });
  const [error, setError] = useState(false);
  const [count, onIncrease, onDecrease, onCountChange] = useChooseQuantity();

  useEffect(() => {
    setLoading(true);
    firebase
      .product(productId)
      .once('value')
      .then(snapshot => {
        let { name, image_url, images, description, body, info, price, size } = snapshot.val();
        let productData = {
          id: snapshot.key,
          name,
          image_url,
          images,
          description,
          body,
          info,
          price: price.new,
        }

        if (productData) {
          setData(productData);
          setSizeOptions(size);
        } else {
          setData(null);
        }
      })
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        setError(true);
      })
  }, [firebase, productId]);

  const handleChangeSize = (selectedOption) => {
    setSelectedSize(selectedOption);
  }

  const addToCart = (product) => {
    const newSize = selectedSize;
    buyProduct(data, count, newSize);
    toast.success(t(`NOTIFY.ADD_TO_CART_SUCCESS`, { name: `${data.name}` }));
  }

  const renderError = () => <div>{t('NOTIFY.SOMETHING_WENT_WRONG')}</div>

  return (
    <>
      {loading && <Loading />}
      {error && renderError()}
      <ProductsDetailLeft>
        <ProductsDetailThumbs imageUrl={data.image_url} images={data.images} />
      </ProductsDetailLeft>
      <ProductsDetailRight>
        <ProductsDetailInfo>
          <ProductsDetailName name={data.name} />
          <ProductsDetailPrice price={data.price} />
          <ProductsDetailReview />
          <ProductsDetailChooseSize defaultValue={selectedSize} options={sizeOptions} handler={handleChangeSize} />
          <ProductsDetailChooseColor />
          <div className="clearfix" />
          <ProductsDetailChooseQuantity
            addToCart={addToCart}
            count={count}
            onCountChange={onCountChange}
            onDecrease={onDecrease}
            onIncrease={onIncrease}
            product={data}
          />
          <ProductsDetailExpress />
          <ProductsDetailDesc desc={data.desc} />
        </ProductsDetailInfo>
      </ProductsDetailRight>
      <ProductsDetailBottom>
        <ProductsDetailNavTabs feature={data.body} info={data.info} review="3" />
        <Col md={4}>
          <Link to="/">
            <img src="../assets/images/common/product-detail.jpg" alt={data.name} />
          </Link>
        </Col>
      </ProductsDetailBottom>
    </>
  )
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    buyProduct: (product, quantity, size) => {
      dispatch(actionBuyProduct(product, quantity, size))
    }
  }
}

const ProductDetail = compose(
  withRouter,
  withFirebase,
  connect(null, mapDispatchToProps),
)(ProductDetailHookBase);

export default ProductDetailPage;
