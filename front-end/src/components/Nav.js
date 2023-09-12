import React, { useState, useEffect } from 'react'

import '../styles/nav.css';

function Nav({ pages }) {

  function scrollTo(pageRef) {
    pageRef.current.scrollIntoView({ block: 'start', inline: 'nearest', behavior: 'smooth' });
  }

  Object.entries(pages).forEach((e) => {
    console.log(e);
  })

  const [currentPage, setCurrentPage] = useState(pages.topRef);
  
  // I want the navbar to update the covered category 
  function callback(entries, observer) {
    entries.forEach(element => {
      console.log(element);
    });
  }
  const sectionVisibleObserver = new IntersectionObserver(callback, {threshold: 0.5});
  
  

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