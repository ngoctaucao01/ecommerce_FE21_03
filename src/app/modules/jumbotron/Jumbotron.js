import React from 'react';

const Jumbotron = ({ image }) => {
  return (
    <div className="jumbotron" style={{ backgroundImage: `url(${image})` }} />
  )
}

export default Jumbotron;
