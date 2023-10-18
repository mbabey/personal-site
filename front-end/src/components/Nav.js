import React, { forwardRef } from 'react';
import { handleEnterReturnKeypress } from '../scripts/util';

import '../styles/nav.css';

const Nav = forwardRef(function Nav(props, ref) {
  
  const scrollTo = props.scrollTo;
  const pages = props.pages;

  return (
    <div id='nav' ref={ref}>
      <div className='width-wrapper'>
        <ul>
          <li
            onClick={() => scrollTo(pages.top)} tabIndex={0}
            onKeyDown={(e) => handleEnterReturnKeypress(e, () => scrollTo(pages.top))}
          >
            Home
          </li>
          <li
            onClick={() => scrollTo(pages.about)} tabIndex={0}
            onKeyDown={(e) => handleEnterReturnKeypress(e, () => scrollTo(pages.about))}
          >
            About
          </li>
          <li
            onClick={() => scrollTo(pages.projects)} tabIndex={0}
            onKeyDown={(e) => handleEnterReturnKeypress(e, () => scrollTo(pages.projects))}
          >
            Projects
          </li>
          <li
            onClick={() => scrollTo(pages.contact)} tabIndex={0}
            onKeyDown={(e) => handleEnterReturnKeypress(e, () => scrollTo(pages.contact))}
          >
            Contact
          </li>
        </ul>
      </div>
    </div>
  )
});

export default Nav