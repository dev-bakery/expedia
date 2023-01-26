import React from 'react'
import NavItem from './item';

export default function Nav() {
    const menuTitles = ["할인혜택", "호텔 찾기", "즐길거리", "검색 가이드"];
    return (
        <div className="box__navigation--category">
            <ul className="list" id="tab__navigation--category">
				{menuTitles.map((title, index) => (<NavItem key={index} title={title} index={index} />))}
			</ul>
        </div>
    )
}
