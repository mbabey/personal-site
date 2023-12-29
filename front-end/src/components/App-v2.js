import React from 'react'
import Pathfind from '../pathfind/Pathfind';
import SVGLibrary from './svg';

import '../styles/app.css';

export default function App2() {

  const PATHFIND_SETTINGS = {
    size_x: 10,
    size_y: 10,
    max_height_px: 50,
    width_px: 50,
    update_interval_ms: 500
  };

  const URLS = {
    github: 'https://github.com/mbabey',
    linkedin: 'https://www.linkedin.com/in/maxwell-babey'
  };

  return (
    <>
      <div className='pathfind-box'>
        <Pathfind
          size_x={PATHFIND_SETTINGS.size_x}
          size_y={PATHFIND_SETTINGS.size_y}
          max_height_px={PATHFIND_SETTINGS.max_height_px}
          width_px={PATHFIND_SETTINGS.width_px}
          update_interval_ms={PATHFIND_SETTINGS.update_interval_ms}
        />
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
    </>
  )
}

function openUrlNewTab(url) {
  window.open(url, '_blank');
}
