import React, { forwardRef } from 'react';

import '../styles/about.css';

const About = forwardRef(function About(props, ref) {
  return (
    <section id='about' ref={ref}>
      <div className='width-wrapper'>
        <h2 className='title spread'>About</h2>
        <p className='bio spread'>Hello! I am a software developer with two years' experience and a passion for programming.</p>
        <div className='proficiencies'>
          <h4 className='spread'>Proficiencies</h4>
          <div className='pillars'>
            <div className='cn'>Computer Networking</div>
            <div className='pm'>Project Management</div>
            <div className='fs'>Full-stack</div>
          </div>
          <ul>
            <li>C</li>
            <li>C++</li>
            <li>Go</li>
            <li>Python</li>
            <li>Java</li>
            <li>JavaScript</li>
            <li>SQL</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>node.js</li>
            <li>Express.js</li>
            <li>React</li>
            <li>mongodb</li>
          </ul>
        </div>
      </div>

    </section>
  )
});

export default About