import React from "react";

function Footer() {
    const icons = [
      {
        name: "fab fa-github",
        link: "https://github.com/",
      },
      {
        name: "fab fa-linkdedin",
        link: "https://www.linkedin.com/",
      },
    ];
    return (
      <footer className="flex-row px-1">
        <p>
            © 2022 Copyright: Ernest Paul
            {icons.map((icon) => (
                <a
                    href={icon.link}
                    key={icon.name}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className={icon.name}></i>
                </a>
        ))}
        </p>
      </footer>
    );
  }


  export default Footer;