import React from 'react'
import { useRecoilValue } from 'recoil';
import { navMenu } from '../../atom';
import NavItem from './item';

export default function Nav() {
    const menuTitles = useRecoilValue(navMenu);
    return (
        <div className="box__navigation--category">
            <ul className="list" id="tab__navigation--category">
				{menuTitles.map((title, index) => (<NavItem key={index} title={title} index={index} />))}
			</ul>
        </div>
    )
}
