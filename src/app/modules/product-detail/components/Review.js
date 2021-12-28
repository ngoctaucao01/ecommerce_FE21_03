import React from 'react';

const ProductsDetailReview = () => {
  return (
    <div className="product-info__review">
      <div className="starrating">
        <input id="star1" type="radio" name="rating" defaultValue={1} />
        <label htmlFor="star1" title="1 star" />
        <input id="star2" type="radio" name="rating" defaultValue={2} />
        <label htmlFor="star2" title="2 star" />
        <input id="star3" type="radio" name="rating" defaultValue={3} />
        <label htmlFor="star3" title="3 star" />
        <input id="star4" type="radio" name="rating" defaultValue={4} />
        <label htmlFor="star4" title="4 star" />
        <input id="star5" type="radio" name="rating" defaultValue={5} />
        <label htmlFor="star5" title="5 star" />
      </div>
      <a className="review" href="/">1 Review(S)</a>
      <a className="add-review" href="/">Add Your Review</a>
    </div>
  )
}

export default ProductsDetailReview;
