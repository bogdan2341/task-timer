import { ADD_TASK_TIMER, DELETE_TASK_TIMER, TOGGLE_PAUSE } from "./actionTypes";

const initialState = {
  timers: [],
};

function reducer(state = initialState, { payload, type }) {
  switch (type) {
    case ADD_TASK_TIMER:
      console.log({ timers: [...state.timers, payload] });
      return {
        ...state,
        timers: [...state.timers, payload],
      };
    case DELETE_TASK_TIMER:
      return {
        ...state,
        timers: state.timers.filter((t) => t.id !== payload.id),
      };
    case TOGGLE_PAUSE:
      return {
        ...state,
        timers: state.timers.map((t) =>
          t.id === payload.id ? { ...t, isPaused: !t.isPaused } : t
        ),
      };
    default:
      return state;
  }
}

export default reducer;
