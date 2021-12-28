import React from 'react';
import { Link } from 'react-router-dom';
import { Col } from 'reactstrap';

function NavbarDropdownImage({ img }) {
  return (
    <Col md={3}>
      <Link to="/products"><img className="img-fluid" src={img} alt="img-menu" /></Link>
    </Col>
  )
}

export default NavbarDropdownImage;
