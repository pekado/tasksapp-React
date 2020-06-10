//importo types para el switch
import {
  PROJECT_TASKS,
  CREATE_TASK,
  VALIDATE_TASK,
  DELETE_TASK,
  ACTUAL_TASK,
  EDIT_TASK,
  CLEAR_TASK
} from "../../types";
//creo un switch para cada case, al caer en uno actualiza states iniciales.
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
        // projecttasks: [action.payload, ...state.projecttasks]
      };
    case VALIDATE_TASK:
      return {
        ...state,
        taskerror: true
      };
    case DELETE_TASK:
      return {
        ...state,
        projecttasks: state.projecttasks.filter(task => task._id !== action.payload)
      };
    case ACTUAL_TASK:
      return {
        ...state,
        selectedtask: action.payload
      };
    case EDIT_TASK:
      return {
        ...state,
        projecttasks: state.projecttasks.map(task =>
          task._id === action.payload._id ? action.payload : task
        ),
        selectedtask: null
      };
      case CLEAR_TASK:
        return{
          ...state,
          selectedtask: null
        }
    default:
      return state;
  }
};
