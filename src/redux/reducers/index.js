import { combineReducers } from "redux";
import keypadReducer from "./numeric";
import statusReducer from "./warning";

const rootReducer = combineReducers({
  keypad: keypadReducer,
  status: statusReducer,
});

export default rootReducer;
