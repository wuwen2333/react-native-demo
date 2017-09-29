import React from 'react';
import {
  Scene,
  Router,
  Actions,
  Reducer,
  ActionConst,
  Overlay,
  Tabs,
  Modal,
  Drawer,
  Stack,
  Lightbox,
} from 'react-native-router-flux';
import Home from '../containers/App';
import Page from '../components/Page';

const reducerCreate = params => {
  const defaultReducer = new Reducer(params);
  return (state, action) => {
    console.log('ACTION:', action);
    return defaultReducer(state, action);
  };
};

const AppNavigator = () => (
  <Router
    createReducer={reducerCreate}
  >
    <Stack key="root">
      <Scene key="home" component={Home} hideNavBar />
      <Scene key="page" component={Page} title="Page" hideTabBar/>
    </Stack>
  </Router>
)
export default AppNavigator;
