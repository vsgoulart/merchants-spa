import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import merchants from "./merchants";

export default combineReducers({ merchants, form: formReducer });
