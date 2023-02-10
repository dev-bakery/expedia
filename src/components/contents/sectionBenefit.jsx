import React from 'react'

function SectionBenefit() {
    return(
        <div className="box__section1">
            <div className="box__title-area">
                <h2 className="for-a11y">전 세계 50만개 호텔을 특가에 만나요</h2>
                <p className="for-a11y">Expedia 회원 혜택을 G마켓에서 누리세요!</p>
                <ul className="for-a11y">
                    <li>해외항공 결제하면 최대 10만원 중복 쿠폰</li>
                    <li>카드사 추가 할인 최대 2만원 즉시 할인</li>
                    <li>할인이 안된다면 캐시백! 최대 10만원 스마일캐시(할인쿠폰 사용불가 호텔 결제시)</li>
                </ul>
            </div>
            <a href="http://rpp.gmarket.co.kr/?exhib=18596" target="_blank" rel='noopener noreferrer' className="button sprite__expedia"><span className="for-a11y">쿠폰받기</span></a>
        </div>
    )
}

export default SectionBenefit;