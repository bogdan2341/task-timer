import {
  ADD_TASK_TIMER,
  DELETE_TASK_TIMER,
  SET_TIMERS,
  PAUSE_TIMER,
  RESUME_TIMER,
} from "./actionTypes";

export const addTimer = (id, title, startingTime) => {
  return {
    type: ADD_TASK_TIMER,
    payload: {
      id,
      title,
      startingTime,
      pausingTime: 0,
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

export const pauseTimer = (id, time) => {
  return {
    type: PAUSE_TIMER,
    payload: {
      id,
      time,
    },
  };
};

export const resumeTimer = (id, time) => {
  return {
    type: RESUME_TIMER,
    payload: {
      id,
      time,
    },
  };
};

export const setTimers = (timersArray) => {
  return {
    type: SET_TIMERS,
    payload: {
      timersArray,
    },
  };
};
