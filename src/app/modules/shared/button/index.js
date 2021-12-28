import React from 'react';
import { Link } from 'react-router-dom';

export const ButtonSubmit = ({ children, disabled }) => {
  return <button disabled={disabled} className="btn btn-primary btn-wine mx-1 my-3 text-uppercase" type="submit">{children}</button>
};

export const ButtonHeaderForm = ({ children, path = '/' }) => {
  return <Link className="btn btn-primary btn-wine px-5 py-2 mx-1 my-3 ml-auto text-uppercase" to={path}>{children}</Link>
};

export const ButtonGoBack = ({ children }) => {
  return <button className="btn btn-primary btn-wine mx-1 my-3 text-uppercase">{children}</button>
}
