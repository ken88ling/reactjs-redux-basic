import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

//ReactDOM.render(<App />, document.getElementById('root'));

import { createStore } from "redux";

const initialState = {
  result: 1,
  lastValues: [],
  username: "Ken"
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      state = {
        ...state,
        result: state.result + action.payload,
        lastValues: [...state.lastValues, action.payload] // this immutable way
      };
      //state.lastValue.push(action.payload); // this is multable way
      break;
    case "SUBSTRACT":
      state = {
        ...state,
        result: state.result - action.payload,
        lastValues: [...state.lastValues, action.payload]
      };
      //state.lastValue.push(action.payload);
      break;
  }
  return state;
};

const store = createStore(reducer);

store.subscribe(() => {
  console.log("store updated ", store.getState());
});

store.dispatch({
  type: "ADD",
  payload: 100
});

store.dispatch({
  type: "SUBSTRACT",
  payload: 10
});

store.dispatch({
  type: "SUBSTRACT",
  payload: 15
});
serviceWorker.unregister();
