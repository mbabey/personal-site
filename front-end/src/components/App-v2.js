import React from 'react'
import Pathfind from '../pathfind/Pathfind';

import '../styles/app.css';

export default function App2() {
  return (
    <>
      <Pathfind size_x={20} size_y={20} />
      <div className='h-text'>
        <div className='name'>
          Maxwell Babey
        </div>
        <div className='tag'>
          Structure.<br />Software.<br />Solutions
        </div>
        <div className='statement'>
          I do end-to-end organization, planning, and delivery of web applications.
        </div>
      </div>
      <div className='buttons'>
        
      </div>
    </>
  )
}
