import React, { useState } from 'react'
import Header from './Header';
import Pathfind from './Pathfind';

function App() {
  const [scrollTo, setScrollTo] = useState(0);

  return (
    <Header
    scrollTo={scrollTo}
    setScrollTo={setScrollTo}
    />
    // <Pathfind />
  )
}

export default App