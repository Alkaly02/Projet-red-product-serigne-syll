import React from 'react'
import { cardsHotels } from './Utils';
import CardContentHotels from './CardContentHotels';

function HotelsCard() {
  return (
    <div className='pt-3'>
      <div className="row m-0 d-flex justify-content-around flex-wrap">
        {cardsHotels.map((card, index) => (
            <CardContentHotels {...card} key={index}/>
        ))}
      </div>
    </div>
  );
}

export default HotelsCard