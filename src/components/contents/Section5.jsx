import React, { useState } from "react";

import arrayData from "../../api/data";

export default function Section5() {
  const [activeIndex, setActiveIndex] = useState(0);
  // const [data, setData] = useState(arrayData);

  console.log(arrayData);
  return (
    <div className='box__section5'>
      <div className='box__title-area'>
        <h2 className='for-a11y'>내게 딱 맞는 해외 호텔 찾기</h2>
        <p className='for-a11y'>한국인들의 평점이 높은 호텔만 골랐어요</p>
      </div>
      <div className='box__content-area'>
        <h3 className='text__title'>
          <strong className='text__keyword'>{arrayData[0].title}</strong>를
          선택하셨네요
        </h3>
        <div className='box__tab-contents'>
          {arrayData.map((item, index) => {
            return (
              <a href='' className='link__tab' key={index}>
                <span className='text'>{arrayData[index].title}</span>
              </a>
            );
          })}
        </div>
        <h3 id='anchor_city' className='text__title'>
          <strong className='text__keyword'>{arrayData[0].title}</strong>에서
          어떤 여행을 하고 싶으세요?
        </h3>
        <p className='text__desc'>테마에 맞는 호텔을 찾아드릴게요</p>
        <ul className='list__radio'>
          {arrayData[activeIndex].theme.map((item, index) => {
            return (
              <li className='list-item' key={index}>
                <label
                  htmlFor={`hotel${index + 1}_${index + 1}`}
                  className='box__label'>
                  <input
                    type='radio'
                    name='hotel1'
                    id={`hotel${index + 1}_${index + 1}`}
                    className='input__radio sprite__expedia'
                  />
                  <span className='text'>{arrayData[index].theme[index]}</span>
                </label>
              </li>
            );
          })}
        </ul>
        <h3 id='anchor_theme' className='text__title'>
          당신이 좋아할
          <strong className='text__keyword'>{arrayData[0].title}</strong>호텔을
          찾았어요!
        </h3>
        <ul className='list__products'>
          {arrayData[activeIndex].products[activeIndex].map((item, index) => {
            return (
              <li className='list-item' key={index}>
                <img
                  src={
                    arrayData[activeIndex].products[activeIndex][index].imgUrl
                  }
                  className='image'
                  alt={
                    arrayData[activeIndex].products[activeIndex][index].altText
                  }
                />
                <a
                  href={
                    arrayData[activeIndex].products[activeIndex][index].landUrl
                  }
                  className='link sprite__expedia'>
                  <span className='for-a11y'>구매하기</span>
                </a>
              </li>
            );
          })}
        </ul>
        <button type='button' className='button__more sprite__expedia'>
          <span className='for-a11y'>다른 호텔 찾아보기</span>
        </button>
      </div>
    </div>
  );
}
