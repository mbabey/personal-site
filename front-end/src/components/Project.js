import React from 'react';

import '../styles/projects.css';

function Project({ title, demolink, srclink, technologies, description, images, imagealts }) {
  return (
    <div className='project'>
      <div className='content'>
        <h3>{title}</h3>
        <div className='links'>
          {
            demolink !== "" ?
              <a target='_blank' rel='noreferrer' href={demolink} tabIndex={-1}>Demo</a> :
              <></>
          }
          {
            srclink !== "" ?
              <a target='_blank' rel='noreferrer' href={srclink} tabIndex={-1}>Source Code</a> :
              <></>
          }
        </div>
        <div className='technologies'>
          <h4>Technologies:</h4>
          <p>{technologies}</p>
        </div>
        <div className='description'>
          <h4>Description:</h4>
          <p>{description}</p>
        </div>
      </div>
      <div className='images'>
        {images.map((imgsrc, index) => {
          return (
            <div key={imgsrc} className='img-wrapper'>
              <img src={imgsrc} alt={imagealts[index]} />
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Project