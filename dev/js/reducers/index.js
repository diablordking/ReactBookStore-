import {combineReducers} from 'redux';
import BookReducer from './reducer-books';
import ActiveBookReducer from './reducer-active-book.js';
import { routerReducer } from "react-router-redux";
import { reducer as form  } from 'redux-form';
/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
    books: BookReducer,
    activeBook: ActiveBookReducer,
    router:routerReducer,
form
});

export default allReducers;
