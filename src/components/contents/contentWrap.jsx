import React, { forwardRef } from "react";
import SectionBenefit from "./sectionBenefit";
import SectionCoupon from "./sectionCoupon";
import SectionFavorite from "./sectionFavorite";
import SectionHotel from "./sectionHotel";
import SectionOverlap from "./sectionOverlap";
import SectionTour from "./sectionTour";

function ContentWrap({ i }, ref) {
  return (
    <div id='box__anchor1' className='box__anchor' ref={ref}>
      {i === 0 && (
        <div id='box__anchor1' className='box__anchor'>
          <SectionBenefit />
          <SectionCoupon />
          <SectionOverlap />
        </div>
      )}
      {i === 1 && (
        <div id='box__anchor2' className='box__anchor'>
          <SectionHotel />
        </div>
      )}

      {i === 2 && (
        <div id='box__anchor3' className='box__anchor'>
          <SectionTour />
        </div>
      )}
      {i === 3 && (
        <div id='box__anchor4' className='box__anchor'>
          <SectionFavorite />
        </div>
      )}
    </div>
  );
}

export default forwardRef(ContentWrap);
