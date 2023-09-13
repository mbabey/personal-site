import React from 'react';

import '../styles/projects.css';

function Project({title, link, description, languages, image}) {
  return (
    <div className='project'>
      <h3>{title}</h3>
      <a href={link}>{link}</a>
      <p>{description}</p>
      <p>{languages}</p>
      <div>
        <p>{image}</p>
      </div>
    </div>
  )
}

export default Project