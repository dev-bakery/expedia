import React from "react";

export default function SwiperImg({ image }) {
  return (
    <img
      src={`http://image.gmarket.co.kr/Gmkt_Event/2023/01/0101_expedia/image__slide${image}.png`}
      className='image'
      alt=''
    />
  );
}
