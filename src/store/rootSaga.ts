import { all } from "redux-saga/effects";

import { watchUser } from "./user/saga";
import { watchTopic } from "./topic/saga";

export default function* rootSaga(): Generator {
  yield all([watchUser(), watchTopic()]);
}
