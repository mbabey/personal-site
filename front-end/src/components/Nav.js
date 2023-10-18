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
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="16.000000pt" height="16.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
              <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"  stroke="none">
                <path d="M2370 5113 c-371 -35 -653 -114 -961 -269 -406 -203 -782 -548 -1029 -944 -179 -286 -309 -655 -362 -1025 -17 -118 -17 -512 0 -630 42 -295 120 -553 242 -800 137 -280 272 -468 494 -691 221 -220 412 -357 681 -489 188 -92 309 -137 500 -185 500 -126 1002 -102 1490 71 150 53 408 183 540 271 560 374 952 942 1095 1588 33 150 50 291 57 465 15 426 -73 832 -263 1214 -124 250 -263 447 -458 648 -214 222 -430 379 -711 518 -296 146 -572 225 -900 255 -102 9 -333 11 -415 3z m545 -342 c628 -106 1158 -448 1511 -977 179 -267 296 -573 351 -909 24 -153 24 -497 0 -650 -108 -668 -474 -1222 -1042 -1580 -243 -153 -537 -261 -850 -312 -154 -24 -497 -24 -650 1 -657 107 -1198 456 -1557 1006 -168 257 -281 557 -335 885 -24 153 -24 497 0 650 81 497 291 912 636 1255 382 381 862 605 1401 654 108 10 418 -4 535 -23z" />
                <path d="M2495 3666 c-16 -8 -222 -207 -457 -442 -373 -375 -427 -434 -433 -466 -11 -61 3 -108 44 -149 41 -41 88 -55 149 -44 32 6 76 45 319 288 l283 281 2 -796 c3 -787 3 -797 24 -824 39 -53 71 -69 134 -69 63 0 95 16 134 69 21 27 21 37 24 824 l2 796 283 -281 c304 -304 306 -305 394 -288 49 9 109 69 118 118 17 91 29 77 -433 541 -242 242 -441 434 -459 442 -40 17 -89 17 -128 0z" />
              </g>
            </svg>
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