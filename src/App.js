import { useEffect, useRef, useState } from "react";
import { RecoilRoot } from "recoil";
import Header from "./components/header/header";

function App() {
  // let offsetArr = [];
  const page = 4;
  const contentRef = useRef([]);
  const [targetIndex, setTargetIndex] = useState(0);
  const moveToPage = (index) => {
    setTargetIndex(index);
    // contentRef.current[index].scrollIntoView({
    //   behavior: "smooth",
    //   display: "start",
    // });
  };

  const targetRef = useRef(null);
  const [navFixed, setNavFixed] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
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
          <ul className='list' id='tab__navigation--category'>
            <li className='list-item list-item1'>
              <a href='#box__anchor' className='link sprite__expedia'>
                <span className='for-a11y'>할인혜택</span>
              </a>
            </li>
            <li className='list-item list-item2'>
              <a href='#box__anchor' className='link sprite__expedia'>
                <span className='for-a11y'>호텔 찾기</span>
              </a>
            </li>
            <li className='list-item list-item3'>
              <a href='#box__anchor' className='link sprite__expedia'>
                <span className='for-a11y'>즐길거리</span>
              </a>
            </li>
            <li className='list-item list-item4'>
              <a href='#box__anchor' className='link sprite__expedia'>
                <span className='for-a11y'>검색 가이드</span>
              </a>
            </li>
          </ul>
        </div>
        <div className='box__anchor'>
          <div className='box__section1 box__section1-0116'>
            <div className='box__title-area'>
              <h2 className='for-a11y'>전 세계 50만개 호텔을 특가에 만나요</h2>
              <p className='for-a11y'>
                Expedia 회원 혜택을 G마켓에서 누리세요!
              </p>
              <ul className='for-a11y'>
                <li>해외항공 결제하면 최대 10만원 중복 쿠폰</li>
                <li>카드사 추가 할인 최대 2만원 즉시 할인</li>
                <li>
                  할인이 안된다면 캐시백! 최대 10만원 스마일캐시(할인쿠폰
                  사용불가 호텔 결제시)
                </li>
              </ul>
            </div>
            <a
              href='http://rpp.gmarket.co.kr/?exhib=18596'
              target='_blank'
              rel='noreferrer'
              className='button sprite__expedia'>
              <span className='for-a11y'>쿠폰받기</span>
            </a>
          </div>
          <div className='box__section2 box__section2-0130'>
            <div className='box__title-area'>
              <h2 className='for-a11y'>누구나 매일매일 5% 할인쿠폰</h2>
              <p className='for-a11y'>발급 당일 사용 가능</p>
            </div>
            <button type='button' className='button sprite__expedia'>
              <span className='for-a11y'>쿠폰받기</span>
            </button>
            <button type='button' className='button__notice sprite__expedia'>
              <span className='for-a11y'>유의사항을 확인해주세요</span>
            </button>
          </div>
          <div className='box__section3 box__section3-0130'>
            <div id='anchor_coupon'></div>
            <div className='box__title-area'>
              <h2 className='for-a11y'>
                해외 항공 구매 고객 대상 5% 중복 할인
              </h2>
              <p className='for-a11y'>발급 당일 사용 가능</p>
            </div>
            <button type='button' className='button sprite__expedia'>
              <span className='for-a11y'>쿠폰받기</span>
            </button>
            <button type='button' className='button__notice sprite__expedia'>
              <span className='for-a11y'>유의사항을 확인해주세요</span>
            </button>
          </div>
          <div className='box__section4 box__section4-0130'>
            <div className='box__title-area'>
              <h2 className='for-a11y'>일부 브랜드 호텔 대상 5% 스마일캐시</h2>
              <p className='for-a11y'>
                입실일 기준 익월 15일 일괄 지급, 20만원이상 결제 시 최대 10만원
              </p>
            </div>
            <button type='button' className='button__notice sprite__expedia'>
              <span className='for-a11y'>유의사항을 확인해주세요</span>
            </button>
          </div>
        </div>
        <div className='box__section5 box__anchor'>
          <div id='anchor_hotel'></div>
          <div className='box__title-area'>
            <h2 className='for-a11y'>내게 딱 맞는 해외 호텔 찾기</h2>
            <p className='for-a11y'>한국인들의 평점이 높은 호텔만 골랐어요</p>
          </div>
          <div className='box__content-area'>
            <h3 className='text__title'>
              <strong className='text__keyword'>오사카</strong>를 선택하셨네요
            </h3>
            <div className='box__tab-contents'>
              <a href='' className='link__tab active'>
                <span className='text'>오사카</span>
              </a>
              <a href='' className='link__tab'>
                <span className='text'>도쿄</span>
              </a>
              <a href='' className='link__tab'>
                <span className='text'>방콕</span>
              </a>
              <a href='' className='link__tab'>
                <span className='text'>다낭</span>
              </a>
              <a href='' className='link__tab'>
                <span className='text'>발리</span>
              </a>
              <a href='' className='link__tab'>
                <span className='text'>싱가포르</span>
              </a>
              <a href='' className='link__tab'>
                <span className='text'>하와이</span>
              </a>
              <a href='' className='link__tab'>
                <span className='text'>라스베가스</span>
              </a>
              <a href='' className='link__tab'>
                <span className='text'>파리</span>
              </a>
              <a href='' className='link__tab'>
                <span className='text'>런던</span>
              </a>
            </div>
            <h3 id='anchor_city' className='text__title'>
              <strong className='text__keyword'>오사카</strong>에서 어떤 여행을
              하고 싶으세요?
            </h3>
            <p className='text__desc'>테마에 맞는 호텔을 찾아드릴게요</p>
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
                  <span className='text'>
                    엔저에 부담없는 쇼핑을 즐기고 싶어요
                  </span>
                </label>
              </li>
            </ul>
            <h3 id='anchor_theme' className='text__title'>
              당신이 좋아할 <strong className='text__keyword'>오사카</strong>
              호텔을 찾았어요!
            </h3>
            <ul className='list__products'>
              <li className='list-item'>
                <img
                  src='http://image.gmarket.co.kr/Gmkt_Event/2023/01/0101_expedia/hotel/image__hotel1_1_1.png'
                  className='image'
                  alt=''
                />
                <a href='' className='link sprite__expedia'>
                  <span className='for-a11y'>구매하기</span>
                </a>
              </li>
            </ul>
            <button
              type='button'
              onclick="fnMove('5')"
              className='button__more sprite__expedia'>
              <span className='for-a11y'>다른 호텔 찾아보기</span>
            </button>
          </div>
        </div>
        <div className='box__section6 box__anchor'>
          <div className='box__title-area'>
            <h2 className='for-a11y'>패스/현지투어도 둘러보세요</h2>
            <p className='for-a11y'>가장 많이 찾는 상품을 추천드릴게요</p>
          </div>
          <div className='box__content-area'>
            <div className='box__tab-contents'>
              <a href='' className='link__tab active'>
                <span className='text'>오사카</span>
              </a>
              <a href='' className='link__tab'>
                <span className='text'>도쿄</span>
              </a>
              <a href='' className='link__tab'>
                <span className='text'>방콕</span>
              </a>
              <a href='' className='link__tab'>
                <span className='text'>다낭</span>
              </a>
              <a href='' className='link__tab'>
                <span className='text'>발리</span>
              </a>
              <a href='' className='link__tab'>
                <span className='text'>싱가포르</span>
              </a>
              <a href='' className='link__tab'>
                <span className='text'>하와이</span>
              </a>
              <a href='' className='link__tab'>
                <span className='text'>라스베가스</span>
              </a>
              <a href='' className='link__tab'>
                <span className='text'>파리</span>
              </a>
              <a href='' className='link__tab'>
                <span className='text'>런던</span>
              </a>
            </div>
            <h3 className='text__title'>
              미리 사면 유용한 <strong className='text__keyword'>오사카</strong>{" "}
              여행 필수품
            </h3>
            <ul className='list__products'>
              <li className='list-item'>
                <span className='box__thumb'>
                  <img
                    src='http://image.gmarket.co.kr/Gmkt_Event/2023/01/0101_expedia/hotel/image__dummy.png'
                    className='image'
                    alt=''
                  />
                </span>
                <span className='text__title'>오사카 시내중심 시장 투어</span>
                <span className='text__price'>299,000원</span>
                <a href='' className='link sprite__expedia'>
                  <span className='for-a11y'>구매하기</span>
                </a>
              </li>
              <li className='list-item'>
                <span className='box__thumb'>
                  <img
                    src='http://image.gmarket.co.kr/Gmkt_Event/2023/01/0101_expedia/hotel/image__dummy.png'
                    className='image'
                    alt=''
                  />
                </span>
                <span className='text__title'>오사카 시내중심 시장 투어</span>
                <span className='text__price'>299,000원</span>
                <a href='' className='link sprite__expedia'>
                  <span className='for-a11y'>구매하기</span>
                </a>
              </li>
              <li className='list-item'>
                <span className='box__thumb'>
                  <img
                    src='http://image.gmarket.co.kr/Gmkt_Event/2023/01/0101_expedia/hotel/image__dummy.png'
                    className='image'
                    alt=''
                  />
                </span>
                <span className='text__title'>오사카 시내중심 시장 투어</span>
                <span className='text__price'>299,000원</span>
                <a href='' className='link sprite__expedia'>
                  <span className='for-a11y'>구매하기</span>
                </a>
              </li>
              <li className='list-item'>
                <span className='box__thumb'>
                  <img
                    src='http://image.gmarket.co.kr/Gmkt_Event/2023/01/0101_expedia/hotel/image__dummy.png'
                    className='image'
                    alt=''
                  />
                </span>
                <span className='text__title'>오사카 시내중심 시장 투어</span>
                <span className='text__price'>299,000원</span>
                <a href='' className='link sprite__expedia'>
                  <span className='for-a11y'>구매하기</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='box__section7 box__anchor'>
          <div className='box__title-area'>
            <h2 className='for-a11y'>이렇게 검색하세요</h2>
            <p className='for-a11y'>
              취향에 딱 맞는 호텔을 쉽게 찾을 수 있어요
            </p>
          </div>
          <div className='box__content-area'>
            <div className='box__info-swiper'>
              <div className='swiper-container'>
                <div className='swiper-wrapper'>
                  <div className='swiper-slide'>
                    <img
                      src='http://image.gmarket.co.kr/Gmkt_Event/2023/01/0101_expedia/image__slide1.png'
                      className='image'
                      alt=''
                    />
                  </div>
                  <div className='swiper-slide'>
                    <img
                      src='http://image.gmarket.co.kr/Gmkt_Event/2023/01/0101_expedia/image__slide2.png'
                      className='image'
                      alt=''
                    />
                  </div>
                </div>
              </div>

              <div className='swiper-button-prev'></div>
              <div className='swiper-button-next'></div>
              <div className='swiper-pagination'></div>
            </div>
            <a
              href='https://gtour.gmarket.co.kr/TourV2/Search/Hotelmain'
              target='_blank'
              rel='noreferrer'
              className='button__more sprite__expedia'>
              <span className='for-a11y'>호텔 검색하러 가기</span>
            </a>
          </div>
        </div>
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
