import home from './home'
import {
	put,
	call,
	fork
} from 'redux-saga/effects';

export default function* rootSaga() {
	yield [home()];
}