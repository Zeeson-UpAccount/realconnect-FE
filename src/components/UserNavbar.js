import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

import avatar from "../assets/avatar.svg";

export default function UserNavbar() {
  return (
    <div>
      <Navbar expand="lg" bg="navyblue" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="#home">RealConnect</Navbar.Brand>
          <Nav className="ml-auto">
            <NavDropdown
              title={
                <span>
                  <img
                    className=" avatar-circle mr-1"
                    height="30"
                    width="30"
                    src={avatar}
                    alt="user pic"
                  />
                  Damilola Phillips
                </span>
              }
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item href="#">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#">Invest</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Settings</NavDropdown.Item>
              <NavDropdown.Item href="#">Log Out</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
