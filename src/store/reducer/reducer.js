import * as actionTypes from "../action/actionTypes";

const initialState = {
  todos: [
    { id: 1, description: "todo 1", isDone: false },
    { id: 2, description: "todo 2", isDone: true },
    { id: 3, description: "todo 3", isDone: false },
  ],
};

export default (state = initialState, { type, newTask, id, taskEdited }) => {
  console.log(state);
  switch (type) {
    case actionTypes.ADDTASK:
      return {
        todos: state.todos.concat({
          id: Math.floor(Math.random() * 10 + state.todos.length * 30),
          description: newTask.description,
          isDone: newTask.isDone,
        }),
      };

    case actionTypes.REMOVETASK:
      return {
        todos: state.todos.filter((el) => el.id !== id),
      };

    case actionTypes.EDITTASK:
      const updatedTodos = [...state.todos];
      const elementToEdit = updatedTodos.findIndex(
        (el) => el.id === taskEdited.id
      );
      updatedTodos[elementToEdit] = taskEdited;
      return {
        ...state,
        todos: updatedTodos,
      };

    default:
      return state;
  }
};
