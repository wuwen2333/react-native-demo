export const GET_WELCOME_TEXT = 'GET_WELCOME_TEXT';
export const SAVE_WELCOME_TEXT = 'SAVE_WELCOME_TEXT';

export function getWelcomeText(param){
	return{
		type: GET_WELCOME_TEXT,
		param
	}
}
export function saveWelcomeText(welcometText){
	return{
		type: SAVE_WELCOME_TEXT,
		welcometText
	}
}