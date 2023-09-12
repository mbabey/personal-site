import React, { useState } from 'react'
import Header from './Header';
import Pathfind from './Pathfind';
import About from './SectionAbout';
import Projects from './SectionProjects';
import Contact from './SectionContact';

function App() {
  const [scrollTo, setScrollTo] = useState(0);

  return (
    <>
      <Pathfind />
      <Header
        setScrollTo={setScrollTo}
      />
      <About />
      <Projects />
      <Contact />
    </>
  )
}

export default App 