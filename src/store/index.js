import { createStore, combineReducers } from "redux";
import timersReducer from "./timersReducer";
import settingsReducer from "./settingsReducer";

export default createStore(
  combineReducers({
    timersStore: timersReducer,
    settings: settingsReducer,
  })
);
