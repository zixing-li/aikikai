import React from 'react';
// import { Grid, Row, Col, Thumbnail } from 'react-bootstrap';
// import picture1 from '../assets/o-1.png'
// import picture2 from '../assets/o-2.png'
// import picture3 from '../assets/o-3.png'
// import picture4 from '../assets/o-4.jpg'
import Lightbox from 'react-images';

const Gallery = ({
  images,
  lightboxIsOpen,
  currentImage,
  closeLightbox,
  gotoNext,
  gotoPrevious,
  gotoImage,
  openLightbox
}) => {
  return (
    <div>
      <Lightbox
					currentImage={currentImage}
          // images={[
          //   { src: '../assets/o-1.png' },
          //   { src: '../assets/o-2.png' }
          // ]}
          // images={[picture1, picture2]}
          // images={LIGHTBOX_IMAGE_SET}
          images={images}
					isOpen={lightboxIsOpen}
					onClickNext={gotoNext}
					onClickPrev={gotoPrevious}
					onClose={closeLightbox}
				/>
      {/* <a
        href=''
        // className={css(classes.thumbnail, classes[obj.orientation])}
        key={1}
        onClick={(e) => openLightbox(0, e)}
      >
       <img src={require(`../assets/o-1.png`)} alt="" />
      </a> */}
    </div>
  )
}

export default Gallery;