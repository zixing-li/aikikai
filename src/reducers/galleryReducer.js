const initialState = {
  lightboxIsOpen: false,
  currentImage: 0,
}

export default function(state = initialState, action) {
  switch(action.type) {
    case 'OPEN_LIGHTBOX':
      console.log("reducer - open lightbox");
      action.event.preventDefault();
      return {lightboxIsOpen: true, currentImage: action.index};
    case 'CLOSE_LIGHTBOX':
      console.log("reducer - close lightbox");
      return {lightboxIsOpen: false, currentImage: 0};
    case 'GO_TO_PREVIOUS':
      console.log("reducer - go to previous");
      return {...state, currentImage: state.currentImage - 1};
    case 'GO_TO_NEXT':
      console.log("reducer - go to next");
      return {...state, currentImage: state.currentImage + 1};
    case 'GO_TO_IMAGE':
      console.log("reducer - go to image");
      return {...state, currentImage: action.index};
    default: 
      return state;
  }
}