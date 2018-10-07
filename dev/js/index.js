import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware,compose} from 'redux';
import App from './components/App'
import allReducers from './reducers'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import thunk from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';


const store = createStore(
    allReducers,        compose(applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f));


ReactDOM.render(
  <Provider store ={store}>
  <Router>
  <Route path="/:filter?" component={App} />
  </Router>
  </Provider>,
    document.getElementById('root')
);
