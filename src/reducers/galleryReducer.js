import { createReducer } from 'redux-starter-kit';
import { galleryFetchSuccess, photoFetchSuccess } from '../actions';

const initState = {
  gallery: [],
  selected: {}
}

// const galleryReducer = (state = initState, action) => {
//   switch(action.type){
//     case 'GALLERY_FETCH_SUCCEEDED': return {
//       photos: action.payload
//     }
//     case 'PHOTO_FETCH_SUCCEEDED': return {
//       ...state,
//       selected: action.payload
//     }
//     default: return state;
//  }
// }
//----------
// const galleryFetchSuccess = createAction('GALLERY_FETCH_SUCCEEDED');
// const photoFetchSuccess = createAction('PHOTO_FETCH_SUCCEEDED');


const galleryReducer = createReducer(initState, {
  [galleryFetchSuccess]: (state, action) => ({ gallery: action.payload, selected: {} }),
  [photoFetchSuccess]: (state, action) => ({ ...state, selected: action.payload })
})


export default galleryReducer;
