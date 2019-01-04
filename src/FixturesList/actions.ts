import {createAction} from 'redux-actions';
import * as Actions from '../actions/actions';

export const getMatches = createAction<any>(Actions.GET_MATCHES);
export const getPicks = createAction<any>(Actions.GET_FIXTURE_PICKS);