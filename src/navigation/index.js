import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthenticationStack from './AuthenticationStack';
import AppStack from './AppStack';
import {useDispatch, useSelector} from 'react-redux';
import userReducer from '../redux/reducers/userReducer';
import {getData, parseJson} from '../helpers/helpingFunctions';
import {loginSuccess} from '../redux/reducers/carsReducer';
const RootNavigator = () => {
  const {isLoggedIn} = useSelector(state => state?.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    const func = async () => {
      const data = await getData('@user');
      const user = data && JSON.parse(data);
      dispatch(loginSuccess(user));
    };
    func();
  }, []);
  return (
    <NavigationContainer>
      {isLoggedIn ? <AppStack /> : <AuthenticationStack />}
    </NavigationContainer>
  );
};

export default RootNavigator;
