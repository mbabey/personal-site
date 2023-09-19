import React, { forwardRef } from 'react';
import Project from './Project';
import { handleEnterReturnKeypress } from '../scripts/util';

import '../styles/projects.css'

const Projects = forwardRef(function Projects(props, ref) {

  const project_info = [
    {
      title: "Opendata Developer Network - ODEN",
      abbreviation: "ODEN",
      link: "https://terratap-oden-client-v2.web.app",
      description: "Agile, team leadership, full-stack, project management.",
      languages: "JavaScript, React, node.js, Express.js, HTML, and CSS",
      image: ""
    },
    {
      title: "CHAT Protocol and Testing Suite",
      abbreviation: "CHAT Protocol",
      link: "https://github.com/mbabey/chat-server-test-saddle",
      description: "TCP-based network application, application-layer protocol, team leadership, project management.",
      languages: "POSIX C",
      image: ""
    },
    {
      title: "Tic-Tac-Toe Game Server on Reliable UDP",
      abbreviation: "UDP Game Server",
      link: "https://github.com/mbabey/more-reliable-udp",
      description: "UDP-based network application, application-layer protocol, hardware integration",
      languages: "POSIX C, Raspberry Pi & breadboard",
      image: ""
    },
    {
      title: "Custom Shell",
      abbreviation: "Linux Shell",
      link: "https://github.com/mbabey/c-shell",
      description: "Low-level OS interfacing",
      languages: "POSIX C",
      image: ""
    },
    {
      title: "Pokedex API",
      abbreviation: "Pokemon API",
      link: "",
      description: "Full-stack, REST API",
      languages: "JavaScript, React, node.js, Express.js, HTML, and CSS",
      image: ""
    },
    {
      title: "Genetic Traveling Salesperson Algorithm",
      abbreviation: "Genetic TSP",
      link: "https://github.com/mbabey/tsp-genetic",
      description: "A genetic algorithm solution to the traveling salesperson problem",
      languages: "C++",
      image: ""
    },
    {
      title: "This Website",
      abbreviation: "This Website",
      link: "",
      description: "A personal website for displaying my portfolio and to allow other to get in touch.",
      languages: "JavaScript, React, HTML, and CSS",
      image: ""
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
              key={p.title}
              title={p.title}
              link={p.link}
              description={p.description}
              languages={p.languages}
              image={p.image}
            />
          })}
        </div>
      </div>
    </section>
  )
});

export default Projects