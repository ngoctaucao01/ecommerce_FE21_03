import React from 'react';
import { LIMIT_IMAGE_WINE1987 } from '../constants/ActionType';
import Wine1989Item from './Item';

const imgWine1987 = [];

const setWine1989Image = number => {
  for (let i = 1; i <= number; i++) {
    let image = `../../assets/images/home/wine-1987_${i}.jpg`;
    imgWine1987.push(image);
  }
}

const Wine1987 = () => {
  setWine1989Image(LIMIT_IMAGE_WINE1987);

  const render = items => {
    return items.map((item, index) => {
      return <Wine1989Item image={item} key={index} />
    })
  }

  return (
    <section className="home-wine-1987 mx-100 overflow-hidden">
      <div className="row no-gutters">
        {render(imgWine1987)}
      </div>
    </section>
  )
}

export default Wine1987;
