import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faList,
  faPlus,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const NavBarMenu = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Luxury Hotels</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">
                <Link to="/">
                  Home <FontAwesomeIcon icon={faHome} />{" "}
                </Link>
              </Nav.Link>
              <Nav.Link href="#link">
                <Link to="/list">
                  List <FontAwesomeIcon icon={faList} />
                </Link>
              </Nav.Link>
              <Nav.Link href="#link">
                <Link to="/create">
                  Create <FontAwesomeIcon icon={faPlus} />
                </Link>
              </Nav.Link>
              <Nav.Link href="#link">
                <Link to="/search">
                  Search <FontAwesomeIcon icon={faSearch} />
                </Link>
              </Nav.Link>
              {localStorage.getItem("login") ? 
                <Nav.Link href="#link">
                  <Link to="/logout">
                    Logout <FontAwesomeIcon icon={faUser} />
                  </Link>
                </Nav.Link>
               : 
                <Nav.Link href="#link">
                  <Link to="/login">
                    Login <FontAwesomeIcon icon={faUser} />
                  </Link>
                </Nav.Link>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBarMenu;
