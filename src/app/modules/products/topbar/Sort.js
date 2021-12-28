import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThList, faTh } from '@fortawesome/free-solid-svg-icons';

const ProductsTopbarSort = () => {
  return (
    <div className="sort">
      <a className="sort__grid" href="/">
        <FontAwesomeIcon icon={faTh} />
      </a>
      <a className="sort__list active" href="/">
        <FontAwesomeIcon icon={faThList} />
      </a>
    </div>
  )
}

export default ProductsTopbarSort;
