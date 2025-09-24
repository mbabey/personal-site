import React from 'react'
import Pathfind from '../pathfind/Pathfind';
import SVGLibrary from './SVGLibrary';

import '../styles/app.css';

function openUrlNewTab(url) {
  window.open(url, '_blank');
}

export default function App() {

  const PATHFIND_SETTINGS = {
    grid_size_x: 10,
    grid_size_y: 10,
    max_column_height_px: 50,
    column_width_px: 45,
    entity_move_interval_ms: 250,
    animation_duration_ms: 2000,
    animation_bounce_distance_px: 10
  };

  const URLS = {
    github: 'https://github.com/mbabey',
    linkedin: 'https://www.linkedin.com/in/maxwell-babey',
    resumeFile: '/maxwell-babey-resume.pdf',
  };

  return (
    <>
      <div className='pathfind-box'>
        <Pathfind
          grid_size_x={PATHFIND_SETTINGS.grid_size_x}
          grid_size_y={PATHFIND_SETTINGS.grid_size_y}
          max_column_height_px={PATHFIND_SETTINGS.max_column_height_px}
          column_width_px={PATHFIND_SETTINGS.column_width_px}
          entity_move_interval_ms={PATHFIND_SETTINGS.entity_move_interval_ms}
          animation_duration_ms={PATHFIND_SETTINGS.animation_duration_ms}
          animation_bounce_distance_px={PATHFIND_SETTINGS.animation_bounce_distance_px}
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
        <button className='btn contact' onClick={() => openUrlNewTab(URLS.resumeFile)}>
          <div>
            View Resume {<SVGLibrary.ExternalLink />}
          </div>
        </button>
      </div>
    </>
  )
}
