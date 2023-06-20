import { useEffect, useRef, useState } from "react";
import { RecoilRoot } from "recoil";
import Header from "./components/header/header";
import Contents from "./components/Contents";

function App() {
  let offsetArr = [];
  const page = 4;
  const navTitles = ["할인혜택", "호텔 찾기", "즐길거리", "검색 가이드"];
  const contentRef = useRef([]);
  const [targetIndex, setTargetIndex] = useState(null);

  const targetRef = useRef(null);
  const [navFixed, setNavFixed] = useState(false);

  const handleScroll = (e) => {
    const { scrollTop } = e.target.scrollingElement;
    setTargetIndex(
      offsetArr.findIndex(([from, to]) => scrollTop >= from && scrollTop < to)
    );

    if (window.scrollY >= targetRef.current.offsetTop) {
      setNavFixed(true);
    } else {
      setNavFixed(false);
      setTargetIndex(null);
    }
  };

  useEffect(() => {
    offsetArr = Array.from(contentRef.current).map((item, i) => {
      const [offsetTop, scrollHeight] = [item.offsetTop, item.clientHeight];
      return [offsetTop - scrollHeight, offsetTop + scrollHeight];
    });
  }, [offsetArr]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
          <ul className='list' id='tab__navigation--category'>
            {Array.from({ length: page }).map((_, i) => (
              <li className={`list-item list-item${i + 1}`} key={i}>
                <a
                  href={`#anchor${i + 1}`}
                  className={
                    targetIndex === i
                      ? `link sprite__expedia active`
                      : `link sprite__expedia`
                  }>
                  <span className='for-a11y'>{navTitles[i]}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        {Array.from({ length: page }).map((_, i) => (
          <Contents
            key={i}
            page={page}
            ref={(r) => (contentRef.current[i] = r)}
            i={i}
          />
        ))}
        <div className='box__section8'>
          <div className='box__title-area'>
            <h2 className='for-a11y'>G마켓 항공권과 함께 하세요</h2>
            <ul className='for-a11y'>
              <li>최저가 항공권 검색</li>
              <li>365일 스마일클럽 혜택</li>
              <li>스마일페이 결제 혜택</li>
            </ul>
          </div>
          <a
            href='https://air.gmarket.co.kr/gm/init/lp/lpMain.do'
            target='_blank'
            rel='noreferrer'
            className='button__more sprite__expedia'>
            <span className='for-a11y'>항공권 검색하러 가기</span>
          </a>
        </div>
      </div>
    </RecoilRoot>
  );
}

export default App;
