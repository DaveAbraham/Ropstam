import React from 'react';
import {View, Text} from 'react-native';
import RootNavigator from './src/navigation';
import store from './src/redux/configureStore';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
};

export default App;
