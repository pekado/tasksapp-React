import {
  PROJECT_TASKS,
  CREATE_TASK,
  VALIDATE_TASK,
  DELETE_TASK,
  TASK_STATE,
  ACTUAL_TASK,
  EDIT_TASK
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case PROJECT_TASKS:
      return {
        ...state,
        projecttasks: action.payload
      };
    case CREATE_TASK:
      return {
        ...state,
        taskerror: false,
        tasks: [action.payload, ...state.tasks]
      };
    case VALIDATE_TASK:
      return {
        ...state,
        taskerror: true
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload)
      };
    case TASK_STATE:
      return {
        ...state,
        taskstate: true
      };
    case ACTUAL_TASK:
      return {
        ...state,
        selectedtask: action.payload
      };
    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload.id ? action.payload : task
        ),
        selectedtask: null
      };
    default:
      return state;
  }
};
