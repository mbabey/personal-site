import React, { forwardRef } from 'react';

import '../styles/about.css';

const About = forwardRef(function About(props, ref) {
  return (
    <section id='about' ref={ref}>
      <div className='width-wrapper'>
        <h2 className='title'>About</h2>
        <p>I am a software developer with two years' experience and a specialization in computer networking.</p>
        <div className='stats-wrapper'>
          <div className='proficiencies'>
            <h4>Proficiencies</h4>
            <div className='lt-wrapper'>
              <div className='languages'>
                <h5>Languages</h5>
                <ul>
                  <li>C</li>
                  <li>C++</li>
                  <li>Go</li>
                  <li>Python</li>
                  <li>Java</li>
                  <li>JavaScript</li>
                  <li>SQL</li>
                </ul>
              </div>
              <div className='tools'>
                <h5>Tools</h5>
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
          </div>
            <div className='experience'>
              <h4>Experience</h4>
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
            <div className='interests'>
              <h4>Interests</h4>
              <ul>
                <li>Low-level Systems</li>
                <li>Networking</li>
                <li>Cybersecurity</li>
                <li>Teaching</li>
                <li>Outdoorsmanship</li>
              </ul>
            </div>
        </div>
      </div>
    </section>
  )
});

export default About