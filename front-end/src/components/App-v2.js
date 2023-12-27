import React from 'react'
import Pathfind from '../pathfind/Pathfind';

import '../styles/app.css';

export default function App2() {

  const PATHFIND_SETTINGS = {
    size_x: 20,
    size_y: 20
  };

  const URLS = {
    github: 'https://github.com/mbabey',
    linkedin: 'https://www.linkedin.com/in/maxwell-babey'
  };

  return (
    <>
      {/* <Pathfind size_x={PATHFIND_SETTINGS.size_x} size_y={PATHFIND_SETTINGS.size_y} /> */}
      <div className='pathfind-placeholder'>
        Pathfind placeholder
      </div>
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
        <button className='btn github' onClick={() => openUrl(URLS.github)}>
          <img src='github.svg' alt='GitHub' />
        </button>
        <button className='btn linkedin' onClick={() => openUrl(URLS.linkedin)}>
          <img src='linkedin.svg' alt='LinkedIn' />
        </button>
        <button className='btn contact'>
          Contact Me &gt;
        </button>
      </div>
      {/* <div className='pathfind-bar'>
        <div className=''></div>
      </div> */}
    </>
  )
}

function openUrl(url) {
  window.open(url, '_blank');
}
