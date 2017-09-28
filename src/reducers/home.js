const initialState = {};
export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'SAVE_WELCOME_TEXT': {
      return Object.assign({}, state, action.welcometText);
    }
    default:
    	return state;
  }
}