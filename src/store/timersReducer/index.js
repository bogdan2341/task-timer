import {
  ADD_TASK_TIMER,
  DELETE_TASK_TIMER,
  DESTROY_DELETED_TIMER,
  PAUSE_TIMER,
  RESUME_TIMER,
  SET_DELETED_TIMERS,
  SET_TIMERS,
} from "./actionTypes";

const initialState = {
  timers: [],
  deletedTimers: [],
};

function timersReducer(state = initialState, { payload, type }) {
  switch (type) {
    case ADD_TASK_TIMER:
      return {
        ...state,
        timers: [payload, ...state.timers],
      };
    case DELETE_TASK_TIMER:
      const dTimer = state.timers.find((t) => t.id === payload.id);
      if (dTimer) {
        return {
          ...state,
          timers: state.timers.filter((t) => t.id !== payload.id),
          deletedTimers: [
            { ...dTimer, deletingTime: payload.deletingTime },
            ...state.deletedTimers,
          ],
        };
      } else {
        return {
          ...state,
        };
      }
    case RESUME_TIMER:
      console.log(state);
      return {
        ...state,
        timers: state.timers.map((t) => {
          if (t.id === payload.id) {
            return {
              ...t,
              isPaused: false,
              pausingTime: 0,
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
    case SET_DELETED_TIMERS:
      return {
        ...state,
        deletedTimers: payload.timersArray,
      };
    case DESTROY_DELETED_TIMER:
      return {
        ...state,
        deletedTimers: state.deletedTimers.filter((dt) => dt.id !== payload.id),
      };
    default:
      return state;
  }
}

export default timersReducer;
