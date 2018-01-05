import React from 'react';
import { Grid, Row, Col, Thumbnail } from 'react-bootstrap';
import picture1 from '../assets/o-1.png'
import picture2 from '../assets/o-2.png'
import picture3 from '../assets/o-3.png'
import picture4 from '../assets/o-4.jpg'
import { Lightbox } from 'react-images';

// let array = ["o-1", "o-2", "o-3"]

// let array = []

// for (let i=1; i<=3; i++) {
//   array.push("o-"+i)
// }

// let images = array.map(image => {
//   return (
//     <Col xs={12} sm={12} md={6} lg={4}>
//       <Thumbnail href= "#" src={require(`../assets/${image}.png`)} alt="Thumbnails" />
//     </Col>
//   )
// })

// const Gallery = () => {
//   return (
//     <Grid fluid className="gallery">
//       <Row>
//         {images}
//         <Col xs={12} sm={12} md={6} lg={4}>
//           <Thumbnail href="#" alt="171x180" src={picture4} />
//         </Col>
//       </Row>
//     </Grid>
//   )
// }

// export default Gallery;



// for (let i=1; i<=3; i++) {
//   array.push({src: `../assets/${image}.png`})
// }

export default class Gallery extends React.Component {
  render() {
    return (
      <Lightbox
        images={[{ src: 'http://example.com/img1.jpg' }, { src: 'http://example.com/img2.jpg' }]}
        // isOpen={this.state.lightboxIsOpen}
        // isOpen={true}
        onClickPrev={this.gotoPrevious}
        onClickNext={this.gotoNext}
        onClose={this.closeLightbox}
      />
    );
  }
}

