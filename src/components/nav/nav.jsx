import React from "react";
// import { useRecoilValue } from "recoil";
// import { navMenu } from "../../atom";
// import NavItem from "./item";

export default function Nav({ page, targetIndex, moveToPage }) {
  // const menuTitles = useRecoilValue(navMenu);
  return (
    <ul className='list' id='tab__navigation--category'>
      {Array.from({ length: page }).map((_, index) => (
        <li className={`list-item list-item${index + 1}`}>
          <a
            href={`#box__anchor${index + 1}`}
            className={
              targetIndex === index
                ? "link sprite__expedia active"
                : "link sprite__expedia"
            }
            onClick={moveToPage(index)}>
            <span className='for-a11y'></span>
          </a>
        </li>
      ))}
      {/* {menuTitles.map((title, index) => (
        <NavItem
          key={index}
          title={title}
          index={index}
          moveToPage={moveToPage}
          targetIndex={targetIndex}
        />
      ))} */}
    </ul>
  );
}
