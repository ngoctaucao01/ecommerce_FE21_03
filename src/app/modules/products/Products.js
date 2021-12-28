import React, { useState, useEffect } from 'react';
import { Container, Row } from 'reactstrap';
import { useTranslation } from 'react-i18next';
import { withFirebase } from '../firebase';
import Loading from '../loading/Loading';
import Jumbotron from '../jumbotron/Jumbotron';
import ProductsLeft from './aside/Aside';
import ProductsRight from './ProductsRight';
import ProductsTopbar from './topbar';
import ProductsTopbarSort from './topbar/Sort';
import ProductsTopbarPagination from './topbar/Pagination';
import ProductsWrapper from './ProductsWrapper';
import ProductsItemList from './item/List';

const ProductsPage = () => {
  const jumbotronImage = process.env.PUBLIC_URL + 'assets/images/common/product-jumbotron.jpg';
  return (
    <Container>
      <Jumbotron image={jumbotronImage} />
      <Row>
        <ProductsLeft />
        <ProductsRight>
          <ProductsTopbar>
            <ProductsTopbarSort />
            <ProductsTopbarPagination />
          </ProductsTopbar>
          <ProductsWrapper>
            <Products />
          </ProductsWrapper>
        </ProductsRight>
      </Row>
    </Container>
  )
}

const ProductsHookBase = ({ firebase }) => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    firebase
      .products()
      .limitToLast(9)
      .once('value')
      .then(snapshot => {
        const productObject = snapshot.val();
        if (productObject) {
          const productList = Object.keys(productObject).map(key => ({
            ...productObject[key],
            id: key
          }))
          setProducts(productList);
        } else {
          setProducts(null);
        }
      })
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        setError(true);
      })
  }, [firebase]);

  const renderError = () => <div>{t('NOTIFY.SOMETHING_WENT_WRONG')}</div>

  return (
    <>
      {loading && <Loading />}
      {error && renderError()}
      {products ? <ProductsList products={products} /> : null}
    </>
  )
}

const ProductsList = ({ products }) => (
  <>
    {products.map(product => (
      <ProductsItemList key={product.id} product={product} />
    ))}
  </>
)

const Products = withFirebase(ProductsHookBase)

export default ProductsPage;
