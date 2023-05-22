import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Keyboard } from "swiper";

import SwiperImg from "./swiperImg";

export default function SwiperContainer() {
  const slides = Array.from({ length: 2 }).map((el, index) => `${index + 1}`);
  return (
    <Swiper
      navigation={true}
      pagination={{
        clickable: true,
      }}
      keyboard={true}
      modules={[Pagination, Navigation, Keyboard]}>
      {slides.map((slideContent, index) => (
        <SwiperSlide key={slideContent} virtualIndex={index}>
          <SwiperImg image={slideContent} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
