import React from "react";
import ReactDOM from "react-dom";
import 'babel-polyfill';
import {createStore} from 'redux';
import {allReducers} from './reducers';

const store = createStore(allReducers);

const Index = function () {
  return <div> Hello React! </div>;
};

ReactDOM.render(<Index />, document.getElementById("index"));
