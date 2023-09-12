import React from 'react'

function About() {
  return (
    <div id='about'>
      <h2>About</h2>
      <div id='interests'>
        <h3>Interests</h3>
        <ul>
          <li>Low-level Systems</li>
          <li>Networking</li>
          <li>Cybersecurity</li>
          <li>Outdoorsmanship</li>
        </ul>
      </div>
      <div id='proficiencies'>
        <h3>Proficiencies</h3>
        <div id='languages'>
          <h4>Languages</h4>
          <ul>
            <li>C</li>
            <li>C++</li>
            <li>Java</li>
            <li>JavaScript</li>
            <li>SQL</li>
          </ul>
        </div>
        <div id='tools'>
          <h4>Tools</h4>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>node.js</li>
            <li>Express.js</li>
            <li>React</li>
            <li>mongodb</li>
          </ul>
        </div>
      </div>
      <div id='experience'>
        <h3>Experience</h3>
        <ul>
          <li>Leading teams, large and small</li>
          <li>Agile development</li>
          <li>Project management</li>
          <li>Solution design and analysis</li>
          <li>Full-stack web applications</li>
          <li>RESTful APIs</li>
          <li>TCP- and UDP-based network applications</li>
          <li>Berkeley Sockets programming</li>
          <li>Application-layer network protocols</li>
          <li>Algorithms and data structures</li>
        </ul>
      </div>
    </div>
  )
}

export default About