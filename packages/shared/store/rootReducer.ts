import { combineReducers } from "@reduxjs/toolkit";

import counter from "./reducers/counterSlice";

const rootReducer = combineReducers({
  counter,
});

export default rootReducer;
