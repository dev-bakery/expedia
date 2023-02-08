import React from 'react'
import SwiperContainer from './swiper/swiperContainer';
import Visual from './visual/visual';

function Header() {
  return (
    <div className='box__event--header'>
        <div className='box__header-swiper'>
          <SwiperContainer />
        </div>
        <Visual />
    </div>
  )
}

export default Header;
