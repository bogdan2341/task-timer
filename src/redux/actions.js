import { ADD_TASK_TIMER, DELETE_TASK_TIMER, TOGGLE_PAUSE } from "./actionTypes";

export const addTimer = (id, title, startingTime) => {
  return {
    type: ADD_TASK_TIMER,
    payload: {
      id,
      title,
      startingTime,
      isPaused: false,
    },
  };
};

export const deleteTimer = (id) => {
  return {
    type: DELETE_TASK_TIMER,
    payload: {
      id,
    },
  };
};

export const togglePause = (id) => {
  return {
    type: TOGGLE_PAUSE,
    payload: {
      id,
    },
  };
};
