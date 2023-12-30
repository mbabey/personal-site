import React, { forwardRef, useRef, useState } from 'react';
import handleEnterReturnKeypress from '../scripts/handleEnterKeypress';
import { hideContactForm } from '../scripts/formMovement';
import validator from 'validator';
import emailjs from '@emailjs/browser';

const Contact = forwardRef(function Contact(props, ref) {

  const USER_MSG_SEND = 'Send';
  const USER_MSG_SENDING = 'Sending...';
  const USER_MSG_SUCCESS = 'Sent!';
  const USER_MSG_FAILURE = 'Message failed to send';
  const USER_MSG_RESEND = 'Already sent';

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
      errmsg.current.style.opacity = 1;
      return;
    }

    errmsg.current.style.opacity = 0;
    submitBtn.current.style.backgroundColor = 'rgb(193, 80, 0)'; // Dark orange.
    setBtnContent(USER_MSG_SENDING);

    const handleSubmitSuccess = (result) => {
      name.current.value = '';
      email.current.value = '';
      message.current.value = '';
      submitBtn.current.style.backgroundColor = 'rgb(224, 130, 63)'; // Orange; original colour.
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
    <div className='contact-form-box' ref={ref}>
      <h2 className='title'>Contact Me</h2>
      <div ref={errmsg} className='errmsg'>Invalid form input; please fill all fields correctly.</div>
      <form className='contact-form' autoComplete='on' ref={form}>
        <input tabIndex={-1} ref={name} type='name' placeholder='Name' name='name'
          onKeyUp={() => validateName(name)}></input>
        <input tabIndex={-1} ref={email} type='email' placeholder='Email' name='email'
          onKeyUp={() => validateEmail(email)}></input>
        <textarea tabIndex={-1} ref={message} type='text' placeholder='Message' name='message'
          onKeyUp={() => validateMessage(message)}></textarea>
        <button tabIndex={-1} className='btn btn-submit' ref={submitBtn} type='submit'
          onClick={handleSubmit}
          onKeyDown={(e) => handleEnterReturnKeypress(e, () => handleSubmit(e))}
        >
          {btnContent}
        </button>
        <button tabIndex={-1} type='button' className='btn btn-close' onClick={() => hideContactForm(ref.current, { nameDOM: name.current, emailDOM: email.current, messageDOM: message.current }, errmsg.current)}>Close</button>
      </form>
    </div>
  )
});

function validateName(name) {
  if (name.current.value === '') {
    name.valid = false;
    name.current.classList.add('invalid');
    name.current.classList.remove('valid');
  } else {
    name.valid = true;
    name.current.classList.add('valid');
    name.current.classList.remove('invalid');
  }
}

function validateEmail(email) {
  if (email.current.value === '' || !validator.isEmail(email.current.value)) {
    email.valid = false;
    email.current.classList.add('invalid');
    email.current.classList.remove('valid');
  } else {
    email.valid = true;
    email.current.classList.add('valid');
    email.current.classList.remove('invalid');
  }
}

function validateMessage(message) {
  if (message.current.value === '') {
    message.valid = false;
    message.current.classList.add('invalid');
    message.current.classList.remove('valid');
  } else {
    message.valid = true;
    message.current.classList.add('valid');
    message.current.classList.remove('invalid');
  }
}

export default Contact