import {call, put} from 'redux-saga/effects';

import {getData, parseJson, storeData} from '../../../helpers/helpingFunctions';


export function* handleSetData(action) {
  console.log(action.payload);
  try {
  } catch (error) {
    alert('Unexpected error please try again');
  }
}

export function* handleSignupUser(action) {
  try {
  } catch (error) {
    alert('Something Went wrong try again later');
  }
}
