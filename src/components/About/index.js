import React from 'react';
import coverImage from '../../assets/img/Ernest.jpg';

function About() {
  return (
    <div id="about" >
        <aside className><h4>About Me</h4></aside>
        <hr className='my-4'></hr>
        <div className='container'>
          <div className='row'>
            <div className='col-md-2 text-center'>
            <span>
              <img src={coverImage} alt="profile pic" class="image--cover"/>
            </span>
            </div>
            <div className='col-md-10 my-3 pt-2'>
            <p>
            The name is Ernest Paul. I recently graduated from North Carolina
            A&amp;T State University with a Bachelors of science in Technology with a 
            concentration in Information Technology. I am a Retention Agent for 
            Asurion Insurance and I'm currently looking to develop my skills in software engineering.
            </p>
            </div>
          </div>
        </div>          
    </div>
  );
}

export default About;