import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import picture1 from '../assets/o-1.png'
import picture2 from '../assets/o-2.png'
import picture3 from '../assets/o-3.png'
import test from '../assets/o-1.png'

const styles = {
  grid: {
      // paddingLeft: 0,
      // paddin: 0,
  },
  row: {
      // marginLeft: 0,
      // margi: 0,
  },
};

const Landing = () => {
  return (
    <div>
      <div className="hero-content">
        <h2 className="hero-title">New York Eastside Aikikai<br /><br />Martial Arts & Cultural Center</h2>
      </div>      
      <Grid fluid style={styles.grid}>
        <Row style={styles.row} className="banner">
          <Col sm={8} md={8} style={styles.col}>
          <img src={picture2} alt="Aikido Picture" className="banner-pic" />
          </Col>
          <Col sm={4} md={4} className="text-container">
          <div className="move-right">
            <span className="banner-text">NY Eastside Aikikai, located in the Upper Eastside of New York City, offers traditional training in the art of Aikido.</span>
          </div>
          </Col>
        </Row>
        <Row style={styles.row} className="banner">
          <Col sm={4} md={4} className="text-container">
            <div className="move-left">
              <span className="banner-text">NY Eastside Aikikai, located in the Upper Eastside of New York City, offers traditional training in the art of Aikido.</span>
            </div>
          </Col>
          <Col sm={8} md={8}>
            <img src={picture3} alt="Aikido Picture" className="banner-pic" />
          </Col>
        </Row>
        <Row style={styles.row} className="banner">
          <Col sm={8} md={8}>
          <img src={picture1} alt="Aikido Picture" className="banner-pic" />
          </Col>
          <Col sm={4} md={4} className="text-container">
            <div className="move-right">
              <span className="banner-text">Beginners and advanced practitioners, children and adults alike are invited to discover the joy of natural movement and master effective self-defense techniques.</span>
            </div>
          </Col>
        </Row>
      </Grid>
    </div>
  )
}

export default Landing