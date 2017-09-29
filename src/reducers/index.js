import { combineReducers } from 'redux';
import home from './home';

// Combine all
const rootReducer = combineReducers({
	home,
});

export default rootReducer;