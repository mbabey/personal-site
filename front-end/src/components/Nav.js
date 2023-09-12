import React, { useState, useEffect } from 'react'

import '../styles/nav.css';

function Nav({ pages }) {

  
  function scrollTo(pageRef) {
    pageRef.current.scrollIntoView({ block: 'start', inline: 'nearest', behavior: 'smooth' });
  }
  
  // console.log(pages);

  // const pageObserver = new IntersectionObserver(observerCallback, {threshold: 0.5});
  // pages.forEach((entry) => {
  //   console.log(entry);
  //   let element = entry.current;
  //   console.log(element);
  //   // pageObserver.observe(element);
  // });
  
  // function observerCallback(entries, observer) {
  //   entries.forEach(element => {
  //     console.log(element);
  //   });
  // }
  
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