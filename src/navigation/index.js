import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthenticationStack from './AuthenticationStack';
import AppStack from './AppStack';
import {useSelector} from 'react-redux';
import userReducer from '../redux/reducers/userReducer';
const RootNavigator = () => {
  const {islogedIn} = useSelector(state => state?.userReducer);
  return (
    <NavigationContainer>
      {islogedIn ? <AppStack /> : <AuthenticationStack />}
      {/*<AuthenticationStack />*/}
      {/*<AppStack />*/}
    </NavigationContainer>
  );
};

export default RootNavigator;
