import React from 'react';

export const Label = ({ children, type = '' }) => {

  const checkType = (type) => {
    if (type === 'required') return <span className="text-danger">*</span>
  }

  return (
    <label className="col-sm-2 col-form-label">{children}{checkType(type)}</label>
  )
}
