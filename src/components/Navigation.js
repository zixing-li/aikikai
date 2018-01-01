import React from 'react';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';
import { Navbar, NavItem, Nav, NavDropdown, MenuItem } from 'react-bootstrap';
import logo from '../assets/USAF logo.2.jpg'

const Navigation = () => {
  return (
    <Navbar collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <IndexLinkContainer to="/">
            <div>
              <img src={logo} alt="Aikido Logo" className="logo" />
              <h3 className="logo-name">New York Eastside Aikikai</h3>
            </div>
          </IndexLinkContainer>
        </Navbar.Brand>
        <Navbar.Toggle/>
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <LinkContainer to="gallery">
            <NavItem eventKey={1}>Gallery</NavItem>
          </LinkContainer>
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