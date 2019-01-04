import {handleActions} from 'redux-actions';
import * as Actions from '../actions/actions';

export const initialState = {
    matches: [],
    matchesLoaded: false,
}

export default handleActions<any>({
    [Actions.GET_MATCHES_SUCCESS]:  (state, action) =>{
        const matches = action.payload.response.matches;
        const match = matches.map((API) =>{
            const teamNameHome = API.team1.name
            const teamNameAway = API.team2.name
            const matchID = API.num;
        });
        return{
            ...state,
            matches: match,
            matchesLoaded: true,
        }
    }
}, initialState)