import React from 'react';
import HomeSaleTime from './Time';

const HomeSale = () => {
  return (
    <section className="home-product">
      <div className="container">
        <div className="home-product-box">
          <div className="home-product-box-show">
            <div className="home-product-box-show__left">
              <div className="home-product-img">
                <span>Sale</span>
                <img src="/assets/images/products/14.jpg" alt="Rượu nho năm 1987" /></div>
            </div>
            <div className="home-product-box-show__right">
              <h4 className="home-product-title">
                <a href="/">Rượu nho năm 1987</a>
              </h4>
              <span className="home-product-price">330.000<sup>đ</sup></span>
              <a className="btn btn-primary btn-wine" href="/">Add to card</a>
              <p className="home-product-desc">
                Một hợp chất có trong rượu vang được gọi là resveratro có khả năng làm tăng tối đa tuổi thọ. Resveratro còn có khả năng ngăn chặn mật độ ôxy hoá của protein béo.
              </p>
              <HomeSaleTime />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeSale;
