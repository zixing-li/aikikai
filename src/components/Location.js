import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import map from '../assets/googlemaps.jpg'

const Location = () => {
  return (
    <div className="location-info">
      <Grid fluid>
        <Row >
          <Col xs={12} sm={12} md={6}>
            <img src={map} alt="map" className="info-pic" />
          </Col>
          <Col xs={12} sm={12} md={6}>
            307 E 92 St, 2 Fl (between 1st & 2nd Avenues), New York NY 10128
            <br/>
            By subway:  #4, 5, 6 to 86 St/Lex; #6 to 96 St/Lex
            <br/>
            By bus:  M15 to 92 St; M86 to 92 St; M96 to 2nd Ave
            <br/>
            Visitors are welcome.  Please arrive before regular class times. Thank you.
          </Col>
        </Row>
      </Grid>
    </div>
  )
}

export default Location;