import React from 'react';
import { Link } from 'react-router-dom';

const ThumbImageItem = ({ image }) => {
  return (
    <Link className="thumbs__image" to="/">
      <span><img src={image} alt="" /></span>
    </Link>
  )
}

const ProductsDetailThumbs = ({ imageUrl, images = [] }) => {

  const renderImage = images => {
    return images.map((image, index) => {
      return <ThumbImageItem key={index} image={image} />
    })
  }

  return (
    <>
      <div className="thumbs">
        {images && renderImage(images)}
      </div>
      <div className="big">
        <span className="big-image">
          <img src={imageUrl} alt="" />
        </span>
      </div>
    </>
  )
}

export default ProductsDetailThumbs;
