import React, { useState } from 'react'
import Header from './Header';
import About from './About';
import Project from './Project';
import Pathfind from './Pathfind';

function App() {
  const [scrollTo, setScrollTo] = useState(0);

  return (
    <>
      <Header
        setScrollTo={setScrollTo}
      />
      {/* <Pathfind /> */}
      <About />
      <Project
        title={"Opendata Developer Network - ODEN"}
        link={"link"}
        description={"Agile, team leadership, full-stack, project management."}
        languages={"JavaScript, React, node.js, Express.js, HTML, and CSS."}
        image={""}
      />
      <Project
        title={"CHAT Protocol and Testing Suite"}
        link={"https://github.com/mbabey/chat-server-test-saddle"}
        description={"TCP-based network application, application-layer protocol, team leadership, project management."}
        langauges={"POSIX C"}
        image={""}
      />
      <Project
        title={"Tic-Tac-Toe Game Server on Reliable UDP"}
        link={"https://github.com/mbabey/more-reliable-udp"}
        description={"UDP-based network application, application-layer protocol, hardware integration"}
        langauges={"POSIX C, Raspberry Pi & breadboard"}
        image={""}
      />
      <Project
        title={"Custom Shell"}
        link={"https://github.com/mbabey/c-shell"}
        description={"Low-level OS interfacing"}
        langauges={"POSIX C"}
        image={""}
      />
      <Project
        title={"Pokedex API"}
        link={""}
        description={"Full-stack, REST API"}
        langauges={"JavaScript, React, node.js, Express.js, HTML, CSS"}
        image={""}
      />
      <Project
        title={"Genetic Traveling Salesperson Algorithm"}
        link={"https://github.com/mbabey/tsp-genetic"}
        description={"A genetic algorithm solution to the traveling salesperson problem"}
        langauges={"C++"}
        image={""}
      />
      
    </>
  )
}

export default App 