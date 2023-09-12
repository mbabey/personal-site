import React, { useState } from 'react'
import Nav from './Nav';
import Pathfind from './Pathfind';
import About from './SectionAbout';
import Projects from './SectionProjects';
import Contact from './SectionContact';

import '../styles/global.css';

function App() {
  const [scrollTo, setScrollTo] = useState(0);

  return (
    <>
      <Pathfind />
      <Nav
        setScrollTo={setScrollTo}
      />
      <About />
      <Projects />
      <Contact />
    </>
  )
}

export default App 