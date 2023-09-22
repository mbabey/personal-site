import React, { forwardRef } from 'react';

import '../styles/contact.css';

const Contact = forwardRef(function Contact(props, ref) {
  return (
    <section id='contact' ref={ref}>
      <div className='width-wrapper'>
        <h2>Contact</h2>
        <p>Reach out to me through the form below with your name, email, and message:</p>
        <form autoComplete='on' action='/go' method='post'>
          <input type='text' placeholder='Your Name' required></input>
          <input type='email' placeholder='Your Email' required></input>
          <textarea type='text' placeholder='Message' required></textarea>
          <button type='submit'>Send</button>
        </form>
        <div className='socials'>
          <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/maxwell-babey'><img src='linkedin.svg' alt='LinkedIn' /></a>
          <a target='_blank' rel='noreferrer' href='https://github.com/mbabey'><img src='github.svg' alt='GitHub' /></a>
        </div>
      </div>
    </section>
  )
});

export default Contact