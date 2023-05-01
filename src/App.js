import { useEffect, useRef, useState } from "react";
import { RecoilRoot } from "recoil";
import SectionBenefit from "./components/contents/sectionBenefit";
import SectionCoupon from "./components/contents/sectionCoupon";
import SectionOverlap from "./components/contents/sectionOverlap";
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
        <div className='box__anchor'>
          <SectionBenefit />
          <SectionCoupon />
          <SectionOverlap />
        </div>
      </div>
    </RecoilRoot>
  );
}

export default App;
