import React from 'react';
import { Container, Row } from 'reactstrap';
import { HeaderTitle } from '../../shared/header-title'

const HomeProductBestsellers = ({ children }) => {
  return (
    <section>
      <Container>
        <HeaderTitle title="Sản phẩm bán chạy" />
        <div className="products">
          <Row>
            {children}
          </Row>
        </div>
      </Container>
    </section>
  )
}

export default HomeProductBestsellers;
