import React from 'react'
import Pathfind from '../pathfind/Pathfind';
import SVGLibrary from './svg';

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

      <div className='pathfind-box'>
        <div className='pathfind-placeholder'>
          Pathfind placeholder
        </div>
      </div>
      <div className='h-text'>
        <div className='name'>
          <div className='text-content'>
            Maxwell<br />Babey
          </div>
        </div>
        <div className='tag'>
          <div className='text-content'>
            Structure.<br />Software.<br />Solutions.
          </div>
        </div>
        <div className='statement'>
          <div className='text-content'>
            I do end-to-end organization, planning, and delivery of web applications.
          </div>
        </div>
      </div>
      <div className='buttons'>
        <button className='btn svg-btn' onClick={() => openUrlNewTab(URLS.github)}>
          <SVGLibrary.GitHub />
        </button>
        <button className='btn svg-btn' onClick={() => openUrlNewTab(URLS.linkedin)}>
          <SVGLibrary.LinkedIn />
        </button>
        <button className='btn contact'>
          <div>
            Contact Me &gt;
          </div>
        </button>
      </div>
      {/* <div className='pathfind-bar'>
        <div className=''></div>
      </div> */}
    </>
  )
}

function openUrlNewTab(url) {
  window.open(url, '_blank');
}
