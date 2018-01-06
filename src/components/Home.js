import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import picture1 from '../assets/o-1.jpg'
import picture2 from '../assets/o-2.jpg'
import picture3 from '../assets/o-3.jpg'

// xs should move to new line
const Home = () => {
  return (
    <div>
      <div className="hero-content">
        <h2 className="hero-title">New York Eastside Aikikai<br /><br />Martial Arts & Cultural Center</h2>
      </div>      
      <Grid fluid>
        <Row className="illustration">
          <Col xs={12} sm={6} md={8}>
            <img src={picture2} alt="Aikido technique" className="illustration-pic" />
          </Col>
          <Col xs={12} sm={6} md={4} lg={3} lgOffset={-1} className="text-container">
            <span className="illustration-text">New York Eastside Aikikai (NYEA), established in 2009, is affliliated with United States Aikido Federation (USAF), under the direction of Yoshimitsu Yamada Shihan, 8th Dan</span>
          </Col>
        </Row>
        <Row className="illustration">
          <Col xs={12} sm={6} md={8} smPush={6} mdPush={4}>
            <img src={picture3} alt="Aikido technique" className="illustration-pic" />
          </Col>
          <Col xs={12} sm={6} md={4} lg={3} lgOffset={-1} smPull={5} mdPull={7} className="text-container">
            <span className="illustration-text">NYEA offers Aikido classes for adults and children. Adults will find the Aikido experience rewarding, as they achieve the ideal balance of physical and mental training. The training at NYEA is vigorous and intense</span>
          </Col>
        </Row>
        <Row className="illustration">
          <Col xs={12} sm={6} md={8}>
            <img src={picture1} alt="Aikido technique" className="illustration-pic" />
          </Col>
          <Col xs={12} sm={6} md={4} lg={3} lgOffset={-1} className="text-container">
            <span className="illustration-text">Classes for children start at age six and continue up to age fourteen. The kids class is energetic and playful, and attention to safety is paramount. As experience and understanding deepen, kids develop confidence and leadership skills, and they help others to grow</span>
          </Col>
        </Row>
      </Grid>
    </div>
  )
}

export default Home