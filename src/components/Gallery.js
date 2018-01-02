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
          <Thumbnail href="#" alt="171x180" src={picture1} data-toggle="popover"/>
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

// import Lightbox from 'react-images';

// export default class Gallery extends React.Component {
//   render() {
//     return (
//       <Lightbox
//         images={[{ src: 'http://example.com/img1.jpg' }, { src: 'http://example.com/img2.jpg' }]}
//         isOpen={this.state.lightboxIsOpen}
//         onClickPrev={this.gotoPrevious}
//         onClickNext={this.gotoNext}
//         onClose={this.closeLightbox}
//       />
//     );
//   }
// }

