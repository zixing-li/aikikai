import React from 'react';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';
import { Navbar, NavItem, Nav, NavDropdown, MenuItem } from 'react-bootstrap';
import logo from '../assets/images/USAF logo.2.jpg'

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
          <LinkContainer to="location">
            <NavItem eventKey={2} href="#">Location</NavItem>
          </LinkContainer>
          <NavDropdown eventKey={3} title="Learn more" id="basic-nav-dropdown">
            <LinkContainer to="aikido"><MenuItem eventKey={3.1}>Aikido</MenuItem></LinkContainer>
            <LinkContainer to="instructors"><MenuItem eventKey={3.2}>Instructors</MenuItem></LinkContainer>
            <LinkContainer to="schedule&fees"><MenuItem eventKey={3.3}>Schedule & Fees</MenuItem></LinkContainer>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation;