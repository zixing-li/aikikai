import React from 'react';
// import { Grid, Row, Col } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

const Footer = () => {
  return (
    // <Grid className="footer">
    //   <Row>
    //     <Col sm={3} md={3}> © 2017 New York Eastside Aikikai</Col>
    //     <Col sm={9} md={9}>
    //       <div>
    //         Follow us:&nbsp;&nbsp;
    //         <FontAwesome name="instagram"/>&nbsp;Instagram &nbsp;<FontAwesome name="yelp"/>&nbsp;Yelp
    //         <br/>
    //         Location
    //         <br/>
    //         Contact us
    //         <hr/>
    //         © 2017 New York Eastside Aikikai
    //       </div>
    //     </Col>
    //   </Row>
    // </Grid>
      <div className="footer">
        Follow us:&nbsp;&nbsp;
        <FontAwesome name="instagram"/>&nbsp;Instagram &nbsp;<FontAwesome name="yelp"/>&nbsp;Yelp &nbsp;<FontAwesome name="facebook-official"/>&nbsp;Facebook
        <br/>
        Location
        <br/>
        Contact us
        <hr/>
        © 2017 New York Eastside Aikikai
      </div>
  )
}

export default Footer;