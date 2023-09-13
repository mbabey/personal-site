import React, { forwardRef } from 'react';

import '../styles/contact.css';

const Contact = forwardRef(function Contact(props, ref) {
  return (
    <section id='contact' ref={ref}>
      <p>Contact me by email at babeymax@gmail.com or send me a note using the form below:</p>
      <form>
        <input type='text' placeholder='Name' required></input>
        <input type='email' placeholder='Email' required></input>
        <textarea type='text' placeholder='Message' required></textarea>
        <button type='submit'>Send</button>
      </form>
    </section>
  )
});

export default Contact