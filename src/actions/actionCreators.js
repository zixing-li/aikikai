export const	openLightbox = (index, event) => ({
  type: 'OPEN_LIGHTBOX',
  index,
  event
});

export const closeLightbox = () => ({
  type: 'CLOSE_LIGHTBOX'
});

export const gotoPrevious = () => ({
  type: 'GO_TO_PREVIOUS'
});

export const gotoNext = () => ({
  type: 'GO_TO_NEXT'
});