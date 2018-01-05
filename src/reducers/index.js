import { combineReducers } from "redux";
import GalleryReducer from "./galleryReducer";
import ImagesReducer from './imagesReducer'

const rootReducer = combineReducers({
  gallery: GalleryReducer,
  images: ImagesReducer,
});

export default rootReducer;
