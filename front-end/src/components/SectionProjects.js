import React, { forwardRef } from 'react';
import Project from './Project';
import { handleEnterReturnKeypress } from '../scripts/util';

import '../styles/projects.css'

const Projects = forwardRef(function Projects(props, ref) {

  const project_info = [
    {
      title: "Opendata Developer Network - ODEN",
      abbreviation: "ODEN",
      demolink: "https://terratap-oden-client-v2.web.app",
      srclink: "",
      description: "The Opendata Developer Network simplifies and streamlines developer workflows by providing a centralized hub for open data. Developers can easily find the data they need, access standardized and ready-to-use datasets, and avoid the time-consuming tasks of manual data conversion and cleaning.",
      outcomes: "In this project, I was the lead on a team of nineteen people. I learned about what it takes to manage a project using agile methodology and about full-stack web development using React, node.js, and Express.js. The team finished what was required of us in just two-and-a-half weeks and received commendation from our industry clients at TerraTap Technologies and from the Faculty of Computing at BCIT.",
      languages: "JavaScript, React, node.js, Express.js, HTML, and CSS",
      images: ["projects-images/oden/ODEN-logo.svg", "projects-images/oden/ODEN-interface.png"],
      imagealts: ["ODEN Logo", "ODEN Interface"]
    },
    {
      title: "CHAT Protocol and Testing Suite",
      abbreviation: "CHAT Protocol",
      demolink: "",
      srclink: "https://github.com/mbabey/chat-server-test-saddle",
      description: "The CHAT Protocol is a TCP-based application-layer protocol for a messaging service similar to Discord or MSN Messenger. Along with the protocol was necessitated the development of programs to use it: clients and servers. Furthermore, a testing suite was developed to ensure the clients and servers adhered properly to the protocol.",
      outcomes: "This was a class project. The class of nineteen was split into six groups of three. Half of those six groups built servers and the other half clients. Astutely, you might see that there would be one person left out of this arrangement; I was that person. It was my responsibility to develop and write the specification for the protocol. I developed the testing programs the other groups would use, creating multi-process-based benchmark server and comprehensive test client programs. I had to be far ahead of the rest of the class, as my product was necessary for them to begin working. In the end, the protocol was too complex to implement in our time frame. However, from this I learned how the importance of clarity and simplicity in specification and communication.",
      languages: "POSIX C",
      images: ["projects-images/chat/chat-rfc.png", "projects-images/chat/chat-server-running.png"],
      imagealts: ["RFC", "Server Running", "Process Server Diagram"]
    },
    {
      title: "Tic-Tac-Toe Game Server on Reliable UDP",
      abbreviation: "UDP Game Server",
      demolink: "",
      srclink: "https://github.com/mbabey/more-reliable-udp",
      description: "A reliable, connection-oriented UDP-based application-layer protocol running a two-player Tic-Tac-Toe game server. The Tic-Tac-Toe is controlled by a breadboard controller attached to a Raspberry Pi. The Pis run the client programs and connect to the server, which can be run on any POSIX platform. This project was built with a partner, Prabh Sokhey.",
      outcomes: "The task of this project was large. Prabh and I had to develop the protocol very carefully and at the same time create the game, its interfaces, and write the low-level code for the breadboard. We split the task up into the game and the server; our designs included UMLs where we specified the API we would require from each other, sequence diagrams for every possible type of interaction between the clients and the server, and pages of documentation. The project was a success, and I learned the advantages of design, thoughtfully created prior to writing a single line of code.",
      languages: "POSIX C, Raspberry Pi & breadboard",
      images: ["projects-images/udp/tic-tac-network.png", "projects-images/udp/reliable-udp-running.png"],
      imagealts: ["Game Network", "Playing the Game"]
    },
    {
      title: "Custom Shell",
      abbreviation: "Linux Shell",
      demolink: "",
      srclink: "https://github.com/mbabey/c-shell",
      description: "Low-level OS interfacing",
      outcomes: "",
      languages: "POSIX C",
      images: ["projects-images/shell/shell-running.png"],
      imagealts: ["Shell Running"]
    },
    {
      title: "Pokedex API",
      abbreviation: "Pokemon API",
      demolink: "https://mb-pokedex-of-pokemon.vercel.app/",
      srclink: "https://github.com/mbabey/comp4537-assignment-3-pokemon-api",
      description: "Full-stack, REST API",
      outcomes: "",
      languages: "JavaScript, React, node.js, Express.js, HTML, and CSS",
      images: ["projects-images/pokedex/pokedex-api-login.png", "projects-images/pokedex/pokedex-api-interface.png"],
      imagealts: ["Pokedex Website Login", "Pokedex Website Interface"]
    },
    {
      title: "Genetic Traveling Salesperson Algorithm",
      abbreviation: "Genetic TSP",
      demolink: "",
      srclink: "https://github.com/mbabey/tsp-genetic",
      description: "A genetic algorithm solution to the traveling salesperson problem",
      outcomes: "",
      languages: "C++",
      images: ["projects-images/tsp/graph.png", "projects-images/tsp/running-tsp.png"],
      imagealts: ["Connected Graph", "Genetic TSP Output"]
    },
    {
      title: "This Website",
      abbreviation: "This Website",
      demolink: "",
      srclink: "https://github.com/mbabey/personal-site",
      description: "A personal website for displaying my portfolio and to allow other to get in touch.",
      outcomes: "",
      languages: "JavaScript, React, HTML, and CSS",
      images: [],
      imagealts: []
    }
  ]

  function displayProject(proj_num) {
    document.querySelectorAll('#projects .wrapper .project.focused').forEach((p) => {
      p.classList.remove('focused');
      const p_a = p.querySelector('a');
      if (p_a) {
        p_a.tabIndex = -1;
      }
    });
    const project_div = document.querySelector(`#projects .wrapper .project:nth-child(${proj_num})`);
    project_div.classList.add('focused');
    const project_div_a = project_div.querySelector('a');
    project_div_a.tabIndex = 0;
  }

  // The offset from the array element into the child node required for displayProject to function properly
  const OFFSET = 2;

  return (
    <section id='projects' ref={ref}>
      <div className='width-wrapper'>
        <h2>Projects</h2>
        <div id='projects-nav'>
          <ul>
            {project_info.map((p, index) => {
              return (
                <li
                  key={p.abbreviation}
                  tabIndex={0}
                  onClick={() => displayProject(index + OFFSET)}
                  onKeyDown={(e) => handleEnterReturnKeypress(e, () => displayProject(index + OFFSET))}
                >
                  {p.abbreviation}
                </li>
              );
            })}
          </ul>
        </div>
        <div className='wrapper'>
          <div className='project focused'>Click a project on the list to see details</div>
          {project_info.map((p) => {
            return <Project
              key={p.abbreviation}
              title={p.title}
              demolink={p.demolink}
              srclink={p.srclink}
              languages={p.languages}
              description={p.description}
              outcomes={p.outcomes}
              images={p.images}
              imagealts={p.imagealts}
            />
          })}
        </div>
      </div>
    </section>
  )
});

export default Projects