import { createReducer } from 'redux-starter-kit';
import { galleryFetchSuccess, photoFetchSuccess } from '../actions';

const initState = {
  gallery: [],
  selected: {}
}

const galleryReducer = createReducer(initState, {
  [galleryFetchSuccess]: (state, action) => ({ gallery: action.payload, selected: {} }),
  [photoFetchSuccess]: (state, action) => ({ ...state, selected: action.payload })
})

export default galleryReducer;
