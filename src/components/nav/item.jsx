import React from "react";

function NavItem({ title, index }) {
  return (
    <li className={`list-item list-item${index + 1}`}>
      <a href={`#box__anchor${index + 1}`} className='link sprite__expedia'>
        <span className='for-a11y'>{title}</span>
      </a>
    </li>
  );
}

export default NavItem;
