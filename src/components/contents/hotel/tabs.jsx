import React from "react";

export default function Tabs() {
  return (
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
  );
}
