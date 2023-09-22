import React, { forwardRef, useRef } from 'react';
import { handleEnterReturnKeypress } from '../scripts/util';
import emailjs from '@emailjs/browser';

import '../styles/contact.css';

const Contact = forwardRef(function Contact(props, ref) {

  const form = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();

    console.log('here');
    console.log(process.env.REACT_APP_EMAIL_KEY);
    console.log(process.env.REACT_APP_EMAIL_SERVICE);
    console.log(process.env.REACT_APP_EMAIL_TEMPLATE);
    console.log(process.env.NODE_ENV);

    emailjs.sendForm(process.env.REACT_APP_EMAIL_SERVICE, process.env.REACT_APP_EMAIL_TEMPLATE, form.current, process.env.REACT_APP_EMAIL_KEY)
      .then((result) => {
        console.log(result);
      }).catch((error) => {
        console.log(error);
      });
  }

  return (
    <section id='contact' ref={ref}>
      <div className='width-wrapper'>
        <h2>Contact</h2>
        <p>Reach out to me through the form below with your name, email, and message:</p>
        <form autoComplete='on' ref={form}>
          <input type='name' placeholder='Your Name' name='name' required></input>
          <input type='email' placeholder='Your Email' name='email' required></input>
          <textarea type='text' placeholder='Message' name='message' required></textarea>
          <button
            type='submit'
            onClick={handleSubmit}
            onKeyDown={(e) => handleEnterReturnKeypress(e, () => handleSubmit(e))}
          >
            Send
          </button>
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