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
              <a target='_blank' rel='noreferrer' href={demolink} tabIndex={-1}>
                Demo <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="6.6600pt" height="6.66pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
                  <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#ffffff" stroke="none">
                    <path d="M3039 5104 c-64 -19 -141 -90 -169 -156 -48 -113 -20 -240 72 -323 84 -76 79 -75 677 -75 l526 0 -1192 -1192 c-1318 -1319 -1243 -1236 -1243 -1368 0 -206 213 -341 400 -254 48 22 213 182 1248 1217 l1192 1192 0 -526 c0 -598 -1 -593 75 -677 115 -128 305 -127 420 0 79 88 76 36 73 1064 l-3 909 -22 41 c-34 63 -66 97 -125 129 l-53 30 -915 2 c-772 2 -922 0 -961 -13z" />
                    <path d="M705 4539 c-267 -50 -495 -221 -618 -466 -15 -28 -39 -91 -54 -140 l-28 -88 -3 -1525 c-2 -1045 1 -1547 8 -1594 29 -187 103 -329 245 -471 142 -142 284 -216 471 -245 47 -7 549 -10 1594 -8 l1525 3 88 28 c325 101 548 353 606 681 7 38 11 294 11 692 0 608 -1 635 -20 686 -40 107 -149 181 -266 180 -110 -1 -198 -55 -252 -157 l-27 -50 -5 -645 -5 -645 -23 -47 c-13 -26 -44 -65 -68 -87 -87 -76 33 -71 -1604 -71 -1664 0 -1531 -7 -1623 83 -95 92 -87 -53 -87 1622 0 1642 -5 1522 71 1609 22 24 61 55 87 68 l47 23 640 5 640 5 52 24 c138 62 204 231 144 367 -30 68 -94 130 -159 154 -51 19 -77 20 -695 19 -353 -1 -664 -5 -692 -10z" />
                  </g>
                </svg>
              </a>
              :
              <></>
          }
          {
            srclink !== "" ?
              <a target='_blank' rel='noreferrer' href={srclink} tabIndex={-1}>
                Source Code <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="6.6600pt" height="6.66pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
                  <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#ffffff" stroke="none">
                    <path d="M3039 5104 c-64 -19 -141 -90 -169 -156 -48 -113 -20 -240 72 -323 84 -76 79 -75 677 -75 l526 0 -1192 -1192 c-1318 -1319 -1243 -1236 -1243 -1368 0 -206 213 -341 400 -254 48 22 213 182 1248 1217 l1192 1192 0 -526 c0 -598 -1 -593 75 -677 115 -128 305 -127 420 0 79 88 76 36 73 1064 l-3 909 -22 41 c-34 63 -66 97 -125 129 l-53 30 -915 2 c-772 2 -922 0 -961 -13z" />
                    <path d="M705 4539 c-267 -50 -495 -221 -618 -466 -15 -28 -39 -91 -54 -140 l-28 -88 -3 -1525 c-2 -1045 1 -1547 8 -1594 29 -187 103 -329 245 -471 142 -142 284 -216 471 -245 47 -7 549 -10 1594 -8 l1525 3 88 28 c325 101 548 353 606 681 7 38 11 294 11 692 0 608 -1 635 -20 686 -40 107 -149 181 -266 180 -110 -1 -198 -55 -252 -157 l-27 -50 -5 -645 -5 -645 -23 -47 c-13 -26 -44 -65 -68 -87 -87 -76 33 -71 -1604 -71 -1664 0 -1531 -7 -1623 83 -95 92 -87 -53 -87 1622 0 1642 -5 1522 71 1609 22 24 61 55 87 68 l47 23 640 5 640 5 52 24 c138 62 204 231 144 367 -30 68 -94 130 -159 154 -51 19 -77 20 -695 19 -353 -1 -664 -5 -692 -10z" />
                  </g>
                </svg>
              </a>
              :
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