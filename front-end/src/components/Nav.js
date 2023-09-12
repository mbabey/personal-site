import React from 'react'

import '../styles/nav.css';

function Nav({pages}) {

  function scrollTo(pageRef)
  {
    pageRef.current.scrollIntoView({block: 'start', inline: 'nearest', behavior: 'smooth'});
  }

  return (
    <div id='nav'>
      <ul>
        <li onClick={() => scrollTo(pages.aboutRef)}>About</li>
        <li onClick={() => scrollTo(pages.projectsRef)}>Projects</li>
        <li onClick={() => scrollTo(pages.contactRef)}>Contact Me</li>
      </ul>
    </div>
  )
}

export default Nav