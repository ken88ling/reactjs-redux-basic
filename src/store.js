import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import mathReducer from "./reducers/userReducer";
import userReducer from "./reducers/userReducer";

const store = createStore(
  combineReducers({ mathReducer, userReducer }),
  composeWithDevTools()
);

export default store;
