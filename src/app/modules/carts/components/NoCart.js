import React from 'react';
import { useTranslation } from 'react-i18next';

const NoCart = () => {
  const { t } = useTranslation();
  return (
    <tr>
      <td colSpan={7}>
        <div className="d-block">
          <img src="../assets/images/common/no-cart.svg" alt="" />
        </div>
        {t('NO_PRODUCT_IN_CART')}</td>
    </tr>
  )
}

export default NoCart;
