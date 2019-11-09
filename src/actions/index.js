import { createAction } from 'redux-starter-kit';


export const galleryFetchSuccess = createAction('GALLERY_FETCH_SUCCEEDED');
export const photoFetchSuccess = createAction('PHOTO_FETCH_SUCCEEDED');
const galleryFetchReq = createAction('GALLERY_FETCH_REQUESTED');
const photoFetchReq = createAction('PHOTO_FETCH_REQUESTED');


export function requestGallery() {
    return galleryFetchReq();
    //return {type: 'GALLERY_FETCH_REQUESTED'};
}

export function receiveGallery(gallery) {
    return galleryFetchSuccess(gallery);
    //return {type: 'GALLERY_FETCH_SUCCEEDED', payload: gallery};
}

export function requestPhoto(id) {
  return photoFetchReq(id);
  //return {type: 'PHOTO_FETCH_REQUESTED', id};
}

export function receivePhoto(photo) {
  return photoFetchSuccess(photo);
  //return {type: 'PHOTO_FETCH_SUCCEEDED', payload: photo}
}
