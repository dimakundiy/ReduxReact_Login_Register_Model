import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import {rootReducer} from "./rootReducer.js";

const initialState = {
  login: {
    isLoginPending: false,
    isLoginSuccess: false,
    loginError: {}
  },
   register:{
    isRegisterPending: false,
    isRegisterSuccess: false,
    registerError: {}
   }
};

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk, logger)
);
export default store;
