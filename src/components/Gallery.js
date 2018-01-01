import React from 'react';
import { Grid, Row, Col, Thumbnail } from 'react-bootstrap';
import picture1 from '../assets/o-1.png'
import picture2 from '../assets/o-2.png'
import picture3 from '../assets/o-3.png'

const Gallery = () => {
  return (
    <Grid>
      <Row>
        <Col xs={6} md={3}>
          <Thumbnail href="#" alt="171x180" src={picture1} />
        </Col>
        <Col xs={6} md={3}>
          <Thumbnail href="#" alt="171x180" src={picture2} />
        </Col>
        <Col xs={6} md={3}>
          <Thumbnail href="#" alt="171x180" src={picture3} />
        </Col>
      </Row>
    </Grid>
  )
}

export default Gallery;