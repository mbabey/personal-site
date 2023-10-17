import React, { forwardRef } from 'react';

import '../styles/about.css';

const About = forwardRef(function About(props, ref) {
  return (
    <section id='about' className='width-wrapper' ref={ref}>
        <h2 className='title'>About</h2>
        <p className='bio'>Hello! I am a software developer with two years' experience and a passion for programming.</p>
        <div className='proficiencies'>
          <h4>Proficiencies</h4>
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
    </section>
  )
});

export default About