import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import map from '../assets/images/googlemaps.jpg'

const Location = () => {
  return (
    <div className="location">
      <Grid fluid>
        <Row className="illustration">
          <Col xs={12} sm={12} md={12} lg={7}>
            <img src={map} alt="map" />
          </Col>
          <Col xs={12} sm={12} md={12} lg={5} className="location-info">
            <span className="illustration-text">
              307 E 92 St, 2 Fl (between 1st & 2nd Avenues), New York NY 10128
              <ul>
                <li>By subway:  #4, 5, 6 to 86 St/Lex; #6 to 96 St/Lex; Q train to 96th St and 2nd Ave</li>
                <li>By bus:  M15 to 92 St; M86 to 92 St; M96 to 2nd Ave</li>
              </ul>
              Visitors are welcome.  Please arrive before regular class times. Thank you.
            </span>
          </Col>
        </Row>
      </Grid>
    </div>
  )
}

export default Location;