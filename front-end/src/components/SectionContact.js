import React, { forwardRef } from 'react';

import '../styles/contact.css';

const Contact = forwardRef(function Contact(props, ref) {
  return (
    <section id='contact' ref={ref}>
      <div className='width-wrapper'>
        <h2>Contact Me</h2>
        <form autoComplete='on' action='/go' method='post'>
          <input type='text' placeholder='Your Name' required></input>
          <input type='email' placeholder='Your Email' required></input>
          <textarea type='text' placeholder='Message' required></textarea>
          <button type='submit'>Send</button>
        </form>
      </div>
    </section>
  )
});

export default Contact