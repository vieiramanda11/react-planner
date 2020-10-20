import { combineReducers } from 'redux'
import authReducer from './authReducer';
import planningReducer from './planningReducer';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
    auth: authReducer,
    planning: planningReducer,
    firestore: firestoreReducer,
})

export default rootReducer;
