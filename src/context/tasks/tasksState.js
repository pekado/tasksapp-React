import React, { useReducer } from "react";
import TasksContext from "./tasksContext";
import TasksReducer from "./tasksReducer";
import axiosClient from "../../config/axios";
import {
  PROJECT_TASKS,
  CREATE_TASK,
  VALIDATE_TASK,
  DELETE_TASK,
  ACTUAL_TASK,
  EDIT_TASK,
  CLEAR_TASK
} from "../../types";

const TasksState = props => {
  const initialState = {
    projecttasks: [],
    taskerror: false,
    taskstate: false,
    selectedtask: null
  };

  //crear dispatch y sstate
  const [state, dispatch] = useReducer(TasksReducer, initialState);

  // funciones

  //obtener tareas de un proyecto
  const getTasks = async project => {
    try {
      const results = await axiosClient.get("/api/tasks", { params: { project}});
      dispatch({
        type: PROJECT_TASKS,
        payload: results.data.tasks
      });
    } catch (error) {
      console.log(error)
    }
  };
  //crear tarea al proyecto
  const createTask = async task => {
    try {
      const results = await axiosClient.post("/api/tasks", task);
      dispatch({
        type: CREATE_TASK,
        payload: task
      });
    } catch (error) {}
  };
  //trae taer par editar
  const actualTask = task => {
    dispatch({
      type: ACTUAL_TASK,
      payload: task
    });
  };

  //valida y muestra un error
  const validateTask = () => {
    dispatch({
      type: VALIDATE_TASK
    });
  };

  //eliminar tarea por id
  const deleteTask = async (id, project) => {
    try {
      const results = await axiosClient.delete(
        `/api/tasks/${id}`, {params: {project}}
      );
      
      dispatch({
        type: DELETE_TASK,
        payload: id
      });
    } catch (error) {
      console.log(error);
    }
  };

  //EDITA MODIFICA TAREA
  const editTask = async task => {
    try {
      const results = await axiosClient.put(`/api/tasks/${task._id}`, task)
      dispatch({
        type: EDIT_TASK,
        payload: results.data.currentTask
      });
    } catch (error) {
      console.log(error)
    }
  };

  //borra selectedtask
  const clearTask = () => {
    dispatch({
      type: CLEAR_TASK
    })
  }

  return (
    <TasksContext.Provider
      value={{
        projecttasks: state.projecttasks,
        taskerror: state.taskerror,
        taskstate: state.taskstate,
        selectedtask: state.selectedtask,
        getTasks,
        createTask,
        validateTask,
        deleteTask,
        actualTask,
        editTask,
        clearTask
      }}
    >
      {props.children}
    </TasksContext.Provider>
  );
};

export default TasksState;
