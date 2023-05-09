import React from "react";

export default function SectionHotel() {
  return (
    <div className='box__section5'>
      <div id='anchor_hotel'></div>
      <div className='box__title-area'>
        <h2 className='for-a11y'>내게 딱 맞는 해외 호텔 찾기</h2>
        <p className='for-a11y'>한국인들의 평점이 높은 호텔만 골랐어요</p>
      </div>
      <div className='box__content-area'>
        <h3 className='text__title'>
          <strong className='text__keyword'>오사카</strong>를 선택하셨네요
        </h3>
        <div className='box__tab-contents'>
          <a
            href='http://localhost:3000/#box__anchor1'
            className='link__tab active'>
            <span className='text'>오사카</span>
          </a>
          <a href='http://localhost:3000/#box__anchor1' className='link__tab'>
            <span className='text'>도쿄</span>
          </a>
          <a href='http://localhost:3000/#box__anchor1' className='link__tab'>
            <span className='text'>방콕</span>
          </a>
          <a href='http://localhost:3000/#box__anchor1' className='link__tab'>
            <span className='text'>다낭</span>
          </a>
          <a href='http://localhost:3000/#box__anchor1' className='link__tab'>
            <span className='text'>발리</span>
          </a>
          <a href='http://localhost:3000/#box__anchor1' className='link__tab'>
            <span className='text'>싱가포르</span>
          </a>
          <a href='http://localhost:3000/#box__anchor1' className='link__tab'>
            <span className='text'>하와이</span>
          </a>
          <a href='http://localhost:3000/#box__anchor1' className='link__tab'>
            <span className='text'>라스베가스</span>
          </a>
          <a href='http://localhost:3000/#box__anchor1' className='link__tab'>
            <span className='text'>파리</span>
          </a>
          <a href='http://localhost:3000/#box__anchor1' className='link__tab'>
            <span className='text'>런던</span>
          </a>
        </div>
        <h3 id='anchor_city' className='text__title'>
          <strong className='text__keyword'>오사카</strong>에서 어떤 여행을 하고
          싶으세요?
        </h3>
        <p className='text__desc'>테마에 맞는 호텔을 찾아드릴게요</p>
        <ul className='list__radio'>
          <li className='list-item'>
            <label for='hotel1_1' className='box__label'>
              <input
                type='radio'
                name='hotel1'
                id='hotel1_1'
                className='input__radio sprite__expedia'
                checked
              />
              <span className='text'>엔저에 부담없는 쇼핑을 즐기고 싶어요</span>
            </label>
          </li>
        </ul>
        <h3 id='anchor_theme' className='text__title'>
          당신이 좋아할 <strong className='text__keyword'>오사카</strong> 호텔을
          찾았어요!
        </h3>
        <ul className='list__products'>
          <li className='list-item'>
            <img
              src='http://image.gmarket.co.kr/Gmkt_Event/2023/01/0101_expedia/hotel/image__hotel1_1_1.png'
              className='image'
              alt=''
            />
            <a
              href='http://localhost:3000/#box__anchor1'
              className='link sprite__expedia'>
              <span className='for-a11y'>구매하기</span>
            </a>
          </li>
        </ul>
        <button
          type='button'
          onclick="fnMove('5')"
          className='button__more sprite__expedia'>
          <span className='for-a11y'>다른 호텔 찾아보기</span>
        </button>
      </div>
    </div>
  );
}
