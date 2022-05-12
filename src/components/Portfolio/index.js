import React from 'react';
import Project from '../Project';
import portfolio from '../../assets/img/Developer1.PNG';
import horiseon from '../../assets/img/Horiseon.png';
import crypto from '../../assets/img/Screenshot2-desktop.PNG';
import travel from '../../assets/img/travel-log-screen.png';

function Porfolio() {

  const projects = [

    {
        name: "Horiseon Webpage",
        description: "This project emphasizes my ability to write stable HTML and CSS code. This assignmets also details my ablilty to meet client criteria for websites.",
        image: horiseon,
        repo: "https://ernestpaul88.github.io/Code-Refactor/",
    },
    {
        name: "Portfolio",
        description: "My e-portfolio",
        image: portfolio,
        repo: "https://github.com/Ernestpaul88/Developer-Portfolio",
    },
    {
        name: "Shopping With Crypto",
        description: "A web-app that allows users to search for common products, and display their price in dollars and the equivalent in Bitcoin, Ehtereum, Binance Coin, Cardano and Solana(Top 5 Cryptos by Market Cap).",
        image: crypto,
        repo: "https://gordonlc18.github.io/shopping_with_bitcoin/",
    },
    {
        name: "Travel Log",
        description: "A full-stack web app that allows users to log the destinations they have visited.",
        image: travel,
        repo: "https://github.com/adambowers09/project2/",
    },
];

    return (
      <div id="portfolio" className='sections' >
          <h4 className='page-title'>Portfolio</h4>
          <hr className='my-4'></hr>
          <div className='projects-container'>
            {
                projects.map((project) => (
                  <Project project={project} />
             ))
            }
        </div>
      </div>
    );
  }
  
  export default Porfolio;