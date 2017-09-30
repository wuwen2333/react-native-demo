import React from 'react';
import { fromJS } from 'immutable';
import { connect,Provider } from 'react-redux';
import { Router } from 'react-native-router-flux';
import App from './containers/App';
import configureStore from './configureStore';
import AppRoutes from './navigation';

const initialState = {};
const store = configureStore(initialState);
const RouterWithRedux = connect()(Router);

export default function AppContainer() {
  return (
    <Provider store={store}>
      <RouterWithRedux scenes={AppRoutes} />
    </Provider>
  );
}
