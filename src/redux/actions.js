import { ADD_TASK_TIMER } from "./actionTypes";

export const addTimer = (title, startingTime) => {
  return {
    type: ADD_TASK_TIMER,
    payload: {
      title,
      startingTime,
    },
  };
};
