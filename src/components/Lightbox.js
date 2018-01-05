import React from 'react';
import Lightbox from 'react-images';

const LightboxComponent = ({
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
    <Lightbox
        currentImage={currentImage}
        images={images}
        isOpen={lightboxIsOpen}
        onClickNext={gotoNext}
        onClickPrev={gotoPrevious}
        onClickThumbnail={this.gotoImage}
        onClose={closeLightbox}
      />
  )
}

export default LightboxComponent;