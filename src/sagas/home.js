import { put, call } from 'redux-saga/effects';
import {takeEvery} from 'redux-saga';
import * as homeAction from '../actions/homeAction';

const welcomeText = {
	title:'Welcome to React Native!',
	introduction: 'To get started, edit index.ios.js'
};

function homeApi(param) {
	return new Promise((resove,reject) => {
		if(param.page === 'home') {
			resove(welcomeText);
		} else {
			reject({status: 'error'});
		}
	})
}

function* getWelcomeText(pageInfo) {
	try{
		const result = yield call(homeApi, pageInfo.param);
		if(result){
			yield put(homeAction.saveWelcomeText(result));
		} else {
			yield put(homeAction.saveWelcomeText({}));
		}
	} catch (e) {
		console.log(e.status);
	}
}

export default function* homeSaga() {
  yield takeEvery(homeAction.GET_WELCOME_TEXT, getWelcomeText);
}