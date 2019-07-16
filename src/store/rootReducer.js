import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import  loginReducer  from "./Auth/reducers";
import  registerReducer  from "./Register/reducers";

export const rootReducer = combineReducers({
  login: loginReducer,
  register: registerReducer,
  form: formReducer
});
