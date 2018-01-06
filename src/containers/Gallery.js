import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Grid, Row, Col, Thumbnail } from 'react-bootstrap';
import Lightbox from '../components/Lightbox';
import { 
  closeLightbox,
  gotoNext,
  gotoPrevious,
  gotoImage,
  openLightbox,
 } from '../actions/actionCreators';

class Gallery extends Component {

  renderGallery = () => {
    const images = this.props.images;
    if (!images) {return;}

    const gallery = images.map((obj, i) => {
      return (
        <Col sm={12} md={6} lg={4} key={`col${i}`} className="thumbnail-container-col">
          <Thumbnail 
            href= "#" 
            src={require(`../assets/images/o (${i}).jpg`)} 
            alt="" 
            key={i}
            onClick={(e) => this.props.openLightbox(i, e)}
          />
        </Col>
      );
    });

    return (
      <div>
        {gallery}
      </div>
    );
  }

	render () {
		return (
      <div>
        <Grid fluid className="gallery">
          <Row>
            {this.renderGallery()}
          </Row>
        </Grid>
        <Lightbox {...this.props} />
      </div>
		);
	}
}

export default connect(
  (state) => ({
    lightboxIsOpen: state.lightbox.lightboxIsOpen,
    currentImage: state.lightbox.currentImage,
    images: state.images
  }),
  (dispatch) => bindActionCreators({ 
    closeLightbox,
    gotoNext,
    gotoPrevious,
    gotoImage,
    openLightbox,
   }, dispatch)
)(Gallery);