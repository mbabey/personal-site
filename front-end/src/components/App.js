import React, { useRef } from 'react'
import Nav from './Nav';
import Top from './TopSection';
import About from './SectionAbout';
import Projects from './SectionProjects';
import Contact from './SectionContact';

import '../styles/global.css';

function App() {

  const topRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const pages = {
    top: 0,
    about: 1,
    projects: 2,
    contact: 3
  }
  
  function getPageRef(pageNum) {
    let pageRef;
  
    switch (pageNum) {
      case pages.top:
        {
          pageRef = topRef;
          break;
        }
      case pages.about:
        {
          pageRef = aboutRef;
          break;
        }
      case pages.projects:
        {
          pageRef = projectsRef;
          break;
        }
      case pages.contact:
        {
          pageRef = contactRef;
          break;
        }
      default:
        {
          pageRef = topRef;
        }
    }
  
    return pageRef;
  }

  function scrollTo(pageNum) {
    const pageRef = getPageRef(pageNum);
    if (pageRef.current) {
      pageRef.current.scrollIntoView({ block: 'start', inline: 'nearest', behavior: 'smooth' });
    }
  }

  return (
    <div id="wrapall">
      <Top ref={topRef} />
      <Nav scrollTo={scrollTo} pages={pages} />
      <About ref={aboutRef} />
      <Projects ref={projectsRef} />
      <Contact ref={contactRef} />
    </div>
  )
}

export default App 