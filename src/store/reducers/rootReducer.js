import { combineReducers } from 'redux'
import authReducer from './authReducer';
import planningReducer from './planningReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    planning: planningReducer,
})

export default rootReducer;
