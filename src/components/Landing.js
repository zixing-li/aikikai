import React from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import logo from '../assets/USAF logo.2.jpg'

const Landing = () => {
  return (
    <div>
      <Button bsStyle="default" style={{color:"red"}}>Button Text</Button>
      <h2>New York Eastside Aikikai</h2>
      <h3>Martial Arts & Cultural Center</h3>
      <img src={logo} alt="Aikido Logo" className="logo" />
      <Grid>
        <Row>
          <Col sm={6} md={6}>Test Left</Col>
          <Col sm={6} md={6}>Test Right</Col>
        </Row>
      </Grid>
    </div>
  )
}

export default Landing