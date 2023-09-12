import React, { forwardRef } from 'react'

const Contact = forwardRef(function Contact(props, ref) {
  return (
    <section id='contact' ref={ref}>
      <h2>Contact Me</h2>
      <p>By Email: babeymax@gmail.com</p>
      <p>Or send me a note using the form below:</p>
      <form>
        <input type='text' placeholder='Name' required></input>
        <input type='email' placeholder='Email'></input>
        <input type='text' placeholder='Phone Number'></input>
        <input type='text' placeholder='Message'></input>
        <button type='submit'>Send</button>
      </form>
    </section>
  )
});

export default Contact