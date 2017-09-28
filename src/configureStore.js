import React from 'react';
import Immutable from 'immutable';
import { Platform } from 'react-native';
import { applyMiddleware, compose, createStore } from 'redux';
import { connect, Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
// import { Router } from 'react-native-router-flux';

// Consts and Libs
// import { AppStyles } from '@theme/';
// import AppRoutes from '@navigation/';
// import Analytics from '@lib/analytics';

import rootReducer from './reducers';
import createSagaMiddleware from 'redux-saga';
import rootSagas from './sagas';
import App from './containers/App';

let composeEnhancers = compose;
// Connect RNRF with Redux
// const RouterWithRedux = connect()(Router);
const sagaMiddleware = createSagaMiddleware();
// Load middleware
let middleware = [
  thunk, // Allows action creators to return functions (not just plain objects)
];
if (__DEV__) {
  const installDevTools = require('immutable-devtools');
  installDevTools(Immutable);

  composeEnhancers = (
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||
    require('remote-redux-devtools').composeWithDevTools
  )({
    name: Platform.OS,
    ...require('../package.json').remotedev,
  });
  // Dev-only middleware
  middleware = [
    ...middleware,
    sagaMiddleware,
    createLogger(), // Logs state changes to the dev console
  ];
}



// Init redux store (using the given reducer & middleware)
const store = composeEnhancers(
  applyMiddleware(...middleware),
)(createStore)(rootReducer);

sagaMiddleware.run(rootSagas);

export default function configureStore(initialState) {
  if (module.hot) {
    module.hot.accept(() => {
      store.replaceReducer(require('./reducers').default);
    });
  }
  return store;
}