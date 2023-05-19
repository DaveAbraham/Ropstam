import {takeLatest, takeEvery} from 'redux-saga/effects';
import {SIGNUP, LOGIN} from '../reducers/carsReducer';
import {handleSignupUser} from './handler/user';
import {handleLoginUser} from './handler/user';

export function* watcherSaga() {
  yield takeLatest(SIGNUP, handleSignupUser);
  yield takeLatest(LOGIN, handleLoginUser);
}
