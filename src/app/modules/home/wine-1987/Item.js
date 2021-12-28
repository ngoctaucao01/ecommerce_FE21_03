import React from 'react';
import { Col } from 'reactstrap';

const Wine1989Item = ({ image }) => {
  return (
    <Col sm={12} md={3}>
      <div className="home-wine-1987-item">
        <a className="home-wine-1987-item__img" href="/">
          <img src={image} alt="Rượu 1987" />
        </a>
        <div className="home-wine-1987-item__view">
          <span className="year">1987</span>
          <span className="text">Rượu</span>
        </div>
      </div>
    </Col>
  )
}

export default Wine1989Item;
