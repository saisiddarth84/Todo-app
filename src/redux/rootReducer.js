import { combineReducers } from "@reduxjs/toolkit";
import operationsReducer from "./todoapp/reducers/operations";

const rootReducer = combineReducers({
  operations: operationsReducer,
});

export default rootReducer;