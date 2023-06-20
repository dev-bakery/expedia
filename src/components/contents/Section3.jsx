import React, { useState } from "react";

export default function Section3() {
  const [active, setActive] = useState(false);
  const onHandleClick = () => {
    setActive(!active);
  };
  return (
    <div className='box__section3 box__section3-0130'>
      <div id='anchor_coupon'></div>
      <div className='box__title-area'>
        <h2 className='for-a11y'>해외 항공 구매 고객 대상 5% 중복 할인</h2>
        <p className='for-a11y'>발급 당일 사용 가능</p>
      </div>
      <button type='button' className='button sprite__expedia'>
        <span className='for-a11y'>쿠폰받기</span>
      </button>
      <button
        type='button'
        onClick={onHandleClick}
        className={
          active
            ? `button__notice sprite__expedia active`
            : `button__notice sprite__expedia`
        }>
        <span className='for-a11y'>유의사항을 확인해주세요</span>
      </button>
      {active && (
        <ul className='list__notice'>
          <li className='list-item'>
            ∙ 발급 대상 : 2022. 12. 1 (목) 이후 해외 항공 결제 고객
          </li>
          <li className='list-item'>
            ∙ 발급 기간 : 2023. 1. 30 (월) ~ 2. 12 (일)
          </li>
          <li className='list-item'>
            ∙ 사용 기간 : 2023. 1. 30 (월) ~ 2. 12 (일)
          </li>
          <li className='list-item'>∙ 발급 기회 : 기간 내 ID 당 1회</li>
          <li className='list-item'>
            ∙ 할인 대상 : expedia 전 세계 호텔 (일부 브랜드호텔 사용 불가)
          </li>
          <li className='list-item'>
            ∙ 본 쿠폰은 당사의 사정으로 예고없이 변경, 조기종료될 수 있습니다
          </li>
        </ul>
      )}
    </div>
  );
}
