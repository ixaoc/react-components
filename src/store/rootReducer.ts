import { Action, combineReducers } from "redux";

import user from "./user";
import topic from "./topic";

const reducers = combineReducers({
  user,
  topic,
});

export default reducers;
