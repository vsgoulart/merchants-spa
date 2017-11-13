import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import merchants from "./merchants";
import redirect from "./redirect";

export default combineReducers({
  merchants,
  form: formReducer,
  redirect
});
