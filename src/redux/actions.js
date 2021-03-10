import { ADD_TASK_TIMER, DELETE_TASK_TIMER } from "./actionTypes";

export const addTimer = (id, title, startingTime) => {
  return {
    type: ADD_TASK_TIMER,
    payload: {
      id,
      title,
      startingTime,
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
