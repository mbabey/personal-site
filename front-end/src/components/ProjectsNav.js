import React from 'react';

function ProjectsNav({ projects }) {  
  return (
    <div id='projects-nav'>
      <ul>
        {projects.map((p) => {
          return (
            <li key={p.abbreviation}>{p.abbreviation}</li>
          );
        })}
      </ul>
    </div>
  )
}

export default ProjectsNav