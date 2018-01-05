import { combineReducers } from "redux";
import LightboxReducer from "./lightboxReducer";
import ImagesReducer from './imagesReducer'

const rootReducer = combineReducers({
  lightbox: LightboxReducer,
  images: ImagesReducer,
});

export default rootReducer;
