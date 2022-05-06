import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
import { Navbar, Container} from 'react-bootstrap';

function Nav(props) {

  const { pages = [], setCurrentPage, currentPage } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentPage.name);
  }, [currentPage]);

  return (
    
    <Navbar variant="light" expand="lg">
      <Container>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <ul class="nav navbar-nav">
        {pages.map((Page) => (
          <li
            className={`nav-item ${currentPage.name === Page.name && "navActive"}`}
            key={Page.name}
          >
            <a className="nav-link" href={`#${Page.name}`} onClick={() => setCurrentPage(Page)}>
              {capitalizeFirstLetter(Page.name)}
            </a>
          </li>
        ))}
        </ul>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Nav;