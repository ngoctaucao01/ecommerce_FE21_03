import React from 'react';

const CartFooter = ({ totalQuantity, totalPrice }) => {
  return (
    <tr>
      <td colSpan={4}></td>
      <td>{totalQuantity}</td>
      <td className="table-cart__price">{totalPrice}<sup className="text-lowercase">đ</sup></td>
    </tr>
  )
}

export default CartFooter;
