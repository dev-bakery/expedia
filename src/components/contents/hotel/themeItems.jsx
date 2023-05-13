import React from "react";

export default function ThemeItems() {
  return (
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
  );
}
