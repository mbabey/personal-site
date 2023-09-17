import React, { forwardRef } from 'react';
import Pathfind from './Pathfind';


const Top = forwardRef(function Top(props, ref) {
  return (
    <div id='top' ref={ref}>
      <Pathfind />
    </div>
  )
});

export default Top