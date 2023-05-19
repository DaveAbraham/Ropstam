import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LandingPage from '../screen/landingPage';
import Login from '../screen/login';
import SignUp from '../screen/signup';
const Stack = createNativeStackNavigator();

const AuthenticationStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="LandingScreen" component={LandingPage} />
      <Stack.Screen name="LoginScreen" component={Login} />
      <Stack.Screen name="SignupScreen" component={SignUp} />
    </Stack.Navigator>
  );
};
export default AuthenticationStack;
