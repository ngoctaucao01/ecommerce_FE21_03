import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderTitle } from '../../shared/header-title'

const HomeCustomer = () => {
  return (
    <div className="col-md-4">
      <HeaderTitle title="Khách hàng" />
      <div className="customers">
        <img className="customers__quote" src="../assets/images/common/quote.png" alt="quote" />
        <p className="customers__comment">
          Vang nổ Thăng Long có hương vị đặc trưng của sản phẩm lên men tự nhiên từ hoa quả với độ rượu nhẹ, bọt ga đầy trắng mịn. Vang Nổ thăng long ...
        </p>
        <Link className="btn-readmore" to="/">Read more</Link>
        <div className="customers__info">
          <Link className="customers__avatar" to="/">
            <img src="../assets/images/common/customer.png" alt="Giang LT" />
          </Link>
          <p className="customers__name">Giang LT</p>
          <p className="customers__job">Graphic design</p>
        </div>
      </div>
    </div>
  )
}

export default HomeCustomer;
