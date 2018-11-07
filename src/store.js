import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import mathReducer from "./reducers/userReducer";
import userReducer from "./reducers/userReducer";
import thunk from "redux-thunk";
import logger from "redux-logger";
import promise from "redux-promise-middleware";

const store = createStore(
  combineReducers({ mathReducer, userReducer }),
  composeWithDevTools(applyMiddleware(logger, thunk))
);

export default store;
