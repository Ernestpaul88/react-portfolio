import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IconContext } from "react-icons";


function Footer() {
    return (
      <footer className="px-1">
        <p>
            © 2022 Copyright: Ernest Paul
        </p>
        <div className="pb-2">
        <a
                    href="https://github.com/Ernestpaul88"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                <IconContext.Provider value={{className: "react-icons" }}>
                  <FaGithub/>
                </IconContext.Provider>
                </a>
                <a
                    href="https://www.linkedin.com/in/ernest-paul"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                <IconContext.Provider value={{className: "react-icons" }}>
                  <FaLinkedin/>
                </IconContext.Provider>
                </a>
        </div>
      </footer>
    );
  }


  export default Footer;