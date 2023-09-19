import React, { forwardRef } from 'react';
import Pathfind from './Pathfind';

import '../styles/top.css';

const Top = forwardRef(function Top(props, ref) {
  return (
    <section id='top' ref={ref}>
      <div className='width-wrapper'>
        <h1>Maxwell<br />Babey</h1>
        <div class='socials'>
          <a href='https://www.linkedin.com/in/maxwell-babey'><img id='linkedin' src='linkedin.svg' alt='LinkedIn' /></a>
          <a href='https://github.com/mbabey'><img id='github' src='github.svg' alt='GitHub' /></a>
        </div>
        <Pathfind />
      </div>
    </section>
  )
});

export default Top