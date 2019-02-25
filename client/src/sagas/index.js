import {call, put, take} from 'redux-saga/effects';
import {getImages} from '../services/getImages';



export function* loadImages() {
  
  try {

    const images = yield call(getImages);
    yield put({type: 'IMAGES_RECEIVED', images});
   
  } catch (error) {
    yield put({type: 'LOAD_IMAGES_FAILURE', error})
  }
}


export function* watchLoadImages() {
  while (true) {

    yield take('LOAD_IMAGES');
    yield call(loadImages);
  }
}
