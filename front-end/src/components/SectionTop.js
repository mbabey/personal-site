import React, { forwardRef } from 'react';
import Pathfind from './Pathfind';
import { handleEnterReturnKeypress } from '../scripts/util';

import '../styles/top.css';

const Top = forwardRef(function Top(props, ref) {
  
  const scrollTo = props.scrollTo;
  const pages = props.pages;

  return (
    <section id='top' ref={ref}>
      <ul className='top-nav'>
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
      <div className='width-wrapper'>
        <h1>Maxwell<br />Babey</h1>
        <div className='socials'>
          <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/maxwell-babey'><img src='linkedin.svg' alt='LinkedIn' /></a>
          <a target='_blank' rel='noreferrer' href='https://github.com/mbabey'><img src='github.svg' alt='GitHub' /></a>
        </div>
        <Pathfind />
      </div>
    </section>
  )
});

export default Top