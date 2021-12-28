import React from 'react';

function NavbarCart() {
  return (
    <>
      <a className="navbar-cart" href="/">
        <i className="fas fa-shopping-cart" />
        <span className="badge badge-light">1</span>
      </a>
    </>
  )
}

export default NavbarCart;
