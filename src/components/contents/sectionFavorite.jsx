import React from "react";

export default function SectionFavorite() {
  return (
    <div className='box__section7'>
      <div className='box__title-area'>
        <h2 className='for-a11y'>이렇게 검색하세요</h2>
        <p className='for-a11y'>취향에 딱 맞는 호텔을 쉽게 찾을 수 있어요</p>
      </div>
      <div className='box__content-area'>
        <div className='box__info-swiper'></div>
        <a
          href='https://gtour.gmarket.co.kr/TourV2/Search/Hotelmain'
          target='_blank'
          rel='noreferrer'
          className='button__more sprite__expedia'>
          <span className='for-a11y'>호텔 검색하러 가기</span>
        </a>
      </div>
    </div>
  );
}
