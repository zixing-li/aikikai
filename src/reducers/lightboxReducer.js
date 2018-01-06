const initialState = {
  lightboxIsOpen: false,
  currentImage: 0,
}

export default function(state = initialState, action) {
  switch(action.type) {
    case 'OPEN_LIGHTBOX':
      action.event.preventDefault();
      return {lightboxIsOpen: true, currentImage: action.index};
    case 'CLOSE_LIGHTBOX':
      return {lightboxIsOpen: false, currentImage: 0};
    case 'GO_TO_PREVIOUS':
      return {...state, currentImage: state.currentImage - 1};
    case 'GO_TO_NEXT':
      return {...state, currentImage: state.currentImage + 1};
    case 'GO_TO_IMAGE':
      return {...state, currentImage: action.index};
    default: 
      return state;
  }
}