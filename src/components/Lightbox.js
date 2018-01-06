import React from 'react';
import Lightbox from 'react-images';

const LightboxComponent = ({
  images,
  lightboxIsOpen,
  currentImage,
  closeLightbox,
  gotoNext,
  gotoPrevious,
}) => {
  return (
    <Lightbox
      currentImage={currentImage}
      images={images}
      isOpen={lightboxIsOpen}
      onClickNext={gotoNext}
      onClickPrev={gotoPrevious}
      onClose={closeLightbox}
    />
  )
}

export default LightboxComponent;