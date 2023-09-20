import React from 'react';

import '../styles/projects.css';

function Project({title, demolink, srclink, description, languages, images, imagealts}) {
  return (
    <div className='project'>
      <h3>{title}</h3>
      {
        demolink !== "" ? 
        <div>Demo: <a target='_blank' href={demolink} tabIndex={-1}>{demolink}</a></div> :
        <></>
      }
      {
        srclink !== "" ? 
        <div>Source: <a target='_blank' href={srclink} tabIndex={-1}>{srclink}</a></div> :
        <></>
      }
      <p>{description}</p>
      <p>{languages}</p>
      <div>
        {images.map((imgsrc, index) => {
          return (
            <img key={imgsrc} src={imgsrc} alt={imagealts[index]}/>
          );
        })}
      </div>
    </div>
  )
}

export default Project