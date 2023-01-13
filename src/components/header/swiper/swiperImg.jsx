import React from 'react'

export default function SwiperImg({image}) {
  return (
    <img src={`http://image.gmarket.co.kr/Gmkt_Event/2023/01/0101_expedia/visual/image__header-slide${image}.jpg`} className="image" alt="" />
  )
}
