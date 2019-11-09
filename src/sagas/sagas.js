import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import {
    receiveGallery,
    receivePhoto
} from '../actions';

const baseUrl = 'https://jsonplaceholder.typicode.com';

const getGalleryAsync = async () => {
  try {
    const res = await axios.get(`${baseUrl}/photos`);
    return res.data.splice(0, 100);
  }
  catch(e){}
}

const getPhotoAsync = async (id) => {
  try {
    const res = await axios.get(`${baseUrl}/photos/${id}`);
    return res.data;
  }
  catch(e){}
}


export function* fetchGallery() {
    const gallery = yield call(getGalleryAsync);
    yield put(receiveGallery(gallery));
}

export function* fetchPhoto({payload}){
  const photo = yield call(getPhotoAsync, payload);
  yield put(receivePhoto(photo));
}
