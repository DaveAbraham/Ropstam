import {storeData} from '../../helpers/helpingFunctions';

export const LOGIN = 'LOGIN';
export const SET_DATA = 'SET_DATA';
export const SET_DATA_SUCCESS = 'SET_DATA_SUCCESS';
export const SET_DATA_ERROR = 'SET_DATA_ERROR';
export const GET_DATA = 'GET_DATA';
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';
export const GET_DATA_ERROR = 'GET_DATA_ERROR';
export const DELETE_ITEM = 'DELETE_ITEM';
export const EDIT_ITEM = 'EDIT_ITEM';

export const setData = data => {
  return {
    type: SET_DATA,
    payload: data,
  };
};
export const setDataSuccess = data => {
  console.log(data);
  return {
    type: SET_DATA_SUCCESS,
    payload: data,
  };
};
export const setDataError = data => {
  return {
    type: SET_DATA_ERROR,
    payload: data,
  };
};
export const deleteItem = index => {
  return {
    type: DELETE_ITEM,
    payload: index,
  };
};
export const editItem = data => {
  return {
    type: EDIT_ITEM,
    payload: data,
  };
};
const initialState = {
  cars: [],
  loading: false,
  disabled: false,
  error: false,
  message: null,
};
const carsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return {...state, loading: true, disabled: true};
    case SET_DATA_SUCCESS:
      return {...state, loading: false, disabled: false, cars: action.payload};
    case SET_DATA_ERROR:
      return {
        ...state,
        loading: false,
        disabled: false,
        error: true,
        message: action.payload,
      };
    case DELETE_ITEM:
      let data = [...state.cars];
      const index = action.payload;
      data.splice(index, 1);
      storeData('@cars', data);
      return {...state, cars: data};
    case EDIT_ITEM:
      const i = action.payload.index;
      const carArray = [...state.cars];
      carArray[i] = action.payload.data;
      return {...state, cars: carArray};

    default:
      return {...state};
  }
};
export default carsReducer;
