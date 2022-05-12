import React from 'react';


function Project({project}) {
    return (
        <div class="card col-md-5 mx-2 my-2" key={project.name}>
            <img src={project.image} class="card-img-top" alt="project"/>
            <div class="card-body">
                <h5 class="card-title">{project.name}</h5>
                <p class="card-text">{project.description}</p>
                <a href={project.repo} class="btn btn-primary">Github</a>
            </div>
        </div>

    );
  }
  
  export default Project;