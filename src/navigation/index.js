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
import Page1 from '../components/Page1';

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
    <Modal >
      <Scene key="home" component={Home} hideNavBar/>
      <Stack key="pages" hideNavBar>
        <Scene key="page" component={Page} title="Page"/>
        <Scene key="page1" component={Page1} title="Page1"/>
      </Stack>
    </Modal>
  </Router>
)
export default AppNavigator;
