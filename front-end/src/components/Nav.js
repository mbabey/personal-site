import React from 'react'
import '../styles/nav.css';

function Nav({ scrollTo, pages }) {

  // const pageObserver = new IntersectionObserver(observerCallback, {threshold: 0.5});
  // Object.entries(pages).forEach((entry) => {
  //   console.log(entry);
  //   let element = entry[1].current;
  //   console.log(element);
  //   // pageObserver.observe(element);
  // });

  return (
    <div id='nav'>
      <ul>
        <li onClick={() => scrollTo(pages.about)}>About</li>
        <li onClick={() => scrollTo(pages.projects)}>Projects</li>
        <li onClick={() => scrollTo(pages.contact)}>Contact Me</li>
      </ul>
    </div>
  )
}

export default Nav