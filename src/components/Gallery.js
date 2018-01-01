import React from 'react';
import { Grid, Row, Col, Thumbnail } from 'react-bootstrap';
import picture1 from '../assets/o-1.png'
import picture2 from '../assets/o-2.png'
import picture3 from '../assets/o-3.png'
import picture4 from '../assets/o-4.jpg'

const Gallery = () => {
  return (
    <Grid fluid className="gallery">
      <Row>
        <Col xs={12} sm={12} md={6} lg={4}>
          <Thumbnail href="#" alt="171x180" src={picture1} />
        </Col>
        <Col xs={12} sm={12} md={6} lg={4}>
          <Thumbnail href="#" alt="171x180" src={picture2} />
        </Col>
        <Col xs={12} sm={12} md={6} lg={4}>
          <Thumbnail href="#" alt="171x180" src={picture3} />
        </Col>
        <Col xs={12} sm={12} md={6} lg={4}>
          <Thumbnail href="#" alt="171x180" src={picture4} />
        </Col>
      </Row>
    </Grid>
  )
}

export default Gallery;