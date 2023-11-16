import React from 'react';
import data from './SlidesData';

function Carosel() {
  return (
    <div className="slides-container">
      {data.map((item) => (
        <div>{item.title}</div>
      ))}
    </div>
  );
}

export default Carosel;
