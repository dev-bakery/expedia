import React, { forwardRef } from "react";
import Section1 from "./contents/Section1";
import Section2 from "./contents/Section2";
import Section3 from "./contents/Section3";
import Section4 from "./contents/Section4";

const Contents = ({ i }, ref) => {
  return (
    <div ref={ref} id={`anchor${i + 1}`} className='box__anchor'>
      {i === 0 && (
        <>
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
        </>
      )}
      {i === 1 && (
        <div className='box__section5'>
          <div className='box__title-area'>
            <h2 className='for-a11y'>내게 딱 맞는 해외 호텔 찾기</h2>
            <p className='for-a11y'>한국인들의 평점이 높은 호텔만 골랐어요</p>
          </div>
          <div className='box__content-area'>
            <h3 className='text__title'>
              <strong className='text__keyword'>오사카</strong>를 선택하셨네요
            </h3>
            <div className='box__tab-contents'>
              <a href='' className='link__tab active'>
                <span className='text'>오사카</span>
              </a>
              <a href='' className='link__tab'>
                <span className='text'>도쿄</span>
              </a>
              <a href='' className='link__tab'>
                <span className='text'>방콕</span>
              </a>
              <a href='' className='link__tab'>
                <span className='text'>다낭</span>
              </a>
              <a href='' className='link__tab'>
                <span className='text'>발리</span>
              </a>
              <a href='' className='link__tab'>
                <span className='text'>싱가포르</span>
              </a>
              <a href='' className='link__tab'>
                <span className='text'>하와이</span>
              </a>
              <a href='' className='link__tab'>
                <span className='text'>라스베가스</span>
              </a>
              <a href='' className='link__tab'>
                <span className='text'>파리</span>
              </a>
              <a href='' className='link__tab'>
                <span className='text'>런던</span>
              </a>
            </div>
            <h3 id='anchor_city' className='text__title'>
              <strong className='text__keyword'>오사카</strong>에서 어떤 여행을
              하고 싶으세요?
            </h3>
            <p className='text__desc'>테마에 맞는 호텔을 찾아드릴게요</p>
            <ul className='list__radio'>
              <li className='list-item'>
                <label htmlFor='hotel1_1' className='box__label'>
                  <input
                    type='radio'
                    name='hotel1'
                    id='hotel1_1'
                    className='input__radio sprite__expedia'
                  />
                  <span className='text'>
                    엔저에 부담없는 쇼핑을 즐기고 싶어요
                  </span>
                </label>
              </li>
            </ul>
            <h3 id='anchor_theme' className='text__title'>
              당신이 좋아할 <strong className='text__keyword'>오사카</strong>
              호텔을 찾았어요!
            </h3>
            <ul className='list__products'>
              <li className='list-item'>
                <img
                  src='http://image.gmarket.co.kr/Gmkt_Event/2023/01/0101_expedia/hotel/image__hotel1_1_1.png'
                  className='image'
                  alt=''
                />
                <a href='' className='link sprite__expedia'>
                  <span className='for-a11y'>구매하기</span>
                </a>
              </li>
            </ul>
            <button type='button' className='button__more sprite__expedia'>
              <span className='for-a11y'>다른 호텔 찾아보기</span>
            </button>
          </div>
        </div>
      )}
      {i === 2 && (
        <div className='box__section6'>
          <div className='box__title-area'>
            <h2 className='for-a11y'>패스/현지투어도 둘러보세요</h2>
            <p className='for-a11y'>가장 많이 찾는 상품을 추천드릴게요</p>
          </div>
          <div className='box__content-area'>
            <div className='box__tab-contents'>
              <a href='' className='link__tab active'>
                <span className='text'>오사카</span>
              </a>
              <a href='' className='link__tab'>
                <span className='text'>도쿄</span>
              </a>
              <a href='' className='link__tab'>
                <span className='text'>방콕</span>
              </a>
              <a href='' className='link__tab'>
                <span className='text'>다낭</span>
              </a>
              <a href='' className='link__tab'>
                <span className='text'>발리</span>
              </a>
              <a href='' className='link__tab'>
                <span className='text'>싱가포르</span>
              </a>
              <a href='' className='link__tab'>
                <span className='text'>하와이</span>
              </a>
              <a href='' className='link__tab'>
                <span className='text'>라스베가스</span>
              </a>
              <a href='' className='link__tab'>
                <span className='text'>파리</span>
              </a>
              <a href='' className='link__tab'>
                <span className='text'>런던</span>
              </a>
            </div>
            <h3 className='text__title'>
              미리 사면 유용한 <strong className='text__keyword'>오사카</strong>{" "}
              여행 필수품
            </h3>
            <ul className='list__products'>
              <li className='list-item'>
                <span className='box__thumb'>
                  <img
                    src='http://image.gmarket.co.kr/Gmkt_Event/2023/01/0101_expedia/hotel/image__dummy.png'
                    className='image'
                    alt=''
                  />
                </span>
                <span className='text__title'>오사카 시내중심 시장 투어</span>
                <span className='text__price'>299,000원</span>
                <a href='' className='link sprite__expedia'>
                  <span className='for-a11y'>구매하기</span>
                </a>
              </li>
              <li className='list-item'>
                <span className='box__thumb'>
                  <img
                    src='http://image.gmarket.co.kr/Gmkt_Event/2023/01/0101_expedia/hotel/image__dummy.png'
                    className='image'
                    alt=''
                  />
                </span>
                <span className='text__title'>오사카 시내중심 시장 투어</span>
                <span className='text__price'>299,000원</span>
                <a href='' className='link sprite__expedia'>
                  <span className='for-a11y'>구매하기</span>
                </a>
              </li>
              <li className='list-item'>
                <span className='box__thumb'>
                  <img
                    src='http://image.gmarket.co.kr/Gmkt_Event/2023/01/0101_expedia/hotel/image__dummy.png'
                    className='image'
                    alt=''
                  />
                </span>
                <span className='text__title'>오사카 시내중심 시장 투어</span>
                <span className='text__price'>299,000원</span>
                <a href='' className='link sprite__expedia'>
                  <span className='for-a11y'>구매하기</span>
                </a>
              </li>
              <li className='list-item'>
                <span className='box__thumb'>
                  <img
                    src='http://image.gmarket.co.kr/Gmkt_Event/2023/01/0101_expedia/hotel/image__dummy.png'
                    className='image'
                    alt=''
                  />
                </span>
                <span className='text__title'>오사카 시내중심 시장 투어</span>
                <span className='text__price'>299,000원</span>
                <a href='' className='link sprite__expedia'>
                  <span className='for-a11y'>구매하기</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
      {i === 3 && (
        <div className='box__section7'>
          <div className='box__title-area'>
            <h2 className='for-a11y'>이렇게 검색하세요</h2>
            <p className='for-a11y'>
              취향에 딱 맞는 호텔을 쉽게 찾을 수 있어요
            </p>
          </div>
          <div className='box__content-area'>
            <div className='box__info-swiper'>
              <div className='swiper-container'>
                <div className='swiper-wrapper'>
                  <div className='swiper-slide'>
                    <img
                      src='http://image.gmarket.co.kr/Gmkt_Event/2023/01/0101_expedia/image__slide1.png'
                      className='image'
                      alt=''
                    />
                  </div>
                  <div className='swiper-slide'>
                    <img
                      src='http://image.gmarket.co.kr/Gmkt_Event/2023/01/0101_expedia/image__slide2.png'
                      className='image'
                      alt=''
                    />
                  </div>
                </div>
              </div>

              <div className='swiper-button-prev'></div>
              <div className='swiper-button-next'></div>
              <div className='swiper-pagination'></div>
            </div>
            <a
              href='https://gtour.gmarket.co.kr/TourV2/Search/Hotelmain'
              target='_blank'
              rel='noreferrer'
              className='button__more sprite__expedia'>
              <span className='for-a11y'>호텔 검색하러 가기</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default forwardRef(Contents);
