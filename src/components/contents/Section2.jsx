import React, { useState } from "react";

export default function Section2() {
  const [active, setActive] = useState(false);
  const onHandleClick = () => {
    setActive(!active);
  };
  return (
    <div className='box__section2 box__section2-0130'>
      <div className='box__title-area'>
        <h2 className='for-a11y'>누구나 매일매일 5% 할인쿠폰</h2>
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
        <ul class='list__notice'>
          <li class='list-item'>∙ 발급 기간 : 2023. 1. 30 (월) ~ 2. 12 (일)</li>
          <li class='list-item'>∙ 사용 기간 : 발급 당일 사용 가능</li>
          <li class='list-item'>∙ 발급 기회 : ID 당 하루 1회</li>
          <li class='list-item'>
            ∙ 할인 대상 : expedia 전 세계 호텔 (일부 브랜드호텔 사용 불가)
          </li>
          <li class='list-item'>
            ∙ 본 쿠폰은 당사의 사정으로 예고없이 변경, 조기종료될 수 있습니다
          </li>
        </ul>
      )}
    </div>
  );
}
