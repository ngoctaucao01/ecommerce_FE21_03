import React from 'react';
import { Link } from 'react-router-dom';

const Advertisement = ({ image, title, to }) => {
  return (
    <section className="aside-adv">
      <Link to={to}>
        <img src={image} alt={title} />
      </Link>
    </section>
  )
}

export default Advertisement;
