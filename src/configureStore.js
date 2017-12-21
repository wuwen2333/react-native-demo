/* eslint global-require: 0 */

import Immutable from 'immutable';
import { Platform } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSagas from './sagas';
import rootReducer from './reducers';

let composeEnhancers = compose;
const sagaMiddleware = createSagaMiddleware();

if (__DEV__) {
  const installDevTools = require('immutable-devtools');
  installDevTools(Immutable);

  // Use it if Remote debugging with RNDebugger, otherwise use remote-redux-devtools
  /* eslint-disable no-underscore-dangle */
  composeEnhancers = (
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||
    require('remote-redux-devtools').composeWithDevTools
  )({
    name: Platform.OS,
    ...require('../package.json').remotedev,
  });
  /* eslint-enable no-underscore-dangle */
}
const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware),
);

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer);
  sagaMiddleware.run(rootSagas);
  if (module.hot) {
    module.hot.accept(() => {
      store.replaceReducer(require('./reducers').default);
    });
  }
  return store;
}
