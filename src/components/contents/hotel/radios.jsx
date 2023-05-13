import React from "react";

export default function Radios() {
  return (
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
  );
}
