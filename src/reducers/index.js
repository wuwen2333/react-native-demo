import { combineReducers } from 'redux';
import home from './home';
// Our custom reducers
// We need to import each one here and add them to the combiner at the bottom


// Combine all
const appReducer = combineReducers({
	home,
});

// Setup root reducer
const rootReducer = (state, action) => {
  const newState = (action.type === 'RESET') ? undefined : state;
  return appReducer(newState, action);
};

export default rootReducer;