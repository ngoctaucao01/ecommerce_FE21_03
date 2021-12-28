import React from 'react';
import { Container, Row } from 'reactstrap';
import { HeaderTitle } from '../../shared/header-title'

const HomeProductNew = ({ children }) => {
  return (
    <section className="home-list-product">
      <Container>
        <HeaderTitle title="Sản phẩm mới" />
        <div className="products">
          <Row>
            {children}
          </Row>
        </div>
      </Container>
    </section>
  )
};

export default HomeProductNew;
