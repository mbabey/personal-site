import React, { forwardRef } from 'react'
import Project from './Project';

import '../styles/projects.css'

const Projects = forwardRef(function Projects(props, ref) {

  const project_info = [
    {
      title: "Opendata Developer Network - ODEN",
      link: "https://terratap-oden-client-v2.web.app",
      description: "Agile, team leadership, full-stack, project management.",
      languages: "JavaScript, React, node.js, Express.js, HTML, and CSS.",
      image: ""
    },
    {
      title: "CHAT Protocol and Testing Suite",
      link: "https://github.com/mbabey/chat-server-test-saddle",
      description: "TCP-based network application, application-layer protocol, team leadership, project management.",
      languages: "POSIX C",
      image: ""
    },
    {
      title: "Tic-Tac-Toe Game Server on Reliable UDP",
      link: "https://github.com/mbabey/more-reliable-udp",
      description: "UDP-based network application, application-layer protocol, hardware integration",
      languages: "POSIX C, Raspberry Pi & breadboard",
      image: ""
    },
    {
      title: "Custom Shell",
      link: "https://github.com/mbabey/c-shell",
      description: "Low-level OS interfacing",
      languages: "POSIX C",
      image: ""
    },
    {
      title: "Pokedex API",
      link: "",
      description: "Full-stack, REST API",
      languages: "JavaScript, React, node.js, Express.js, HTML, and CSS.",
      image: ""
    },
    {
      title: "Genetic Traveling Salesperson Algorithm",
      link: "https://github.com/mbabey/tsp-genetic",
      description: "A genetic algorithm solution to the traveling salesperson problem",
      languages: "C++",
      image: ""
    }
  ]

  return (
    <section id='projects' ref={ref}>
      <h2>Projects</h2>
      <div className='wrapper'>
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
    </section>
  )
});

export default Projects