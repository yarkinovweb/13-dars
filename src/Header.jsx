import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css';

import rasm1 from './bmw.png';
import rasm2 from './city.png';
import rasm3 from './nature.png';

const tugma = (event) => event.preventDefault();

const rasmlar = [
  <img src={rasm1} onDragStart={tugma} role='presentation' />,
  <img src={rasm2} onDragStart={tugma} role='presentation' />,
  <img src={rasm3} onDragStart={tugma} role='presentation' />
];

const Header = () => {
  return (
    <div>
      <AliceCarousel
        mouseTracking
        items={rasmlar}
        activeIndex={0}
        animationDuration={500}
        animationType={'slide'}
        autoPlay={true}
        autoPlayControls={true}
        autoPlayDirection={'ltr'}
        disableButtonsControls={true}
        disableDotsControls={true}
        disableSlideInfo={false}
        infinite={true}
        responsive={{
          0: {
            items: 1,
          },
          1024: {
            items: 3,
            itemsFit: 'contain',
          }
        }}
      />
      <h1>Hello</h1>
    </div>
  )
}

export default Header