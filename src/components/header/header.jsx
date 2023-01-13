import React from 'react'
import SwiperContainer from './swiper/swiperContainer';

function Header() {
  return (
    <div className='box__event--header'>
        <div className='box__header-swiper'>
            <SwiperContainer />
        </div>
    </div>
  )
}

export default Header;