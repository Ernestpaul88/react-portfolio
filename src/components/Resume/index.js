import React from 'react';

function Resume() {
  return (
    <div id="resume" >
        <h4 className='page-title'>Resume</h4>
        <hr className='my-4'></hr>
        <div>
            <h5> Front-end Proficiencies </h5>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>Responsive Design</li>
                <li>React</li>
                <li>Bootstrap</li>
            </ul>
        </div>
        <div>
            <h5> Back-end Proficiencies </h5>
            <ul>
                <li>APIs</li>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL, Sequelize</li>
                <li>MongoDB, Mongoose</li>
                <li>REST</li>
                <li>GraphQL</li>
            </ul>
        </div>
        <div>
            <h6>
                Download my Resume 
                <a href='../../assets/img/Ernest.jpg' target="_blank"> here</a>
            </h6>
        </div>         
    </div>
  );
}

export default Resume;