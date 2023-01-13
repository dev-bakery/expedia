import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper';
import SwiperImg from './swiperImg';
import "swiper/css/effect-fade";

function SwiperContainer() {
  const slides = Array.from({ length: 10 }).map(
    (el, index) => `${index + 1}`
  );
  return (
    <Swiper modules={[EffectFade ,Autoplay]} effect={"fade"} autoplay={{delay:3000}} loop={true}>
      {slides.map((slideContent, index) => (
        <SwiperSlide key={slideContent} virtualIndex={index}>
          <SwiperImg image={slideContent}/>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default SwiperContainer;
