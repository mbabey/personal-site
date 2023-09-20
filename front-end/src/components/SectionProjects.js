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
      description: "Agile, team leadership, full-stack, project management.",
      languages: "JavaScript, React, node.js, Express.js, HTML, and CSS",
      images: ["projects-images/oden/ODEN-logo.svg", "projects-images/oden/ODEN-interface.png"],
      imagealts: ["ODEN Logo", "ODEN Interface"]
    },
    {
      title: "CHAT Protocol and Testing Suite",
      abbreviation: "CHAT Protocol",
      demolink: "",
      srclink: "https://github.com/mbabey/chat-server-test-saddle",
      description: "TCP-based network application, application-layer protocol, team leadership, project management.",
      languages: "POSIX C",
      images: ["", "projects-images/chat/chat-rfc.png"],
      imagealts: ["Process Server Diagram", "RFC"]
    },
    {
      title: "Tic-Tac-Toe Game Server on Reliable UDP",
      abbreviation: "UDP Game Server",
      demolink: "",
      srclink: "https://github.com/mbabey/more-reliable-udp",
      description: "UDP-based network application, application-layer protocol, hardware integration",
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
      languages: "C++",
      images: ["projects-images/tsp/graph.png", ""],
      imagealts: ["Connected Graph", "Genetic TSP Output"]
    },
    {
      title: "This Website",
      abbreviation: "This Website",
      demolink: "",
      srclink: "https://github.com/mbabey/personal-site",
      description: "A personal website for displaying my portfolio and to allow other to get in touch.",
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
              description={p.description}
              languages={p.languages}
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