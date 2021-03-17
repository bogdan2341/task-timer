import { ADD_TASK, DELETE_DONE_TASK, DONE_TASK, PAUSE_TASK, RESUME_TASK, SET_DONE_TASKS, SET_TASKS } from "./actionTypes";

export const addTask = (id, title, startingTime) => {
  return {
    type: ADD_TASK,
    payload: {
      id,
      title,
      startingTime,
      pausingTime: 0,
      isPaused: false,
    },
  };
};

export const doneTask = (id, doneTime = Date.now()) => {
  return {
    type: DONE_TASK,
    payload: {
      id,
      doneTime,
    },
  };
};

export const pauseTask = (id, time) => {
  return {
    type: PAUSE_TASK,
    payload: {
      id,
      time,
    },
  };
};

export const resumeTask = (id, time) => {
  return {
    type: RESUME_TASK,
    payload: {
      id,
      time,
    },
  };
};

export const setTasks = (tasksArray) => {
  return {
    type: SET_TASKS,
    payload: {
      tasksArray,
    },
  };
};

export const setDoneTasks = (doneTasksArray) => {
  return {
    type: SET_DONE_TASKS,
    payload: {
      doneTasksArray,
    },
  };
};

export const deleteDoneTask = (id) => {
  return {
    type: DELETE_DONE_TASK,
    payload: {
      id,
    },
  };
};
