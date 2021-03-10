import { ADD_TASK_TIMER } from "./actionTypes";

const initialState = {
  timers: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TASK_TIMER:
      return { ...state.timers.push(action.payload) };
    default:
      return state;
  }
}
