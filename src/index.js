import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

//ReactDOM.render(<App />, document.getElementById('root'));

import { createStore } from "redux";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      state = state + action.payload;
      break;
    case "SUBSTRACT":
      state = state - action.payload;
      break;
  }
  return state;
};

const store = createStore(reducer, 100);

store.subscribe(() => {
  console.log("store updated ", store.getState());
});

store.dispatch({
  type: "ADD",
  payload: 101
});

store.dispatch({
  type: "SUBSTRACT",
  payload: 20
});

serviceWorker.unregister();
