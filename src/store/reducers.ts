import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import StandingsReducer from '../Standings/reducer'
import MatchesReducer from '../FixturesList/reducer';


const rootReducer = combineReducers({
  routing: routerReducer,
  standings: StandingsReducer,
  matches: MatchesReducer,
});

export default rootReducer;
