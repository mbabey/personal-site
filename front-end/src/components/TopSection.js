import React, { forwardRef } from 'react';
import Pathfind from './Pathfind';

import '../styles/top.css';

const Top = forwardRef(function Top(props, ref) {
  return (
    <section id='top' ref={ref}>
      <div className='hero'>
        <h1>Maxwell<br />Babey</h1>
        <Pathfind />
      </div>
    </section>
  )
});

export default Top