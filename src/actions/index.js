import { createAction } from 'redux-starter-kit';

export const galleryFetchSuccess = createAction('GALLERY_FETCH_SUCCEEDED');
export const photoFetchSuccess = createAction('PHOTO_FETCH_SUCCEEDED');
const galleryFetchReq = createAction('GALLERY_FETCH_REQUESTED');
const photoFetchReq = createAction('PHOTO_FETCH_REQUESTED');


export function requestGallery() {
    return galleryFetchReq();
}

export function receiveGallery(gallery) {
    return galleryFetchSuccess(gallery);
}

export function requestPhoto(id) {
  return photoFetchReq(id);
}

export function receivePhoto(photo) {
  return photoFetchSuccess(photo);
}
