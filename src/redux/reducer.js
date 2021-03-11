import {
  ADD_TASK_TIMER,
  DELETE_TASK_TIMER,
  PAUSE_TIMER,
  RESUME_TIMER,
  SET_TIMERS,
  TOGGLE_PAUSE,
} from "./actionTypes";

const initialState = {
  timers: [],
};

function reducer(state = initialState, { payload, type }) {
  switch (type) {
    case ADD_TASK_TIMER:
      return {
        ...state,
        timers: [payload, ...state.timers],
      };
    case DELETE_TASK_TIMER:
      return {
        ...state,
        timers: state.timers.filter((t) => t.id !== payload.id),
      };
    case RESUME_TIMER:
      console.log(state);
      return {
        ...state,
        timers: state.timers.map((t) => {
          if (t.id === payload.id) {
            return {
              ...t,
              isPaused: false,
              pausingTime: t.pausingTime,
              startingTime: t.startingTime + (payload.time - t.pausingTime),
            };
          } else {
            return t;
          }
        }),
      };
    case PAUSE_TIMER:
      console.log(state);
      return {
        ...state,
        timers: state.timers.map((t) => {
          if (t.id === payload.id) {
            return { ...t, isPaused: true, pausingTime: payload.time };
          } else {
            return t;
          }
        }),
      };
    case SET_TIMERS:
      return {
        ...state,
        timers: payload.timersArray,
      };
    default:
      return state;
  }
}

export default reducer;
