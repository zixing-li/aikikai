import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Gallery from '../components/Gallery';
import { 
  closeLightbox,
  gotoNext,
  gotoPrevious,
  gotoImage,
  openLightbox,
 } from '../actions/actionCreators';
 import picture1 from '../assets/o-1.png'

class GalleryContainer extends Component {

  renderGallery = () => {
    
    const images = this.props.images;
  
    if (!images) {
      console.log('!images', images)
      console.log('images', images)
      return;
    }
  
    const gallery = images.map((obj, i) => {
      console.log('obj', obj)
      console.log('obj.src ', `require('${obj.src}')`)
      console.log('obj.src2', "require('"+obj.src+"')")
      console.log('require ', `require('../assets/o-1.png')`)
      return (
        <a
          href={obj.src}
          // className={css(classes.thumbnail, classes[obj.orientation])}
          key={i}
          onClick={(e) => this.props.openLightbox(i, e)}
        >
          gallery
          <img src={`require('${obj.src}')`} alt="" />
          {/* <img src={`picture${obj.src}`} alt="" /> */}
          {/* <img src={picture1} alt="" /> */}
          {/* <img src={"require('"+obj.src+"')"} alt="" /> */}
          {/* <img src={obj.src} alt="" /> */}
          {/* <img src={require('../assets/o-1.png')} alt="" /> */}
        </a>
      );
    });

    // const gallery = () => {
    //   console.log(this.props.images.filter(image=>image.useForDemo))
    //   // this.props.images.map(image, i)
    //   return (
    //     <a
    //       href='{obj.src}'
    //       // className={css(classes.thumbnail, classes[obj.orientation])}
    //       key={1}
    //       onClick={(e) => this.props.openLightbox(1, e)}
    //     >
    //       <img src={require(`../assets/o-1.png`)} alt="" />
    //     </a>
    //   );
    // };

    return (
      <div>
        {gallery}
      </div>
    );
  }

  // componentWillMount() {
  //   this.renderGallery();
  // }
	render () {
    console.log('images: ', this.props.images)
		return (
      <div>
        {this.renderGallery()}
			  <Gallery {...this.props} />
      </div>
		);
	}
}

export default connect(
  (state) => ({
    lightboxIsOpen: state.gallery.lightboxIsOpen,
    currentImage: state.gallery.currentImage,
    images: state.images
  }),
  (dispatch) => bindActionCreators({ 
    closeLightbox,
    gotoNext,
    gotoPrevious,
    gotoImage,
    openLightbox,
   }, dispatch)
)(GalleryContainer);