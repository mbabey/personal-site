import React from 'react';

import '../styles/projects.css';

function Project({title, demolink, srclink, description, languages, images, imagealts}) {
  return (
    <div className='project'>
      <h3>{title}</h3>
      {
        demolink !== "" ? 
        <div>Demo: <a target='_blank' rel='noreferrer' href={demolink} tabIndex={-1}>{demolink}</a></div> :
        <></>
      }
      {
        srclink !== "" ? 
        <div>Source: <a target='_blank' rel='noreferrer' href={srclink} tabIndex={-1}>{srclink}</a></div> :
        <></>
      }
      <p>{description}</p>
      <p>{languages}</p>
      <div className='images'>
        {images.map((imgsrc, index) => {
          return (
            <div key={imgsrc} className='img-wrapper'>
              <img  src={imgsrc} alt={imagealts[index]}/>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Project