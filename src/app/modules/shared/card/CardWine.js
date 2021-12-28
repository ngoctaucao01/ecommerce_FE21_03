import React from 'react';
import { Link } from 'react-router-dom';
import { Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const CartWineItemImage = ({ imageUrl, path }) => {
  return (
    <div className="card-wine-item">
      <Link to={path}>
        <img className="card-img-top" src={imageUrl} alt="Card" />
      </Link>
      <div className="card-view">
        <Link className="rounded-circle" to={path}>
          <FontAwesomeIcon icon={faLink} />
        </Link>
      </div>
    </div>
  )
}

const CartTitle = ({ children }) => <h5 className="card-title">{children}</h5>;
const CartInfo = ({ children }) => <div className="card-info"><p>{children}</p></div>
const CartDesc = ({ children }) => <p className="card-text">{children}</p>

const CardWine = ({ item, md = 4, path }) => {
  const { image_url, title, createdAt, description } = item;
  return (
    <Col md={md}>
      <div className="card card-wine">
        <CartWineItemImage imageUrl={image_url} path={path} />
        <div className="card-body">
          <CartTitle>
            <Link to={path}>{title}</Link>
          </CartTitle>
          <CartInfo>
            Đăng bởi Giangle | {createdAt} | 60 bình luận
          </CartInfo>
          <CartDesc>{description}</CartDesc>
          <Link className="btn-readmore" to={path}>Read more</Link>
        </div>
      </div>
    </Col>
  )
}

CardWine.propTypes = {
  md: PropTypes.number,
  imageUrl: PropTypes.string,
  path: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
}

export default CardWine;
