import {call, put} from 'redux-saga/effects';
import {loginSucess} from '../../reducers/userReducer';
import {getData, parseJson, storeData} from '../../../helpers/helpingFunctions';
import { loginError, signUpError, signUpSucess } from "../../reducers/carsReducer";

export function* handleLoginUser(action) {
  try {
    const response = yield call(getData, '@users');
    console.log("login res>",response)
    if (response) {
      console.log("inside")
      let found = 0;
      for (let i = 0, length = response.length; i < length; i++) {
        if (
          data[i].email == action.payload.email &&
          data[i].password == action.payload.password
        ) {
          yield call(storeData, '@user', action.payload);
          yield put(loginSucess(action.payload));

          found = 1;
        } else if (!found) {
          alert('Invalid credentials');
          yield put(loginError('Inavalid credentials'));
        }
      }
    } else {
      alert('Invalid credentials');
    }
  } catch (error) {
    alert('Unexpected error please try again');
  }
}

export function* handleSignupUser(action) {
  try {
    const response = yield call(getData, '@users');
    console.log('response>>>', response);
    if (response) {
      console.log("condition1")
      let temp = [...response, action.payload];
      yield call(storeData('@users', temp));
      yield put(signUpSucess());
      alert('Signed successfully1');
    } else {
      console.log("condition2")

      let temp1 = [action.payload];
      console.log(temp1)
      yield call(storeData, '@users', temp1);
      yield put(signUpSucess());
      alert('Signed successfully2');
    }
  } catch (error) {
    alert('Something Went wrong try again later');
    yield put(signUpError("Something went wrong"))
  }
}
