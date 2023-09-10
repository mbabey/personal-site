import React from 'react'
import Pathfind from './Pathfind';

function Header({scrollTo, setScrollTo}) {

  const pages = {
    top: 0,
    about: 1,
    aboutInterests: 2,
    aboutProficiencies: 3,
    aboutExperience: 4,
    projects: 5,
    projectsOden: 6,
    projectsChat: 7,
    projectsUdp: 8,
    projectsShell: 9,
    projectsPokedex: 10,
    contact: 11
  }

  return (
    <div>
      <ul>
        <li onClick={() => setScrollTo(pages.about)}>About</li>
        <ul>
          <li onClick={() => setScrollTo(pages.aboutInterests)}>Interests</li>
          <li onClick={() => setScrollTo(pages.aboutProficiencies)}>Proficiencies</li>
          <li onClick={() => setScrollTo(pages.aboutExperience)}>Experience</li>
        </ul>
        <li onClick={() => setScrollTo(pages.projects)}>Projects</li>
        <ul>
          <li onClick={() => setScrollTo(pages.projectsOden)}>Opendata Developer Network (ODEN)</li>
          <li onClick={() => setScrollTo(pages.projectsChat)}>CHAT Protocol and Testing Suite</li>
          <li onClick={() => setScrollTo(pages.projectsUdp)}>Tic-Tac-Toe on Reliable UDP</li>
          <li onClick={() => setScrollTo(pages.projectsShell)}>Custom Shell</li>
          <li onClick={() => setScrollTo(pages.projectsPokedex)}>Pokedex API</li>
        </ul>
        <li onClick={() => setScrollTo(pages.contact)}>Contact Me</li>
      </ul>
    </div>
  )
}

export default Header