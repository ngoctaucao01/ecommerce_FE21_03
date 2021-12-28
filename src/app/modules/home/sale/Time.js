import React from 'react';
import Countdown from 'react-countdown-now';
import { GET_PROMOTION_TIME } from '../constants/ActionType';

const ProductOutOfStock = () => <span>Sản phẩm đã hết hàng!</span>;

const DateItem = ({ date, number }) => {
  return (
    <div className="home-product-day__item">
      <span className="number">{number}</span>
      <span className="day">{date}</span>
    </div>
  );
}

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return <ProductOutOfStock />;
  } else {
    return (
      <div className="home-product-day">
        <DateItem date="Ngày" number={days} />
        <DateItem date="Giờ" number={hours} />
        <DateItem date="Phút" number={minutes} />
        <DateItem date="Giây" number={seconds} />
      </div>
    )
  }
};

const HomeSaleTime = () => {
  return <Countdown
    date={GET_PROMOTION_TIME}
    renderer={renderer}
  />
}

export default HomeSaleTime;
