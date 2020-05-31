import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';

import Routes from './Routes';
import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}
