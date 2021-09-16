import {history} from "../store";
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

const createReducer = asyncReducers => 
  combineReducers({
    ...asyncReducers,
    router: connectRouter(history),
  });

export default createReducer;
