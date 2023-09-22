import React, { forwardRef, useRef, useState } from 'react';
import { handleEnterReturnKeypress } from '../scripts/util';
import emailjs from '@emailjs/browser';

import '../styles/contact.css';

const Contact = forwardRef(function Contact(props, ref) {

  const USER_MSG_SEND = 'Send';
  const USER_MSG_SENDING = 'Message sending...';
  const USER_MSG_SUCCESS = 'Success! Message sent';
  const USER_MSG_FAILURE = 'Message failed to send; try again later';
  const USER_MSG_RESEND = 'You\'ve already pressed this; try again later';

  const form = useRef(null);
  const [btnContent, setBtnContent] = useState(USER_MSG_SEND);

  function handleSubmit(e) {
    e.preventDefault();
    if (btnContent !== USER_MSG_SEND)
    {
      setBtnContent(USER_MSG_RESEND);
      return;
    }

    setBtnContent(USER_MSG_SENDING);

    emailjs.sendForm(process.env.REACT_APP_EMAIL_SERVICE, process.env.REACT_APP_EMAIL_TEMPLATE, form.current, process.env.REACT_APP_EMAIL_KEY)
      .then((result) => {
        clearForm(form.current);
        setBtnContent(USER_MSG_SUCCESS);
      }, (error) => {
        setBtnContent(USER_MSG_FAILURE);
        console.log(error);
      }).catch((error) => {
        setBtnContent(USER_MSG_FAILURE);
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
            {btnContent}
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

function clearForm(form) {
  const inputs = form.querySelectorAll('input');
  const textarea = form.querySelector('textarea');

  inputs.forEach(i => {
    i.value = "";
  });
  textarea.value = "";
}

export default Contact