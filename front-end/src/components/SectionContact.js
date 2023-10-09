import React, { forwardRef, useRef, useState } from 'react';
import { handleEnterReturnKeypress } from '../scripts/util';
import validator from 'validator';
import emailjs from '@emailjs/browser';

import '../styles/contact.css';

const Contact = forwardRef(function Contact(props, ref) {

  const USER_MSG_SEND = 'Send';
  const USER_MSG_SENDING = 'Message sending...';
  const USER_MSG_SUCCESS = 'Success! Message sent';
  const USER_MSG_FAILURE = 'Message failed to send; try again later';
  const USER_MSG_RESEND = 'You\'ve already pressed this; try again later';

  const form = useRef(null);
  const submitBtn = useRef(null);
  const name = useRef(null);
  const email = useRef(null);
  const message = useRef(null);
  const errmsg = useRef(null);

  const [btnContent, setBtnContent] = useState(USER_MSG_SEND);

  function handleSubmit(e) {
    e.preventDefault();
    if (btnContent !== USER_MSG_SEND) {
      submitBtn.current.style.backgroundColor = '#534959'; // Dark grey.
      setBtnContent(USER_MSG_RESEND);
      return;
    }

    // Validate content.
    if (!(name.valid && email.valid && message.valid)) {
      validateName(name);
      validateEmail(email);
      validateMessage(message);
      errmsg.current.hidden = false;
      return;
    }

    errmsg.current.hidden = true;
    submitBtn.current.style.backgroundColor = '#4C6F61'; // Dark green.
    setBtnContent(USER_MSG_SENDING);

    const handleSubmitSuccess = (result) => {
      name.current.value = '';
      email.current.value = '';
      message.current.value = '';
      submitBtn.current.style.backgroundColor = '#5ba456'; // Bright green; original colour.
      setBtnContent(USER_MSG_SUCCESS);
    }

    const handleSubmitError = (error) => {
      submitBtn.current.style.backgroundColor = '#FF343B'; // Red.
      setBtnContent(USER_MSG_FAILURE);
      console.log(error);
    }

    emailjs.sendForm(process.env.REACT_APP_EMAIL_SERVICE, process.env.REACT_APP_EMAIL_TEMPLATE, form.current, process.env.REACT_APP_EMAIL_KEY)
      .then(handleSubmitSuccess, handleSubmitError
      ).catch(handleSubmitError);
  }

  return (
    <section id='contact' ref={ref}>
      <div className='width-wrapper'>
        <h2 className='title'>Contact</h2>
        <p>Reach out to me through the form below with your name, email, and message:</p>
        <form autoComplete='on' ref={form}>
          <input ref={name} type='name' placeholder='Your Name' name='name'
            onKeyUp={() => validateName(name)}></input>
          <input ref={email} type='email' placeholder='Your Email' name='email'
            onKeyUp={() => validateEmail(email)}></input>
          <textarea ref={message} type='text' placeholder='Message' name='message'
            onKeyUp={() => validateMessage(message)}></textarea>
          <div ref={errmsg} id='errmsg' hidden>Invalid form input; please fill all fields correctly.</div>
          <button ref={submitBtn} type='submit'
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

function validateName(name) {
  if (name.current.value === '') {
    name.valid = false;
    name.current.classList.add('invalid');
  } else {
    name.valid = true;
    name.current.classList.remove('invalid');
  }
}

function validateEmail(email) {
  if (email.current.value === '' || !validator.isEmail(email.current.value)) {
    email.valid = false;
    email.current.classList.add('invalid');
  } else {
    email.valid = true;
    email.current.classList.remove('invalid');
  }
}

function validateMessage(message) {
  if (message.current.value === '') {
    message.valid = false;
    message.current.classList.add('invalid');
  } else {
    message.valid = true;
    message.current.classList.remove('invalid');
  }
}

export default Contact