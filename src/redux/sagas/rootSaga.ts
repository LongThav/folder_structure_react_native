import {all} from 'redux-saga/effects';
import { watchFetchNews } from './newSaga';

function* rootSaga() {
  yield all([watchFetchNews()]);
}

export default rootSaga;