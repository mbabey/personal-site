import React, { forwardRef } from 'react';
import Pathfind from './Pathfind';

import '../styles/top.css';

const Top = forwardRef(function Top(props, ref) {
  return (
    <section id='top' ref={ref}>
      <div className='width-wrapper'>
        <h1>Maxwell<br />Babey</h1>
        <div className='socials'>
          <a target='_blank' href='https://www.linkedin.com/in/maxwell-babey'><img src='linkedin.svg' alt='LinkedIn' /></a>
          <a target='_blank' href='https://github.com/mbabey'><img src='github.svg' alt='GitHub' /></a>
        </div>
        <Pathfind />
      </div>
    </section>
  )
});

export default Top