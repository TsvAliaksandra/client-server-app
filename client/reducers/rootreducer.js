import {combineReducers} from "redux";
import regReducer from './signupReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
    regReducer,
    authReducer

});

export default rootReducer;