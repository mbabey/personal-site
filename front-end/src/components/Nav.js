import React from 'react';
import { handleEnterReturnKeypress } from '../scripts/util';

import '../styles/nav.css';

function Nav({ scrollTo, pages }) {
  return (
    <div id='nav'>
      <div className='width-wrapper'>
        <ul>
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
}

export default Nav