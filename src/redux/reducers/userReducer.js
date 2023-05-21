export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const SIGNUP = 'SIGNUP';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCESS';
export const SIGNUP_ERROR = 'SIGNUP_ERROR';
export const CLEAR = 'CLEAR';

export const signUp = data => {
  return {
    type: SIGNUP,
    payload: data,
  };
};
export const signUpSucess = user => {
  return {
    type: SIGNUP_SUCCESS,
    payload: user,
  };
};
export const signUpError = error => {
  return {
    type: SIGNUP_ERROR,
    payload: error,
  };
};

export const login = user => {
  return {
    type: LOGIN,
    payload: user,
  };
};
export const loginSuccess = user => {
  return {
    type: LOGIN_SUCCESS,
    payload: user,
  };
};
export const loginError = error => {
  return {
    type: LOGIN_ERROR,
    payload: error,
  };
};
export const clearUser = () => {
  return {
    type: CLEAR,
  };
};

const initialState = {
  user: {},
  isLoggedIn: false,
  loading: false,
  disabled: false,
  error: false,
  message: null,
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP:
      return {...state, loading: true, disabled: true};
    case SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        disabled: false,
      };
    case SIGNUP_ERROR:
      return {
        ...state,
        loading: false,
        disabled: false,
        message: action.payload,
        signUpError: true,
      };
    case LOGIN:
      return {...state, loading: true, disabled: true};
    case LOGIN_SUCCESS:
      console.warn('what is this', action.payload);
      return {
        ...state,
        loading: false,
        disabled: false,
        isLoggedIn: true,
        user: action.payload,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        disabled: false,
        error: true,
        message: action.payload,
      };
    case CLEAR:
      console.log('usreeeeee');
      return {
        ...state,
        user: {},
        isLoggedIn: false,
      };
    default:
      return {...state};
  }
};
export default userReducer;
