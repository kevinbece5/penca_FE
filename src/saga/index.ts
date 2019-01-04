import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import * as Actions from '../actions/actions';



export const FetchPlayerStandings = () =>{
    tyoe: Actions.GET_STANDINGS
}


export function* fetchStanding(action){
    try{
        const standings = yield call(axios.get,"https://sfig37fo94.execute-api.us-east-1.amazonaws.com/dev/penca/standings" );
        yield put({
            type: Actions.GET_STANDINGS_SUCCESS,
            payload:
            {
                standings: standings.data    
            }
        })
    }catch(e){
        console.error(e)
    }
}