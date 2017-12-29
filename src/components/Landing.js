import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import picture1 from '../assets/picture1.png'
import picture2 from '../assets/picture2.png'
import pic1 from '../assets/o-edit.jpg'

const styles = {
  grid: {
      paddingLeft: 0,
      paddingRight: 0
  },
  row: {
      marginLeft: 0,
      marginRight: 0
  },
};

const Landing = () => {
  return (
    <div>
      <div className="hero-content">
        <h2 className="hero-title">New York Eastside Aikikai<br /><br />Martial Arts & Cultural Center</h2>
      </div>      
      <Grid fluid style={styles.grid}>
        <Row style={styles.row}>
          <Col sm={6} md={6}>
          <img src={pic1} alt="Aikido Picture" className="banner" />
          </Col>
          <Col sm={6} md={6}>
          NY Eastside Aikikai, located in the Upper Eastside of New York City, offers traditional training in the art of Aikido.  Beginners and advanced practitioners, children and adults alike are invited to discover the joy of natural movement and master effective self-defense techniques.  Find out what Aikido can do for you.
          </Col>
        </Row>
      </Grid>
    </div>
  )
}

export default Landing