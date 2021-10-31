import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "../Header/Header.css";

const Header = () => {
  const { user, signOutGoogle } = useAuth();
  const handleLogOut = () => {
    signOutGoogle();
  };
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand className="d-flex justify-content-center align-items-center">
            <FontAwesomeIcon icon={faPlaneDeparture} />
            <h4 className="ms-3">
              Lets<span className="text-danger">Travel</span>
            </h4>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav ">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              {!user ? (
                <Nav.Link as={Link} to="/login" href="#deets">
                  Login
                </Nav.Link>
              ) : (
                <div className="flexOffRes">
                  <Nav.Link as={Link} to="/myBookings">
                    MyBookings
                  </Nav.Link>
                  <Nav.Link as={Link} to="/manageBookings">
                    ManageAllBookings
                  </Nav.Link>
                  <Nav.Link as={Link} to="/addService">
                    AddNewService
                  </Nav.Link>
                  <span className="text-primary">{user.displayName}</span>
                  <Nav.Link eventKey={2} onClick={handleLogOut}>
                    Logout
                  </Nav.Link>
                </div>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
