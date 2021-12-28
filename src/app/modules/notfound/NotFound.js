import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  return (
    <div className="page-404">
      <div className="page-404__wrapper">
        <div className="page-404__logo">
          <Link to="/">
            <img src={`${process.env.PUBLIC_URL}/assets/images/logo_black.png`} alt="logo" />
          </Link>
        </div>
        <div className="page-404__nav">
          <Link className="page-404__link" to="/">Trang chủ</Link>
          <Link className="page-404__link" to="/">Liên hệ</Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
