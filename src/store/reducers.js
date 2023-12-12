import { combineReducers } from 'redux'
import authReducer from './authReducer '
import counterReducer from './counterReducer'


const reducers = combineReducers( {auth:authReducer, counter:counterReducer} );
export default reducers