export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const SIGNUP = 'SIGNUP';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCESS';
export const SIGNUP_ERROR = 'SIGNUP_ERROR';

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

const initialState = {
  cars: [
    {
      make: 'Farari',
      model: '2020',
      price: 25000000,
      image:
        'https://static.pakwheels.com/2022/09/Ferrari-Purosangue-revealed-11-scaled.jpg',
    },
    {
      make: 'Toyota',
      model: '2022',
      price: 15000000,
      image:
        'https://media.istockphoto.com/photos/generic-red-suv-on-a-white-background-side-view-picture-id1157655660?b=1&k=20&m=1157655660&s=612x612&w=0&h=ekNZlV17a3wd_yN9PhHXtIabO_zFo4qipCy2AZRpWUI=',
    },
    {
      make: 'KIA',
      model: '2023',
      price: 17000000,
      image:
        'https://gaycarboys.com/wp-content/uploads/2019/06/f5344-2018-kia-sorento-gt-line-diesel-review-1.jpg',
    },
    {
      make: 'Honda',
      model: '2020',
      price: 25000000,
      image: 'https://www.topgear.com/sites/default/files/2022/07/6_0.jpg',
    },
    {
      make: 'Farari',
      model: '2023',
      price: 35000000,
      image:
        'https://static.pakwheels.com/2022/09/Ferrari-Purosangue-revealed-11-scaled.jpg',
    },
    {
      make: 'Farari',
      model: '2000',
      price: 9900000,
      image:
        'https://static.pakwheels.com/2022/09/Ferrari-Purosangue-revealed-11-scaled.jpg',
    },
  ],
  isLoggedIn: false,
  loading: false,
  disabled: false,
  error: false,
  message: null,
};
const carsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP:
      return {...state, loading: true, disabled: true};
    case SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        disabled: false,
        isSignedUp: true,
        user: action.payload,
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
    default:
      return {...state};
  }
};
export default carsReducer;
