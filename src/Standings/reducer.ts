import {handleActions} from 'redux-actions';
import * as Actions from '../actions/actions';

export const initialState = {
    players: [],
    playersLoaded: false
}

export default handleActions<any>({
    [Actions.GET_STANDINGS_SUCCESS]: (state, action) =>{
        const users = action.payload.response.users;
        const playerStandings = users.map( (API) =>{
            const userName = API.user;
            const points = API.points;
        });
        return{
            ...state,
            players: playerStandings,
            playersLoaded: true,
        }
    }
}, initialState);