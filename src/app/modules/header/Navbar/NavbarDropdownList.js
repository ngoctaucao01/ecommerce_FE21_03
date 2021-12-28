import React from 'react';
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';

function NavbarDropdownList({ title }) {
  return (
    <Col md={3}><span className="dropdown__title">{title}</span>
      <ul className="nav flex-column">
        <li className="nav-item"><Link className="nav-link" to="/products">Rượu Chivas</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/products">Hàng độc - Rượu độc đáo</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/products">Rượu Whisky</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/products">Rượu Remy Martin</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/products">Rượu Glenmorangie</Link></li>
      </ul>
    </Col>
  )
}

export default NavbarDropdownList;
