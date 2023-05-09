import { useEffect, useRef, useState } from "react";
import { RecoilRoot } from "recoil";
import SectionBenefit from "./components/contents/sectionBenefit";
import SectionCoupon from "./components/contents/sectionCoupon";
import SectionFavorite from "./components/contents/sectionFavorite";
import SectionHotel from "./components/contents/sectionHotel";
import SectionOverlap from "./components/contents/sectionOverlap";
import SectionTour from "./components/contents/sectionTour";
import Header from "./components/header/header";
import Nav from "./components/nav/nav";

function App() {
  const targetRef = useRef(null);
  const [navFixed, setNavFixed] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    console.log("scrolled");
    if (window.scrollY >= targetRef.current.offsetTop) {
      setNavFixed(true);
    } else {
      setNavFixed(false);
    }
  };
  return (
    <RecoilRoot>
      <Header />
      <div className='box__event--container'>
        <div
          className={
            navFixed
              ? "js-box__fixed box__navigation--category"
              : "box__navigation--category"
          }
          ref={targetRef}>
          <Nav />
        </div>
        <div id='box__anchor1' className='box__anchor'>
          <SectionBenefit />
          <SectionCoupon />
          <SectionOverlap />
        </div>
        <div id='box__anchor2' className='box__anchor'>
          <SectionHotel />
        </div>
        <div id='box__anchor3' className='box__anchor'>
          <SectionTour />
        </div>
        <div id='box__anchor4' className='box__anchor'>
          <SectionFavorite />
        </div>
      </div>
    </RecoilRoot>
  );
}

export default App;
