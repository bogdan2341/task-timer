import { createStore, combineReducers } from "redux";
import tasksReducer from "./tasksReducer";
import settingsReducer from "./settingsReducer";

export default createStore(
  combineReducers({
    tasks: tasksReducer,
    settings: settingsReducer,
  })
);
