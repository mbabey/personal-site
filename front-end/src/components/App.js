import React, { useRef } from 'react'
import Pathfind from './Pathfind';
import Nav from './Nav';
import About from './SectionAbout';
import Projects from './SectionProjects';
import Contact from './SectionContact';

import '../styles/global.css';

function App() {

  const topRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <Pathfind ref={topRef} />
      <Nav pages={[topRef, aboutRef, projectsRef, contactRef]} />
      <About ref={aboutRef} />
      <Projects ref={projectsRef} />
      <Contact ref={contactRef} />
    </>
  )
}

export default App 