import { createStore, applyMiddleware,} from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import reducer from './reducers';
import mySaga from '../saga/sagas';


const sagasMiddleware = createSagaMiddleware();


 const store = createStore(
    reducer,
    applyMiddleware(sagasMiddleware)
)

sagasMiddleware.run(mySaga);

export default store