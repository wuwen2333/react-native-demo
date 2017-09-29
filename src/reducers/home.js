import { fromJS } from 'immutable';
const initialState = fromJS({});
export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'SAVE_WELCOME_TEXT':
      return state.set('welcomeText',action.welcometText);
    default:
    	return state;
  }
}