import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DashBoard from '../screen/dashboard';
const Stack = createNativeStackNavigator();

const AuthenticationStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="dashboardScreen" component={DashBoard} />
    </Stack.Navigator>
  );
};
export default AuthenticationStack;
