import React from 'react';
import { Provider } from 'react-redux';
import App from './containers/App';
import configureStore from './configureStore';

const store = configureStore({});
export default function AppContainer() {
  return (
    <Provider store={store}>
      {/*<RouterWithRedux scenes={AppRoutes} style={AppStyles.appContainer} />*/}
      <App />
    </Provider>
  );
}
