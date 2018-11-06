import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import App from "./components/App";
import { Provider } from "react-redux";

const mathReducer = (
  state = {
    result: 1,
    lastValues: [],
    username: "Ken"
  },
  action
) => {
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

const userReducer = (
  state = {
    name: "Max",
    age: 27
  },
  action
) => {
  switch (action.type) {
    case "SET_NAME":
      state = {
        ...state,
        name: action.payload
      };
      //state.lastValue.push(action.payload); // this is multable way
      break;
    case "SET_AGE":
      state = {
        ...state,
        age: action.payload
      };
      //state.lastValue.push(action.payload);
      break;
  }
  return state;
};

const store = createStore(
  combineReducers({ mathReducer, userReducer }),
  composeWithDevTools()
);

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

store.dispatch({
  type: "SET_AGE",
  payload: 25
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  window.document.getElementById("root")
);

serviceWorker.unregister();
