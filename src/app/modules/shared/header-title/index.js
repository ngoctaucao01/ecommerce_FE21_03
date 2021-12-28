import React from 'react';
import { Link } from 'react-router-dom';

export const HeaderTitle = ({ title, path = "/" }) => {
  return (
    <h3 className="n-header-title">
      <Link to={path}>{title}</Link>
    </h3>
  )
}

export const HeaderTitleMedium = ({ title, path = "/" }) => {
  return (
    <h4 className="n-header-title-2">
      <Link to={path}>{title}</Link>
    </h4>
  )
}
