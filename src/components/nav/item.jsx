import React from "react";

function NavItem({ title, index, moveToPage, targetIndex }) {
  return (
    <li className={`list-item list-item${index + 1}`}>
      <a
        href={`#box__anchor${index + 1}`}
        className={
          targetIndex === index
            ? "link sprite__expedia active"
            : "link sprite__expedia"
        }
        onClick={moveToPage(index)}>
        <span className='for-a11y'>{title}</span>
      </a>
    </li>
  );
}

export default NavItem;
