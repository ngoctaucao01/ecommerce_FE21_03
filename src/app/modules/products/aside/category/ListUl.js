/**
 * TODO:
 * - [] Learn react-router add active li
 */

import React from 'react';
import { Link } from 'react-router-dom';

const AsideCategoryListUl = ({ title, menu }) => {
  const renderItem = menu.map((item, index) => {
    return (
      <li key={index}>
        <Link to={item.path}>{item.name}</Link>
      </li>
    )
  });

  return (
    <>
      <span className="text-uppercase">{title}</span>
      <ul className="aside-menu__ul list-unstyled">
        {renderItem}
      </ul>
    </>
  );
}

export default AsideCategoryListUl;
