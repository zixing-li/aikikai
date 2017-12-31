import React from 'react';
import { Navbar, NavItem, Nav, NavDropdown, MenuItem } from 'react-bootstrap';
import logo from '../assets/USAF logo.2.jpg'

const Navigation = () => {
  return (
    <Navbar collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">
            <img src={logo} alt="Aikido Logo" className="logo" />
            <h3 className="logo-name">New York Eastside Aikikai</h3>
          </a>
        </Navbar.Brand>
        <Navbar.Toggle/>
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">Gallery</NavItem>
          <NavItem eventKey={2} href="#">Location</NavItem>
          <NavDropdown eventKey={3} title="Learn more">
            <MenuItem eventKey={3.1}>Aikido</MenuItem>
            <MenuItem eventKey={3.2}>Instructors</MenuItem>
            <MenuItem eventKey={3.3}>Schedule & Fees</MenuItem>
            <MenuItem eventKey={3.4}>Seminars</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation;