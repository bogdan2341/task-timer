import {
  ADD_TASK, DELETE_DONE_TASK, DONE_TASK, PAUSE_TASK, RESUME_TASK, SET_DONE_TASKS, SET_TASKS, 
} from "./actionTypes";

const initialState = {
  currentTasks: [],
  doneTasks: [],
};

function tasksReducer(state = initialState, { payload, type }) {
  switch (type) {
    case ADD_TASK:
      return {
        ...state,
        currentTasks: [payload, ...state.currentTasks],
      };
    case DONE_TASK:
      const doneTask = state.currentTasks.find((t) => t.id === payload.id);
      if (doneTask) {
        return {
          ...state,
          currentTasks: state.currentTasks.filter((t) => t.id !== payload.id),
          doneTasks: [
            { ...doneTask, doneTime: payload.doneTime },
            ...state.doneTasks,
          ],
        };
      } else {
        return {
          ...state,
        };
      }
    case RESUME_TASK:
      return {
        ...state,
        currentTasks: state.currentTasks.map((t) => {
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
    case PAUSE_TASK:
      return {
        ...state,
        currentTasks: state.currentTasks.map((t) => {
          if (t.id === payload.id) {
            return { ...t, isPaused: true, pausingTime: payload.time };
          } else {
            return t;
          }
        }),
      };
    case SET_TASKS:
      return {
        ...state,
        currentTasks: payload.tasksArray,
      };
    case SET_DONE_TASKS:
      return {
        ...state,
        doneTasks: payload.doneTasksArray,
      };
    case DELETE_DONE_TASK:
      return {
        ...state,
        doneTasks: state.doneTasks.filter((dt) => dt.id !== payload.id),
      };
    default:
      return state;
  }
}

export default tasksReducer;
