import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthenticationStack from './AuthenticationStack';
import AppStack from './AppStack';
import {useDispatch, useSelector} from 'react-redux';
import userReducer from '../redux/reducers/userReducer';
import {getData, parseJson, storeData} from '../helpers/helpingFunctions';
import {setDataSuccess} from '../redux/reducers/carsReducer';
import {loginSuccess} from '../redux/reducers/userReducer';
const carData = [
  {
    image:
      'https://w7.pngwing.com/pngs/414/106/png-transparent-enzo-ferrari-sports-car-luxury-vehicle-ferrari-compact-car-car-performance-car.png',
    make: 'Ferrari1',
    model: '2020',
    price: '25000000',
  },
  {
    image:
      'https://w7.pngwing.com/pngs/414/106/png-transparent-enzo-ferrari-sports-car-luxury-vehicle-ferrari-compact-car-car-performance-car.png',
    make: 'Ferrari2',
    model: '2020',
    price: '25000000',
  },
  {
    image:
      'https://w7.pngwing.com/pngs/414/106/png-transparent-enzo-ferrari-sports-car-luxury-vehicle-ferrari-compact-car-car-performance-car.png',
    make: 'Ferrari3',
    model: '2020',
    price: '25000000',
  },
  {
    image:
      'https://w7.pngwing.com/pngs/414/106/png-transparent-enzo-ferrari-sports-car-luxury-vehicle-ferrari-compact-car-car-performance-car.png',
    make: 'Ferrari4',
    model: '2020',
    price: '25000000',
  },
  {
    image:
      'https://w7.pngwing.com/pngs/414/106/png-transparent-enzo-ferrari-sports-car-luxury-vehicle-ferrari-compact-car-car-performance-car.png',
    make: 'Ferrari5',
    model: '2020',
    price: '25000000',
  },
  {
    image:
      'https://w7.pngwing.com/pngs/414/106/png-transparent-enzo-ferrari-sports-car-luxury-vehicle-ferrari-compact-car-car-performance-car.png',
    make: 'Ferrari6',
    model: '2020',
    price: '25000000',
  },
];
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
  useEffect(() => {
    const getdataAsync = async () => {
      const response = await getData('@cars');
      const data = await parseJson(response);
      console.log("data is this ok", data[0])
      if (!response) {
        console.log('inside');
        await storeData('@cars', carData);
        dispatch(setDataSuccess(carData));
      } else {
        dispatch(setDataSuccess(data));
      }
    };
    getdataAsync();
  }, []);

  return (
    <NavigationContainer>
      {isLoggedIn ? <AppStack /> : <AuthenticationStack />}
    </NavigationContainer>
  );
};

export default RootNavigator;
