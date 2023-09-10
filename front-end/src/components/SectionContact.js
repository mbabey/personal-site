import React from 'react'

function Contact() {
  return (
    <div>
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
    </div>
  )
}

export default Contact