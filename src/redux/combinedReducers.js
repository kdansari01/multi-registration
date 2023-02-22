import { combineReducers } from "redux";
import { registrationFormReducer } from "./reducer";

export const reducer = combineReducers({
  forsData: registrationFormReducer
});
