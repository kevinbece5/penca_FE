import { createAction } from 'redux-actions';
import * as Actions from '../actions/actions';


export const getStanding = createAction<any>(Actions.GET_STANDINGS_SUCCESS);
export const getMatches = createAction<any>(Actions.GET_MATCHES)