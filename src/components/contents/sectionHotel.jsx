import React from "react";
import MoreButton from "./hotel/moreButton";
import Radios from "./hotel/radios";
import RadiosTitle from "./hotel/radiosTitle";
import Tabs from "./hotel/tabs";
import TabTitle from "./hotel/tabTitle";
import ThemeItems from "./hotel/themeItems";
import ThemeTitle from "./hotel/themeTitle";

export default function SectionHotel() {
  return (
    <div className='box__section5'>
      <div id='anchor_hotel'></div>
      <div className='box__title-area'>
        <h2 className='for-a11y'>내게 딱 맞는 해외 호텔 찾기</h2>
        <p className='for-a11y'>한국인들의 평점이 높은 호텔만 골랐어요</p>
      </div>
      <div className='box__content-area'>
        <TabTitle />
        <Tabs />
        <RadiosTitle />
        <Radios />
        <ThemeTitle />
        <ThemeItems />
        <MoreButton />
      </div>
    </div>
  );
}
