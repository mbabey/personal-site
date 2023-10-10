import React, { forwardRef } from 'react';

import '../styles/about.css';

const About = forwardRef(function About(props, ref) {
  return (
    <section id='about' ref={ref}>
      <div className='width-wrapper'>
        <h2 className='title'>About</h2>
        <p className='bio'>Hello! I am a software developer with two years' experience, passion, and knowledge of everything below:</p>
        <div className='wordcloud'>
          <img src='wordcloud.svg' alt='wordcloud' />
        </div>
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
      </div>
    </section>
  )
});

export default About