import React from "react"
import About from "../About";
import Contact from "../Contact";
import Resume from "../Resume"


function Container({ currentPage }) {
  const renderPage = () => {
    switch (currentPage.name) {
      case "about":
        return <About />;
      case "contact":
        return <Contact />;
      case "resume":
        return <Resume />;
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