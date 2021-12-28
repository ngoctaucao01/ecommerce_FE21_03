import React from 'react';
import { Col, Row } from 'reactstrap';
import { HeaderTitle } from '../../shared/header-title';

const HomeBlog = ({ children }) => {
  return (
    <Col>
      <HeaderTitle title="Tin tức &amp; blog" />
      <Row>
        {children}
      </Row>
    </Col>
  )
}

export default HomeBlog;
