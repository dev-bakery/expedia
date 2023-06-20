import React, { forwardRef } from "react";
import Section1 from "./contents/Section1";
import Section2 from "./contents/Section2";
import Section3 from "./contents/Section3";
import Section4 from "./contents/Section4";
import SwiperContainer from "./contents/swiper/swiperContainer";
import Section5 from "./contents/Section5";

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
      {i === 1 && <Section5 />}
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
              <SwiperContainer />
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
