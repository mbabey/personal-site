import React from 'react';
import { handleEnterReturnKeypress } from '../scripts/util';

import '../styles/nav.css';

function Nav({ scrollTo, pages }) {

  // const pageObserver = new IntersectionObserver(observerCallback, {threshold: 0.5});
  // Object.entries(pages).forEach((entry) => {
  //   console.log(entry);
  //   let element = entry[1].current;
  //   console.log(element);
  //   // pageObserver.observe(element);
  // });

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
            Contact Me
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Nav