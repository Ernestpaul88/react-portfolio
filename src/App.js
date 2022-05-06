import React, { useState } from "react";
import Footer from './components/Footer';
import Jumbo from './components/Jumbotron';
import Header from './components/Header';
import Nav from "./components/Nav";

import Container from './components/Container';

function App() {
  const [pages] = useState([
    {
      name: "about",
    },
    { name: "portfolio" },
    { name: "contact" },
    {
      name: "resume",
    },
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div>
      <Jumbo>
        <Header>
        <Nav
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        ></Nav>
        </Header>
      </Jumbo>
      <main>
        <Container currentPage={currentPage}></Container>
      </main>
      <Footer/>
  </div>
  );
}

export default App;
