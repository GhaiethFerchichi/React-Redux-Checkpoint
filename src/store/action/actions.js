import * as actionTypes from "./actionTypes";

export const addTaskHandler = (newTask) => ({
  type: actionTypes.ADDTASK,
  newTask,
});

export const removeTaskHandler = (id) => ({
  type: actionTypes.REMOVETASK,
  id,
});

export const editTask = (taskEdited) => ({
  type: actionTypes.EDITTASK,
  taskEdited,
});
