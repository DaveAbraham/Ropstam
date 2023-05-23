import {call, put} from 'redux-saga/effects';

import {getData, parseJson, storeData} from '../../../helpers/helpingFunctions';
import {
  loginSuccess,
  loginError,
  signUpError,
  signUpSucess,
} from '../../reducers/userReducer';
export function* handleLoginUser(action) {
  console.log(action.payload);
  try {
    let data;
    let flag = 0;
    const response = yield call(getData, '@users');
    if (response) {
      data = parseJson(response);
      console.warn(data[0].email);
      if (data) {
        for (let i = 0, length = data.length; i < length; i++) {
          console.log('inside loop', data[i].email, action.payload.email);
          if (
            data[i].email == action.payload.email &&
            data[i].password == action.payload.password
          ) {
            flag = 1;
          }
        }
      }
      if (flag) {
        console.log('inside flage if', action.payload);
        yield call(storeData, '@user', action.payload);
        yield put(loginSuccess(action.payload));
      } else {
        alert('Invalid credentials');
        yield put(loginError('Invalid credentials'));
      }
    } else {
      alert('Please signup first');
      yield put(loginError('Please signup first'));
    }
  } catch (error) {
    alert('Unexpected error please try again');
  }
}

export function* handleSignupUser(action) {
  try {
    const response = yield call(getData, '@users');
    const data = parseJson(response);
    if (data) {
      let flag = 0;
      for (let i = 0, l = data.length; i < l; i++) {
        if (data[i].email == action.payload.email) {
          flag = 1;
        }
      }
      if (flag) {
        alert('Email already taken please enter a different email');
        yield put(
          signUpError('email already taken please enter a different email'),
        );
      } else {
        let temp = [...data, action.payload];
        yield call(storeData, '@users', temp);
        yield put(signUpSucess());
        alert('Signed up successfully');
      }
    } else {
      let temp1 = [action.payload];
      yield call(storeData, '@users', temp1);
      yield put(signUpSucess());
      alert('Signed Up successfully');
    }
  } catch (error) {
    alert('Something Went wrong try again later');
    yield put(signUpError('Something went wrong'));
  }
}
