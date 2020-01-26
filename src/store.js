import { createStore, combineReducers } from "redux";
import userDataReducer from "./utils/userData/reducer";

const store = createStore(
  combineReducers({
    userData: userDataReducer
  })
);

export default store;
