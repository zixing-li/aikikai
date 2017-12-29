import React from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import logo from '../assets/USAF logo.2.jpg'

const Navigation = () => {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">
            <img src={logo} alt="Aikido Logo" className="logo" />
            <h3 className="logo-name">New York Eastside Aikikai</h3>
          </a>
        </Navbar.Brand>
      </Navbar.Header>
      {/* <Nav>
        <NavItem eventKey={1} href="#">Link</NavItem>
        <NavItem eventKey={2} href="#">Link</NavItem>
      </Nav> */}
    </Navbar>
  )
}

export default Navigation;