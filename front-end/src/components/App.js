import React, { useRef } from 'react'
import Nav from './Nav';
import Pathfind from './Pathfind';
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
    topRef,
    aboutRef,
    projectsRef,
    contactRef
  }

  return (
    <>
      <Pathfind ref={topRef} />
      <Nav pages={pages} />
      <About ref={aboutRef} />
      <Projects ref={projectsRef} />
      <Contact ref={contactRef} />
    </>
  )
}

export default App 