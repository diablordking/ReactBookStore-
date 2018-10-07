import {combineReducers} from 'redux';
import BookReducer from './reducers-book';


export const allReducers = combineReducers({
  users : BookReducer
});
