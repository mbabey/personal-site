import React from 'react'
import Pathfind from './Pathfind';

function Header({setScrollTo}) {

  const pages = {
    top: 0,
    about: 1,
    projects: 2,
    contact: 3
  }

  return (
    <div>
      <ul>
        <li onClick={() => setScrollTo(pages.about)}>About</li>
        <li onClick={() => setScrollTo(pages.projects)}>Projects</li>
        <li onClick={() => setScrollTo(pages.contact)}>Contact Me</li>
      </ul>
    </div>
  )
}

export default Header