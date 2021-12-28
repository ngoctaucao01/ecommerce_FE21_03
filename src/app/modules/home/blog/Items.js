import React from 'react';
import { Link } from 'react-router-dom';
import { Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

const HomeBlogItem = () => {
  return (
    <Col md={6}>
      <div className="card card-wine">
        <div className="card-wine-item">
          <Link to="/">
            <img className="card-img-top" src="../assets/images/blog/blog_1.jpg" alt="Card" />
          </Link>
          <div className="card-view">
            <Link className="rounded-circle" to="/">
              <FontAwesomeIcon icon={faLink} />
            </Link>
          </div>
        </div>
        <div className="card-body">
          <h5 className="card-title">
            <Link to="/">Vang Thăng Long Classic</Link>
          </h5>
          <div className="card-info">
            <p>Đăng bởi Giangle | 30/06/2015 | 60 bình luận</p>
          </div>
          <p className="card-text">Vang nổ Thăng Long có hương vị đặc trưng của sản phẩm lên men tự nhiên từ hoa quả với độ rượu nhẹ, bọt ga đầy trắng mịn. Vang Nổ thăng long tạo cảm giác hương phấn, êm dịu, vui tươi, sản phẩm được đóng chai dung tích 750ml...</p>
          <Link className="btn-readmore" to="/">Read more</Link>
        </div>
      </div>
    </Col>
  )
}

export default HomeBlogItem;
