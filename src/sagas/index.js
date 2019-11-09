import { takeEvery, all } from 'redux-saga/effects';

import { fetchGallery, fetchPhoto } from './sagas';

export default function* root() {
    yield all([
        yield takeEvery('GALLERY_FETCH_REQUESTED', fetchGallery),
        yield takeEvery('PHOTO_FETCH_REQUESTED', fetchPhoto)
    ]);
}
