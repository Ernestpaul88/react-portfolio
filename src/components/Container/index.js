import React from "react"
import About from "../About";
import Contact from "../Contact";
import Resume from "../Resume";
import Portfolio from "../Portfolio";

function Container({ currentPage }) {
  const renderPage = () => {
    switch (currentPage.name) {
      case "about":
        return <About />;
      case "contact":
        return <Contact />;
      case "resume":
        return <Resume />;
      case "portfolio":
          return <Portfolio />;
      default:
        return <About />;
    }
  };

  return (
    <div className="page-container">
      {renderPage()}
    </div>
  );
}
export default Container;