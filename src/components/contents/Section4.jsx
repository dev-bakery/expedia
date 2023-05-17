import React, { useState } from "react";

export default function Section4() {
  const [active, setActive] = useState(false);
  const onHandleClick = () => {
    setActive(!active);
  };
  return (
    <div className='box__section4 box__section4-0130'>
      <div className='box__title-area'>
        <h2 className='for-a11y'>일부 브랜드 호텔 대상 5% 스마일캐시</h2>
        <p className='for-a11y'>
          입실일 기준 익월 15일 일괄 지급, 20만원이상 결제 시 최대 10만원
        </p>
      </div>
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
          <li class='list-item'>
            ∙ 대상 : 할인쿠폰 사용이 불가한 일부 브랜드 호텔 결제 시 스마일캐시
            지급
          </li>
          <li class='list-item'>
            ∙ 지급 : 입실일 기준 익월 15일 구매자 ID로 일괄 지급
          </li>
          <li class='list-item'>∙ 사용 : 지급 후 3개월 이내</li>
          <li class='list-item'>
            ∙ 할인쿠폰과 스마일캐시 중복 사용은 불가합니다
          </li>
          <li class='list-item'>
            ∙ 본 이벤트는 당사의 사정으로 예고없이 변경, 조기종료될 수 있습니다
          </li>
          <li class='list-item'>
            ∙ 입실 전 취소할 경우 캐시백 지급 대상에서 제외됩니다
          </li>
        </ul>
      )}
    </div>
  );
}
