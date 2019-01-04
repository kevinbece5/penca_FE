import { takeLatest } from 'redux-saga/effects';
import * as Types from '../actions/actions';
import { fetchStanding } from './index';

function* mySaga(){
    yield takeLatest(Types.GET_STANDINGS, fetchStanding);
}

export default mySaga;