import { createStore, applyMiddleware, compose } from "redux";
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
const enhancers = [];
   const isDevelopment = process.env.NODE_ENV === 'development';
     if (isDevelopment && typeof window !== 'undefined' && window.devToolsExtension) {
       enhancers.push(window.devToolsExtension());
     }


const store = createStore(
  rootReducer,
  initialState,
  compose(applyMiddleware(thunk, logger), ...enhancers)
);
export default store;
