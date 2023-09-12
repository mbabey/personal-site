import React from 'react'

import '../styles/nav.css';

function Nav({pages}) {

  function scrollTo(pageRef)
  {
    console.log(pageRef);
    pageRef.current.scrollIntoView(true);
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